var move_card_var=document.getElementById("move_card_flex");
var move_card_var_bl= document.getElementById("move_card_bl");
var move_card_var_br= document.getElementById("move_card_br");
var counter = 0;
var step = -45;

move_card_var_br.onclick=function(){
    if (counter != 5){
        counter++;
        move_card_var.style.marginLeft= (counter*step).toString() + "vw";
    }
}
move_card_var_bl.onclick=function(){
    if (counter != 0){
        counter--;
        move_card_var.style.marginLeft= (counter*step).toString() + "vw";
    }

    // move_card_var.style.marginLeft= "-53vw";
}
