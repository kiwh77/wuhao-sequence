import { OptionValues } from 'commander'
import { PluginPack } from './plugin.js'
import { CommandOptions } from './config.js'
import { readConfigFiles, resolvePath, verifyPath } from './loader.js'
import { Generator } from './generate.js'
import { Module } from './module.js'
import { TemplatePack } from './template.js'

export class Creator {
  config: CommandOptions
  generator: Generator

  plugin: PluginPack = new PluginPack()
  template: TemplatePack = new TemplatePack()
  modules: Module[]

  /** 转换参数 */
  async init(options: OptionValues) {
    const log = {
      configSource: '',
      moduleLength: 0,
      debug: false
    }

    // 整合配置
    let config: CommandOptions = {
      modules: []
    }
    this.modules = []
    if (options.input) {
      const module = {
        input: options.input.map((url: string) => resolvePath(url)),
        output: resolvePath(options.output),
        template: options.template
      }
      this.modules.push(new Module(module))
      config.modules.push(module)
      log.configSource = 'cli'
    } else {
      const definePaths = [
        'sequence.config.js',
        'sequencerc.js',
        'sequencerc.yml',
        'sequencerc.yaml',
        'sequencerc.json',
        '.sequencerc'
      ]
      const defineConfig = await readConfigFiles(
        definePaths,
        (defineName: string) => {
          log.configSource = defineName
        }
      )
      if (!defineConfig || defineConfig.length === 0) {
        console.log('Not find defined config file!')
        return
      }
      config = defineConfig
    }
    config.modules = config.modules.map(module => {
      module.input = (module.input || []).map(verifyPath)
      module.output = verifyPath(module.output)
      if (module.plugins && module.plugins.length > 0) {
        this.plugin.load(module.plugins)
      }
      if (module.template) {
        this.template.load(module.template)
      }
      this.modules.push(new Module(module))
      return module
    })

    log.debug = config.debug
    log.moduleLength = config.modules.length

    this.config = config

    return log
  }

  async load() {
    let log: any = []
    for (let i = 0; i < this.modules.length; i++) {
      const module = this.modules[i]
      await module.read()
      log.push(module.input)
    }
    return log
  }
  async merge() {
    const result = []
    for (let i = 0; i < this.modules.length; i++) {
      const module = this.modules[i]
      result.push(await module.merge(this.plugin))
    }
    return result
  }
  async compile() {
    const result = []
    for (let i = 0; i < this.modules.length; i++) {
      const module = this.modules[i]
      result.push(await module.compile(this.template))
    }
    return result
  }
  async write() {
    let paths: string[] = []
    for (let i = 0; i < this.modules.length; i++) {
      const module = this.modules[i]
      paths = [...paths, ...(await module.write())]
    }
    return paths
  }
}
