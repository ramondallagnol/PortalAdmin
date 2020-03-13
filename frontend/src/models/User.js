export default class User {
  constructor (id, name, login, email, password, position, image) {
    this.id = id
    this.name = name
    this.login = login
    this.email = email
    this.password = password
    this.position = position
    this.image = image
  }

  url () {
    return ''
  }
}
