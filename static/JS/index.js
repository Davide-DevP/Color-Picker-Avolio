function changeBG(button, color){
    document.getElementById("bgButtonPressed").id = 'bgButton';
    button.id = 'bgButtonPressed';
    document.body.style.backgroundColor = color;
    color = hexToRgb(color);
    for(var i=0; i<buttons.length;i++){
        if(checkColor(buttons[i].style.backgroundColor,color)){
            buttons[i].style.border = "2px solid black";
        }else if(buttons[i].style.border == "2px solid black"){
            buttons[i].style.border = "none";
        }
    }
}
