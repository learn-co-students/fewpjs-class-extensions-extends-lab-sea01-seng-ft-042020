class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function(acc, element) {return acc + element})
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) {return false}
        let [a, b, c] = this.sides
        let ab = a + b
        let bc = b + c
        let ca = c + a

        if (ab <= c || bc <= a || ca <= b) {return false}
        else {return true}
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) {return false}
        let [a, b, c, d] = this.sides
        if (a !== b || b !== c || c !== d) {return false}
        else {return true}
    }

    get area() {
        return this.sides[0]**2
    }
}