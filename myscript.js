var counter = 0;
var myTimer,myInterval;

function Timer()
{
    if(document.getElementById('LoginUserPassword_auth_password')  != null)
    {
        console.log("inputting");
        document.getElementById('LoginUserPassword_auth_username').value = '16ucs022';
        document.getElementById('LoginUserPassword_auth_password').value = 'LNM@OW79';
        document.querySelector('input[type="submit"]').click();     
        if(document.getElementById("LoginUserPassword_error_message") != null)
        {
            clearInterval(myTimer);
        }     
    }  

    if(document.getElementById("LoginUserPassword_error_message") != null)
    {
        refreshInterval(myTimer);
    }   

    if(document.getElementById('UserCheck_Logoff_Button_span')!= null)
    {
        setTimeout(function myFn()
        {
            document.getElementById('UserCheck_Logoff_Button_span').click();
            location='Reset';             
        }, 10800000);
    }   
}
myTimer = setInterval(Timer, 100);