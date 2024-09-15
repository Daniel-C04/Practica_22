
var bt_suscribe = document.getElementById("bt_suscribe");
var error_correo = document.getElementById("error_correo");


bt_suscribe.addEventListener("click", ()=>{
    var correo = document.getElementById("correo").value;
    console.log(correo)
    error_correo.style.display = "none";
    if(correo == "" || correo == null || correo == undefined || correo.indexOf("@") == -1 || correo.indexOf(".") == -1){
        error_correo.style.display = "block";
        error_correo.innerHTML = "Check your email please";
        error_correo.style.color = "red";
        console.log(correo)
    }else{
        error_correo.style.display = "none";
        error_correo.innerHTML = "";       
    }

})