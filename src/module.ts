import { PluginPack } from './plugin'
import { CommandModule } from './config'
import { readFile, writePath } from './loader.js'
import Path from 'path'

export class Module {
  input: CommandModule['input']
  output: CommandModule['output']
  plugins: CommandModule['plugins']
  overwrite: Boolean
  sources: {
    [key: string]: string
  }[]
  currSource: any

  constructor(props: CommandModule) {
    this.input = props.input || []
    this.output = props.output
    this.plugins = props.plugins
    this.overwrite = props.overwrite
  }

  async read() {
    let contents = []
    for (let i = 0; i < this.input.length; i++) {
      const content = await readFile(this.input[i])
      contents.push(content)
    }
    this.sources = contents
    return contents
  }

  async merge(plugin: PluginPack) {
    this.currSource = await plugin.exec(this, 'merge')
    return this.currSource
  }

  async convert(plugin: PluginPack) {
    this.currSource = await plugin.exec(this, 'convert')
    return this.currSource
  }

  write() {
    const paths: string[] = []
    this.currSource.forEach((fileInfos: any[]) => {
      fileInfos.forEach(fileInfo => {
        const path = Path.join(this.output, fileInfo.name)
        writePath(path, fileInfo.content, fileInfo.encoding)
        paths.push(path)
      })
    })
    return paths
  }
}
