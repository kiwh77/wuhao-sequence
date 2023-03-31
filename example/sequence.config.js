import OpenApiV3 from './dist/plugins/openApiV3/index.js'
import { OpenApiV3ToService } from './dist/templates/mario_service/index.js'
//
export default {
  debug: true,
  modules: [
    {
      input: ['./example/openapi.json'],
      output: '/example/serialize',
      plugins: [OpenApiV3],
      template: [OpenApiV3ToService]
    }
  ]
}
