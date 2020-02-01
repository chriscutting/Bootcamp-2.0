//99 Bottles challenge
var count = 99;
var outPut = [];
function bottles() {

while (count <= 99 && count > 0) {

outPut.push(count + "bottles of beer on the wall " + count + " bottles of beer, take one down, pass it around");
count--;
outPut.push(count + " bottles of beer on the wall,");



}

if (count = 0) {
  outPut.push("no more bottles of beer on the wall, no more bottles of beer,")
}

};
