function changeBG(button, color){
    document.getElementById("bgButtonPressed").id = 'bgButton';
    button.id = 'bgButtonPressed';
    document.body.style.backgroundColor = color;
}

function changeBGText(ele) {
    if(event.key === 'Enter') {
        let regex = /[0-9A-Fa-f]{6}/g;  
        if(ele.value.match(regex)){
            document.body.style.backgroundColor = "#" + ele.value;
        }else{
            alert("Inserire un valore esadecimale(A-F/0-9)");
        }      
    }
}