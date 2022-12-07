var nom = 'ana'
function foo() {
    var nom = 'ben'
    console.log(nom)
}
foo()
console.log(nom)

class User {
    name = 'ana'
    constructor() {

    }

    avatar() {
        const url = () => {
            return '/image/' + this.name
        }
        return url()
    }

    avatarsimple() {
        const url = () => '/image/' + this.name
    }
}

const user=  new User()
console.log(user.avatar())
