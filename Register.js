// function validate(){
//     let fullname = document.getElementById("fullname").value;
//     let Email = document.getElementById("Email").value;
//     let password = document.getElementById("password").value;
//     let Confirm = document.getElementById("Confirm").value;

//     if(fullname.length<=6){
//         alert("Enter Name!")
//         return false
//     }else if(Email.slice(-4)!== '.com' ){
//         alert("wrong email format!")
//         return false
//     }else if(password.length<8){
//         alert("password length min 8 digits!")
//         return false
//     }else if(Confirm !== password){
//         alert("Not same Password!")
//         return false
//     }
//     return true
// }
// form.addEventListener('submit',(e) =>{
//     e.preventDefault();
//     if(validate()){
//         alert("Login Successfull")
//     }
// })

function validate(){
    let Full_name = document.getElementById("Full_name").value;
    let Email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    let Confirm = document.getElementById("Confirm").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if(Full_name.length <=0){
        alert("enter username")
        return false
    }else if(!Email.match(pattern)){
        alert("Wrong email format!")
        return false

    }else if(password.length <8){
        alert("password lenght min 8 digits")
        return false
    }else if(Confirm !== password){
        alert("Not same as as your password")
        return false
    }
    return true

}

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    if(validate()){
        alert("Registration Successfull")
    }
})
