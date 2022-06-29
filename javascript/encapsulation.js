class Square {
    constructor(width, height) {
        this.width = width
        this.height = height
        this._color = 'blue'
    }

    get color() { return this._color }
    set color(n_color) { this._color = n_color }

    calculateArea() { return this.width * this.height }
}

let square = new Square(3, 4)
console.log(square);
square.color = 'red'
console.log(square.color);

