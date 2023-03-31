import { Module } from './module'
import { CommandModule } from './config'

export type PluginAction = 'merge' | 'compile'

export interface iPlugin extends Partial<Record<PluginAction, Function>> {
  name?: string
  handle(sources: any[], module: CommandModule): any
}

export class PluginPack {
  plugins: {
    [key: string]: iPlugin
  } = {}

  async load(plugins: Array<iPlugin | string>) {
    for (let i = 0; i < plugins.length; i++) {
      const plugin = plugins[i]
      try {
        if (typeof plugin === 'string') {
          const { default: instance } = await import(plugin)
          if (instance && typeof instance === 'function') {
            this.plugins[plugin] = instance
          }
        } else if (
          Object.prototype.toString.apply(plugin) === '[object Object]' &&
          plugin.name
        ) {
          this.plugins[plugin.name] = plugin
        }
      } catch {}
    }
  }

  async exec(module: Module, action: PluginAction) {
    let i = 0
    let result
    while (i < module?.plugins.length) {
      const pluginKey = module.plugins[i]

      const plugin =
        typeof pluginKey === 'string'
          ? this.plugins[pluginKey]
          : typeof pluginKey === 'function'
          ? pluginKey
          : Object.prototype.toString.apply(pluginKey) === '[object Object]'
          ? pluginKey
          : pluginKey?.name
          ? this.plugins[pluginKey.name]
          : null
      try {
        if (plugin && plugin[action] && typeof plugin[action] === 'function') {
          result = await plugin[action](module, result, module.sources)
        }
      } catch {}
      i++
    }
    return result
  }
}
