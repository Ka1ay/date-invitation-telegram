const BOT_TOKEN="ВСТАВЬ_ТОКЕН";
const CHAT_ID="ВСТАВЬ_ID";

let food="";

function accept(){
 document.getElementById("choice").classList.remove("hidden");
}

function selectFood(value){
 food=value;
}

document.getElementById("no").onclick=function(){
 this.innerHTML="Подумай еще ❤️";
 this.style.position="absolute";
 this.style.left=Math.random()*70+"%";
 this.style.top=Math.random()*70+"%";
}

async function finish(){

let text=
"❤️ Сабина согласилась!%0A"+
"Выбрала: "+food;

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
