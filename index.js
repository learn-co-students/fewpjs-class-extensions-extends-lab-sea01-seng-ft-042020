// Your code here
class Polygon {
    constructor(arr){
        this.arr = arr;
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
        return this.arr.reduce(function(a,b) { return a+b })
    }
}

class Triangle extends Polygon {
    get isValid() {
        const side0 = this.arr[0]
        const side1 = this.arr[1]
        const side2 = this.arr[2]

        if (side0 > side1 + side2){
            return false
        } else if (side1 > side0 + side2) {
            return false
        } else if (side2 > side1 + side0) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get area() {
        return this.arr[0]**2
    }

    get isValid() {
        if (this.arr[0] == this.arr[1] && this.arr[1] == this.arr[2] && this.arr[2] == this.arr[3]) {
            return true
        } else {
            return false
        }
    }
}