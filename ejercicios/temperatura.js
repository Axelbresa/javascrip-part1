let c, f;
function celsius_f(c){
f=1.8*(c)+32;
console.log(`
${c}ºc
${f}ºf`);
return
}

function Faranheit_c(f){
c=((f)-32)/1.8;
console.log(`
${f}ºf
${c}ºc`);
return}

console.log(celsius_f(1000));
console.log(Faranheit_c(500));
