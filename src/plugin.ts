import { Module } from './module'
import { CommandModule } from './config'

export type PluginAction = 'merge' | 'convert'

export interface iPlugin
  extends Partial<
    Record<PluginAction, (module: CommandModule, grand: any) => {}>
  > {
  name?: string
}

function isClass(cls: unknown) {
  return cls && /^class|function/.test(cls.toString())
}

function isFunction(func: unknown) {
  return func && typeof func === 'function'
}

export class PluginPack {
  async load(plugin: CommandModule['plugins'][0]) {
    let result
    // path
    if (typeof plugin === 'string') {
      const { default: instance } = await import(plugin)
      // Class or Function
      if (isClass(instance)) result = new instance()
      // Object or Class interface
    } else if (
      Object.prototype.toString.apply(plugin) === '[object Object]' &&
      'name' in (plugin as iPlugin)
    ) {
      result = plugin
    } else if (isClass(plugin)) {
      result = new (plugin as any)()
    }
    return result
  }

  async exec(module: Module, action: PluginAction) {
    let i = 0
    let result
    while (i < module?.plugins.length) {
      const configPlugin = module.plugins[i]

      const plugin: iPlugin = await this.load(configPlugin)

      let func
      if (plugin && plugin[action]) {
        func = plugin[action].bind(plugin)
      } else if (isFunction(plugin)) {
        func = plugin as Function
      }
      if (isFunction(func)) {
        result = await func(module, result)
      }
      i++
    }
    return result
  }
}
