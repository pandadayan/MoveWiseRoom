
const modules = import.meta.glob('./*.js', { eager: true })
export default {
  install (app) {
    for (const key in modules) {
      const name = modules[key]?.default?.name
      const directive = modules[key]?.default?.directive
      app.directive(name, directive)
    }
  }
}
