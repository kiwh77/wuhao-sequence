import Path from 'path'
import { readFile } from './loader.js'
import logsets from 'wh-logsets'

export const taskList = logsets.tasklist({})

export async function useBanner() {
  const pkg = await readFile('package.json')

  const logBanner = logsets.banner()
  logBanner.add('Mario Serialize')
  logBanner.add('Use early and off work early.')
  logBanner.add('version : {version}', pkg.version)
  logBanner.render()
  return logBanner
}
