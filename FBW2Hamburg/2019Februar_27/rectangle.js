class rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
   
    calcArea(){
        return this.height*this.width;
    }
}

let myRectangle = new rectangle(10,10);
console.log(myRectangle.calcArea());