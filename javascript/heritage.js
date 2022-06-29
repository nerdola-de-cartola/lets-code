class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Citizen extends Person {
    constructor(name, age, rg, cpf) {
        super(name, age)
        this.rg = rg
        this.cpf = cpf
    }
}

const I = new Citizen ('Matheus', 18, '32423', '04866065117')

console.log(I);
console.log(I instanceof Person);
console.log(I instanceof Citizen);
