var outPut= [];
var count = 1;
function fizzBuzz() {

while (count <= 100 ) {



if (count % 5 === 0 && count % 3 === 0) {
    outPut.push("FizzBuzz!");
    count++;
  }


else if (count % 3 === 0) {
  outPut.push("Fizz");
  count++;
}

else if (count % 5 === 0) {

  outPut.push("Buzz");
  count++;
}


else {
  outPut.push(count);
  count++;
}

}


console.log(outPut);
};
