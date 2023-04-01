import Path from 'path'
import { readFile, getDirName } from './loader.js'
import logsets from 'wh-logsets'

export const taskList = logsets.tasklist({})

export async function useBanner() {
  const pkg = await readFile(Path.join(getDirName(), '../package.json'))

  const logBanner = logsets.banner()
  logBanner.add('{name}', pkg.name)
  logBanner.add('{description}', pkg.description)
  logBanner.add('homepage: {homepage}', pkg.homepage)
  logBanner.add('version : {version}', pkg.version)
  logBanner.render()
  return logBanner
}
