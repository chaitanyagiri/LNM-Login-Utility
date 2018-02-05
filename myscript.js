
document.getElementById('LoginUserPassword_auth_username').value = 'YOUR USERNAME';
document.getElementById('LoginUserPassword_auth_password').value = 'YOUR PASSWORD';
document.querySelector('input[type="submit"]').click();

var myTimer = setTimeout(function(){
    document.getElementById('UserCheck_Logoff_Button_span').click();
    location='Reset';
    // document.location.reload();
    console.log("it should appear after 5 second");
}, 10000);

