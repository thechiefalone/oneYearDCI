function chMsg(lang) {
  if (lang=="en") {
      console.log("Hello World");
  } else if (lang=="de") {
      console.log("Hallo Welt");
  }
  else if (lang=="tr"){
      console.log("Merhaba Dunya");
  }
  else{
      console.log("Not Supported");
  }
}

chMsg("ar");

// 
var animalName = "cat";

function calculate (num,animalName) {
    if (num>1) {
        return "I have "+ num +" "+ animalName+"s";
        
    } else if(num==1) {
        return "I have " + num +" "+ animalName;
        
    }
    return "Please give a correct number";
    
}

console.log(calculate (5,"cat"));
