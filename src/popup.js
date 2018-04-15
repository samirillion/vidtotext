chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {

  chrome.tabs.insertCSS(null, {file:"style.css"});

  document.getElementById('selectarea').addEventListener('click', function ()
    {
     chrome.tabs.executeScript(null, {
        file: "app.js"
      }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
          document.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
      });

     window.close();
    }); 

}

window.onload = onWindowLoad;