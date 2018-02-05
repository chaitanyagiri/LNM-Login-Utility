var counter = 0;
var myTimer,myInterval;

for(var i = 0; i<1000000;i++){
    if(document.getElementById('LoginUserPassword_auth_password')  != null){
        document.getElementById('LoginUserPassword_auth_username').value = 'YOUR USERNAME';
        document.getElementById('LoginUserPassword_auth_password').value = 'YOUR PASSWORD';
        document.querySelector('input[type="submit"]').click();
    }
    
myTimer = setTimeout(function(){
    if(document.getElementById('UserCheck_Logoff_Button_span')!= null){
        document.getElementById('UserCheck_Logoff_Button_span').click();
        location='Reset';
    }   
    console.log("it should appear after 5 second");

}, 5000);

}


