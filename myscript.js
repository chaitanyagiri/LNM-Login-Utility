var counter = 0;
var myTimer,myInterval;

myTimer = setInterval(function myFn(){
    if(document.getElementById('LoginUserPassword_auth_password')  != null){
        document.getElementById('LoginUserPassword_auth_username').value = 'YOUR USERNAME';
        document.getElementById('LoginUserPassword_auth_password').value = 'YOUR PASSWORD';
        document.querySelector('input[type="submit"]').click();        
    }    

    if(document.getElementById('UserCheck_Logoff_Button_span')!= null){
        setTimeout(function myFn(){
            document.getElementById('UserCheck_Logoff_Button_span').click();
            location='Reset';             
        }, 10800000);
    }         
}, 100);

