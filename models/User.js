class User {
    constructor(id, login) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = [];
    }

    static getAll() {
        return users
    }
}

const users = [
    new User(1, "user1"),
    new User(2, "user2"),
    new User(3, "user3")
]

module.exports = User