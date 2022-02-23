// create the arrays and whatnot and append that shit i guess so we can see it
//making of the buttons and all that stuff
let Ddamage=0;
let fireDamage=document.createElement("button");
document.body.appendChild(fireDamage);
fireDamage.innerHTML="Fire Damage";
let iceDamage=document.createElement("button");
document.body.appendChild(iceDamage);
iceDamage.innerHTML="Ice Damage";
let poisonDamage=document.createElement("button");
document.body.appendChild(poisonDamage);
poisonDamage.innerHTML="Poison Damage";
let element=document.createElement("h1");
element.innerHTML="Dragon Damage: "+Ddamage;
document.body.appendChild(element);

//check how much damage we're doing to that stupid ******* dragon
fireDamage.onclick=function(){
    Ddamage+=3;
    element.innerHTML="Dragon Damage: "+Ddamage;
    check_Ddamage();
}
iceDamage.onclick=function(){
    Ddamage+=1;
    element.innerHTML="Dragon Damage: "+Ddamage;
    check_Ddamage();
}
poisonDamage.onclick=function(){
    Ddamage+=4;
    element.innerHTML="Dragon Damage: "+Ddamage;
    check_Ddamage();
}

//there's no losers here, only a victory let's gooooo
let victory=document.createElement("h2");
document.body.appendChild(victory);
function check_Ddamage(){
    if (Ddamage>=10){
        victory.innerHTML="Victory!";
    }
}