class Animal { 
    constructor(name) {
      this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
      }
    }

    class Lion extends Animal{
        constructor (name,color){
            super (name);
            this.color=color;
        }
        speak(){
            console.log(this.name+" makes a roar");
        }
    }

    let d=new Lion("king","white");
    d.speak();
    console.log(d.color);