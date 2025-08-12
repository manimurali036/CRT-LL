function greet(name){
    return `hello',${name}`;
}
console.log(greet("mani"))
let a=0;
let b=0;
let sum=function(x,y){
    return x+y;
}
let sum2=(x,y)=>x+y;
let greater=(x,y)=>x>y?x:y;
console.log(greater(a,b));
console.log(sum2(a,b));