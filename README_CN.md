# Wuhao Sequence

中文 | [English](README.md)

用途：根据模板构建序列化数据文件

## 功能

* 根据配置文件，输出经过转换、模板编译后的文件
* 支持多数据源合并，可自定义插件合并
* 支持自定义插件来适应各种数据结构

## 安装

```sh
  # npm
  npm install wuhao-sequence --save-dev
  # yarn
  yarn add wuhao-sequence --save-dev
  # cnpm
  cnpm install wuhao-sequence --save-dev
  # pnpm
  pnpm add wuhao-sequence --save-dev
```

## 配置文件

支持配置文件类型，读取顺序如下：
* `sequence.config.js`：推荐，便于插件读取及自定义插件,
* `sequencerc.js`：推荐，便于插件读取及自定义插件
* `sequencerc.yml`,
* `sequencerc.yaml`,
* `sequencerc.json`,
* `.sequencerc`,

### 配置文件内容

```js
import { OpenApiV3Plugin, OpenApiV3Template } from 'sequence-plugin-network-openapiv3'

export default {
  debug: true,
  modules: [
    {
      input: ['./example/openapi.json'],
      output: '/example/serialize',
      plugins: [OpenApiV3Plugin],
      template: [OpenApiV3Template]
    }
  ]
}
```

## 插件

### 现有插件
| 名称 | 说明 | 
|---|---|
| `sequence-plugin-network-openapiv2` | 把`OpenApiV2`规范数据转为`wuhao-network`中的服务 |
| `sequence-plugin-network-openapiv3` | 把`OpenApiV2`规范数据转为`wuhao-network`中的服务 |

## 插件开发

<!-- TODO -->


