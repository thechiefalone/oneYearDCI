//Method 1

function extractUniqCharacters(str){
    var temp = {};
    for(var oindex=0;oindex<str.length;oindex++){
        temp[str.charAt(oindex)] = 0; //Assign any value
    }
    return Object.keys(temp).join("");
}

console.log(extractUniqCharacters("alperen came to school_1"));

//Method 2

function remove(text) 
{
  var unique= "";
  for(var i = 0; i < text.length; i++)
  {
    if(unique.indexOf(text.charAt(i)) < 0) 
    {
      unique += text.charAt(i);
    }
  }
  return unique;
}

console.log(remove("alperen came to school_2"));





