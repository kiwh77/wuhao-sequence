import OpenApiV3 from 'sequence-plugin-openapiv3-network'

export default {
  debug: true,
  modules: [
    {
      input: ['openapi.yml'],
      output: 'sequence',
      plugins: [OpenApiV3]
    }
  ]
}
