document.getElementById('fillForm').addEventListener('click', function(){
    chrome.tabs.executeScript({
      code: ";"
    });
  });
  document.getElementById('fillForm').addEventListener('click', function(){
    chrome.tabs.executeScript({
      file: "myscript.js"
    });
  });
  
  document.getElementById('fillForm').click();

  
  // chrome.tabs.onUpdated.addEventListener(function(tabId, changeInfo, tab){
  //   if(changeInfo.status == 'complete'){
  //     document.getElementById('LoginUserPassword_auth_username').value = '16ucc028';
  //     document.getElementById('LoginUserPassword_auth_password').value = 'LNM@LF72';
  //     document.querySelector('input[type="submit"]').click();
  //   }    
    
  // });