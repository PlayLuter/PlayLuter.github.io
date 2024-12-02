var services_button_1 = document.getElementById("services_id_button1");
var services_button_2 = document.getElementById("services_id_button2");
var services_button_3 = document.getElementById("services_id_button3");

var services_image1 = document.getElementById("services_id_image1");
var services_image2 = document.getElementById("services_id_image2");
var services_image3 = document.getElementById("services_id_image3");

var services_price = document.getElementById("services_cost_list_price_id");
var services_time = document.getElementById("services_cost_list_time_id");
var services_title = document.getElementById("services_title_text_id");

var active_button = 1;

var buttons = [
    services_button_1,
    services_button_2,
    services_button_3
];

var images = [
    services_image1, services_image2, services_image3
]

services_image1.style.zIndex = 3;
services_image2.style.zIndex = 2;
services_image3.style.zIndex = 2;


services_button_1.onclick=function(){
    if (active_button != 1){
        buttons[active_button - 1].classList.toggle("services_button1");
        buttons[active_button - 1].classList.toggle("services_button2");

        images[active_button - 1].style.opacity = 0;
        active_button = 1;
        images[active_button - 1].style.opacity = 1;

        services_button_1.classList.toggle("services_button1");
        services_button_1.classList.toggle("services_button2");

        setTimeout(() => {
            
            services_price.innerText = "~30.000";
            images.forEach(image => {
                image.style.zIndex = 2
            });
            images[active_button - 1].style.zIndex = 3;
        }, 1000);
        
    }
}

services_button_2.onclick=function(){

    if (active_button != 2){
        buttons[active_button - 1].classList.toggle("services_button1");
        buttons[active_button - 1].classList.toggle("services_button2");

        images[active_button - 1].style.opacity = 0;

        active_button = 2;
        services_button_2.classList.toggle("services_button1");
        services_button_2.classList.toggle("services_button2");

        services_price.innerText = "~60.000";
    }
}

services_button_3.onclick=function(){

    if (active_button != 3){
        buttons[active_button - 1].classList.toggle("services_button1");
        buttons[active_button - 1].classList.toggle("services_button2");

        images[active_button - 1].style.opacity = 0;

        active_button = 3;
        services_button_3.classList.toggle("services_button1");
        services_button_3.classList.toggle("services_button2");

        services_price.innerText = "~45.000";

    }
}


