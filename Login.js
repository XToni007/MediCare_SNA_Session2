function validate(){
    let User_name = document.getElementById("User_name").value;
    let password = document.getElementById("password").value;

    if(User_name.length <=10){
        alert("enter username")
        return false
    }else if(password.length <8){
        alert("enter password")
        return false
    }

}

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    if(validate()){
        alert("Login Successfull")
    }
})