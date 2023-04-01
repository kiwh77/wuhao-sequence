import { iPlugin } from './plugin'

export interface CommandModule {
  /** Api file url/path */
  input: string[]
  /** output dir path */
  output: string
  /** pick condition */
  pick?: Function[]
  /** exclude condition */
  exclude?: Function[]
  /** generated files can overwrite? */
  overwrite?: boolean
  /** handle plugins */
  plugins?: Array<iPlugin | string | Function>
}

export interface CommandOptions {
  debug?: boolean
  /** global set generated files can overwrite */
  modules: CommandModule[]
}
