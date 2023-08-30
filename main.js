let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
let button = document.querySelector(".btn");
let icon4 = document.querySelector(".icon4");
let Languages = document.querySelector(".languages");
let Langs = document.querySelector(".langs");

Languages.addEventListener('click', function(){
    if(Languages.classList.contains('languages-new')){
        Languages.classList.remove('languages-new');
        Langs.classList.remove('langs-new');
        icon4.classList.remove('icon4-new');
    } else {
        Languages.classList.add('languages-new');
        Langs.classList.add('langs-new');
        icon4.classList.add('icon4-new');
    }
});

button.addEventListener("click", function(){
    if(button.classList.contains("btn-new")){
        button.classList.remove("btn-new");
        icon1.classList.remove("icon1-new");
        icon2.classList.remove("icon2-new");
    } else {
        button.classList.add("btn-new");
        icon1.classList.add("icon1-new");
        icon2.classList.add("icon2-new");
    }
});