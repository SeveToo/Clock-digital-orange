let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let second = document.querySelector('#second');

function zeroSth(x){
   if(x<10) return ('0'+x);
   else return x;
}

function getTime() {
   let a = new Date(),
   h = a.getHours(),
   m = a.getMinutes(),
   s = a.getSeconds();
   hours.innerHTML = zeroSth(h);
   minutes.innerHTML = zeroSth(m);
   second.innerHTML = zeroSth(s);
}

onload = () => {
   setInterval(getTime,1000)
}
