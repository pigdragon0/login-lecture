'use strict';

class UserStorage {
  static #users = {
    id: ['paul', '나개발', '김팅장'],
    psword: ['1234', '1234', '123456'],
    name: ['폴', '나개발', '김팅장'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
