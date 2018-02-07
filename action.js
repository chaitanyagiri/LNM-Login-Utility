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

 
