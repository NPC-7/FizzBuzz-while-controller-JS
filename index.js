var output = [];
var count = 1;

function fizzBuzz () {

  var x = prompt("How many count?");

  while (count<=x){

    if(count%3===0 && count%5===0){
     output.push("Fizz-Buzz"); 
    }else{
      if(count%3===0){
        output.push("Fizz");
      }else if (count%5===0){
        output.push("Buzz");
      }else{
        output.push(count);
      }
    }

    count++;

  }

}
