class rectangle {
    width;
    height;
    area;
    color;
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.area = height * width;
        this.perimeter=2*(height+width);
    }

    calcArea() {
        return this.height * this.width;
    }
}

let myRectangle_1 = new rectangle(10, 5);
console.log(myRectangle_1.area);
console.log(myRectangle_1.perimeter);

let myRectangle_2 = new rectangle(10, 3);
console.log(myRectangle_2.calcArea());

myRectangle_2.color="yellow";

console.log(myRectangle_2.color);