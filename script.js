const BOT_TOKEN="8838298808:AAGTjAeVVZouKhWOAZ-fANRMQBxmIX6VhaA";
const CHAT_ID="663351088";


let selectedFood = "";



// переключение экранов

function nextScreen(number) {

    document
    .querySelectorAll(".screen")
    .forEach(screen => {

        screen.classList.add("hidden");

    });


    document
    .getElementById("screen" + number)
    .classList.remove("hidden");

}



// выбор еды

function selectFood(element, food) {


    selectedFood = food;


    document
    .querySelectorAll(".food")
    .forEach(item => {

        item.classList.remove("selected");

    });


    element.classList.add("selected");

}



// кнопка нет убегает

document
.getElementById("no")
.onclick = function(){


    this.innerHTML = "Подумай еще ❤️";


    this.style.position = "absolute";


    this.style.left =
    Math.random()*70 + "%";


    this.style.top =
    Math.random()*70 + "%";


};





// финальное подтверждение


async function finish(){


    let date =
    document.getElementById("date").value;


    let time =
    document.getElementById("time").value;



    let message =

`❤️ Сабина согласилась!

📅 Дата:
${date}

⏰ Время:
${time}

🍓 Возьмем:
${selectedFood}`;



    // отправка в Telegram

    if(!BOT_TOKEN.includes("ВСТАВЬ")){


        await fetch(

        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`

        );


    }



    nextScreen(4);


}

// создание сердечек


function createHeart(){


    const heart =
    document.createElement("div");


    heart.className="heart";


    heart.innerHTML="❤️";


    heart.style.left =
    Math.random()*100 + "%";


    heart.style.animationDuration =
    (3 + Math.random()*5) + "s";


    heart.style.fontSize =
    (15 + Math.random()*25) + "px";



    document
    .querySelector(".hearts")
    .appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },8000);


}



setInterval(createHeart,500);
