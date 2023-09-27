
document.getElementById('burger-button').onclick = function () {
    document.getElementById('choose').scrollIntoView({behavior: "smooth"});

}

let links = document.querySelectorAll(".header__menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}



let buttons = document.getElementsByClassName("choose__button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

let burger = document.getElementById("burger");
let names = document.getElementById("names");
let phone = document.getElementById("phone");

document.getElementById("order-action").onclick = function () {
    let hasError = false;
    [
        burger,names,phone
    ].forEach(item => {
        if (!item.value) {
            item.style.borderColor = "red";
            hasError = true;
        } else {
            item.style.borderColor = "";
        }
    });

    if (!hasError) {
        [
            burger,names,phone
        ].forEach(item => {
            item.value = ""
        });

        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");

    }

}
 


