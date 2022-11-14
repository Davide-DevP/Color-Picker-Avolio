function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function checkColor(colorToCheck, checkValue){
    var rgb = colorToCheck.match(/\d+/g);
    var check = true;
    for(var i in rgb) {
        switch(i){
            case '0':
                if(rgb[0]!=checkValue.r) {
                    check = false;
                }
                break;
            case '1':
                if(rgb[1]!=checkValue.g) {
                    check = false;
                }
                break;
            case '2':
                if(rgb[2]!=checkValue.b) {
                    check = false;
                }
                break;
        }
    }
    return check;
}

let buttons = document.getElementsByClassName("bgButton");
function changeBG(color){
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