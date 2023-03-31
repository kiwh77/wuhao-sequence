import Fs from 'fs'
import Path from 'path'
import Http from 'http'
import { load as loadYaml } from 'js-yaml'

export async function readConfigFiles(paths: string[], cb?: Function) {
  let result
  let index = 0
  while (!result && index < paths.length) {
    const name = paths[index]
    const path = Path.join(process.cwd(), name)

    if (name.endsWith('.js')) {
      try {
        const importResult = await import(path)

        if (importResult && importResult.default) result = importResult.default
      } catch (e) {}
    } else {
      try {
        result = await readFile(path)
      } catch {}
    }
    index++
    if (result) cb(name)
  }
  return result
}

export function HTTPGet(url: string) {
  return new Promise((resolve, reject) => {
    Http.get(url, (res: any) => {
      const { statusCode } = res
      const contentType = res.headers['content-type']

      let error
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`)
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error(
          'Invalid content-type.\n' +
            `Expected application/json but received ${contentType}`
        )
      }
      if (error) {
        res.resume()
        return reject(error)
      }

      res.setEncoding('utf8')
      let rawData = ''
      res.on('data', (chunk: string) => (rawData += chunk))
      res.on('end', () => resolve(rawData))
    }).on('error', reject)
  })
}

// 读取文件内容
export async function readFileText(path: string) {
  if (path.startsWith('http')) {
    return (await HTTPGet(path)) as string
  }
  const exist = Fs.existsSync(path)
  if (!exist) return

  return Fs.readFileSync(path, 'utf-8')
}

export async function readFile(path: string) {
  let result
  if (path.startsWith('http')) {
    const data = (await HTTPGet(path)) as string
    try {
      result = JSON.parse(data)
    } catch (e) {
      try {
        result = loadYaml(data)
      } catch (e) {
        throw e
      }
    }
  } else {
    const exist = Fs.existsSync(path)
    if (!exist) return

    const text = Fs.readFileSync(path, 'utf-8')
    try {
      if (path.endsWith('.yml') || path.endsWith('.yaml')) {
        result = loadYaml(text)
      } else if (path.endsWith('.json')) {
        result = JSON.parse(text)
      }
    } catch (e) {}
  }
  return result
}

export function resolvePath(path: string, ...args: string[]) {
  return Path.join(process.cwd(), path, ...args)
}

export function verifyPath(path: string) {
  const pwd = process.cwd()
  if (path.indexOf(pwd) > -1) return path
  if (path.startsWith('http:')) return path
  return resolvePath(path)
}

export function writePath(
  path: string,
  content: string,
  encoding: BufferEncoding = 'utf-8'
) {
  const dirname = Path.dirname(path)
  if (!Fs.existsSync(dirname)) Fs.mkdirSync(dirname)
  return Fs.writeFileSync(path, content, {
    encoding
  })
}
