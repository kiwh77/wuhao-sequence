export class TemplatePack {
  sources: {
    [key: string]: any
  } = {}

  async load(template: any) {
    if (typeof template === 'function' && template.constructor) {
      const instance = new template()
      if ('name' in instance && 'convert' in instance)
        this.sources[instance.name] = instance
    } else if (
      Object.prototype.toString.apply(template) === '[object Object]' &&
      'name' in template &&
      'convert' in template
    ) {
      this.sources[template.name] = template
    }
  }

  compile(
    templates: Array<string | Function | { name: string; convert: Function }>,
    content: Object
  ) {
    return templates.map(template => {
      if (typeof template === 'string') {
        return this.sources[template].covert(content)
      } else if (typeof template === 'function') {
        if (template.constructor && 'convert' in template.prototype) {
          return new (template as any)().convert(content)
        } else {
          return template(content)
        }
      } else if (
        Object.prototype.toString.apply(template) === '[object Object]' &&
        'convert' in template
      ) {
        return template.convert(content)
      }
      return ''
    })
  }
}
