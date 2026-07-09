const BOT_TOKEN="8838298808:AAGTjAeVVZouKhWOAZ-fANRMQBxmIX6VhaA";
const CHAT_ID="663351088";

let food="";

function accept(){

document.getElementById("dateBlock")
.classList.remove("hidden");

document.getElementById("choice")
.classList.remove("hidden");

}

function selectFood(element,value){

food=value;


document
.querySelectorAll(".food")
.forEach(item=>{
item.classList.remove("selected");
});


element.classList.add("selected");

}

document.getElementById("no").onclick=function(){
 this.innerHTML="Подумай еще ❤️";
 this.style.position="absolute";
 this.style.left=Math.random()*70+"%";
 this.style.top=Math.random()*70+"%";
}

async function finish(){

let date=document.getElementById("date").value;
let time=document.getElementById("time").value;


let text=
"❤️ Сабина согласилась!%0A"+
"📅 Дата: "+date+"%0A"+
"⏰ Время: "+time+"%0A"+
"🍓 Выбрала: "+food;

if(!BOT_TOKEN.includes("ВСТАВЬ")){
 await fetch(
 `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
 );
}

document.getElementById("screen").innerHTML=
`
<img src="images/sunset.jpg" class="photo">

<h1>Спасибо, Сабина ❤️</h1>

<p>
Я очень жду нашу встречу.<br><br>
Я хочу встречать рассвет<br>
в твоих глазах ❤️
</p>

<img src="images/memory.jpg" class="photo">
`;
}
