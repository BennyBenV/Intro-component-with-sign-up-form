document.forms["signup"].addEventListener("submit", function(e){
    var erreur;
    var inputs = document.getElementsByTagName("input");
    var img = document.getElementsByTagName("img");
    var warning= document.getElementsByClassName("warning");

    for(var i = 0; i<inputs.length; i++){
        if(!inputs[i].value){
            erreur = warning[i].style.display = "block";
            img[i].style.display = "block";
            inputs[i].style.borderColor = "hsl(0, 100%, 74%)";
            inputs[i].style.marginBottom = "0";
        }
    }

    if(erreur){
        e.preventDefault();  
        return false;
    } else { 
        alert("Welcome !" );
    }
})




