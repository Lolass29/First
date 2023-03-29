var i = 0;
var text = document.getElementById('text');

function text(text){
    text.style.color = "red";
    text.style.backgroundColor = "blue";
}


function On_button(el){
    i++;
    el.innerHTML  = "ugugugug " + i;
    el.style.color = "red"
    console.log(el.name);
}

function On_mouse(el){
    console.log(el.value);
}



