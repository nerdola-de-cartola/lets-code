class Pessoa {
    constructor(id, name, age, address) {
        if(isNaN(id) || isNaN(age)) {
            throw 'Dados não numérico'
        } else {
            this.id = id
            this.name = name,
            this.age = age
            this.address = undefined
        } 
    }
    getOlder(n) {
        return this.age += n 
    }
}

const pessoa1 = new Pessoa('0' ,'Matheus', 18);

pessoa1.address = 'Goiânia'

console.log(pessoa1.getOlder(2));
console.log(pessoa1.age);
