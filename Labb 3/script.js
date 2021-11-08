let x = "Text"
console.log(x);
let y = 5;
console.log(y);

let colors = ["Vitt", "Brunt", "Grönt"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

function gubbarLadd(name, amount) {
    console.log(name, "vill ha", amount, "gubbar ladd")
}
gubbarLadd("Marouan",3)
gubbarLadd("Kevin",2)
gubbarLadd("Peter",5)

var laddFinns = true;

if(laddFinns){
    console.log("Köp ladd bror!")
}else{
    console.log("Tagga bre din jävla musht!")
}