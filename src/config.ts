import { iPlugin } from './plugin'

export interface CommandModule {
  /** Api file url/path */
  input: string[]
  /** output dir path */
  output: string
  /** compile template */
  template: Array<{
    name: string
    convert: Function
  }>
  /** pick tag to generate */
  pick?: string[]
  /** exclude tag */
  exclude?: string[]
  /** generated files will overwrite! */
  overwriteFile?: boolean
  /** handle plugins */
  plugins?: Array<iPlugin | string>
}

export interface CommandOptions {
  debug?: boolean
  template?: string
  /** global set generated files can overwrite */
  overwriteFile?: boolean
  modules: CommandModule[]
}
