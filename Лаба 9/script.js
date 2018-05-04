document.querySelector('button').onclick = func;
function func (){
let l = document.querySelector('.l').value;
let v = document.querySelector('.v').value;
let w = v - Math.sin(Math.pow(l, 2)+4*v)+Math.exp(2*l);
let out2 = document.querySelector('.out2');
out2.innerHTML = Відповідь: ${w}`;
}
