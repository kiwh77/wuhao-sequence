import { Command } from 'commander'
import logsets from 'wh-logsets'
import { Creator } from './index.js'
import { readFile } from './loader.js'

import { useBanner, taskList } from './logsets.js'

async function initialize(argv: string[]) {
  const program = new Command()
  const pkg = await readFile('package.json')

  program
    .name(pkg.name)
    .version(pkg.version)
    .usage('sequence -i <OpenApi Url> -o <Target Path>')
    .option('-i | --input <url...>', 'input file url')
    .option('-o | --output <path>', 'output file path', 'src/apis')
    .addHelpText(
      'afterAll',
      `define sequence.config.js or .sequencerc or sequencerc.js or sequencerc.json in your project root dir
eg.
{
  modules: [
    {
      input: './openapi.json',
      output: 'src/apis'
    },
    {
      input: 'http://www.site.com/api/openapi.json',
      output: 'src/apis'
    }
  ]
}
      `
    )
    .parse(argv)

  const options = program.opts()
  return [program, options]
}

initialize(process.argv).then(async ([, options]) => {
  let debug = false
  try {
    useBanner()

    const creator = new Creator()

    taskList.add('Read configs')
    const initLog = await creator.init(options)
    taskList.complete(
      initLog.moduleLength + ' modules from ' + initLog.configSource
    )

    debug = initLog.debug

    taskList.add('Load modules')
    const loadLog = await creator.load()
    taskList.complete(loadLog.length + ' sources')

    if (debug && loadLog.length > 0) {
      const loadLogTable = logsets.table({
        maxColWidth: 120
      })

      loadLogTable.addHeader('index', 'source')
      loadLog.forEach((inputs: string[], index: number) => {
        inputs.forEach(input => loadLogTable.addRow(index + 1, input))
      })
      loadLogTable.render()
    }

    taskList.add('Merge sources')
    await creator.merge()
    taskList.complete('OK')

    taskList.add('Convert')
    await creator.convert()
    taskList.complete('OK')

    taskList.add('Write file')
    const result = await creator.write()
    taskList.complete(result.length + ' files')

    if (debug && result.length > 0) {
      const resultLogTable = logsets.table({
        maxColWidth: 120
      })
      resultLogTable.addHeader('index', 'source')
      result.forEach((path, index) => {
        resultLogTable.addRow(index + 1, path)
      })
      resultLogTable.render()
    }
  } catch (e) {
    taskList.error()
    logsets.error(e.message)
    if (debug) console.error(e)
    process.exitCode = 1
  }
})
