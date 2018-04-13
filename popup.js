chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;

// $(function(){
// 	chrome.storage.sync.get(['total', 'goal'], function (items) {
// 		$('#goal').text(items.goal);
// 		$('#total').text(items.total);
// 	});

// 	$('#addAmount').click(function(){
// 		chrome.storage.sync.get('total', function (items) {
// 			var newTotal = 0;
// 			if(items.total) {
// 				newTotal += parseInt(items.total);
// 			}
// 			var amount = $('#amount').val();
// 			if(amount) {
// 				newTotal += parseInt(amount);
// 			}

// 			chrome.storage.sync.set({'total' : newTotal });
// 			$('#total').text(newTotal);
// 			$('#amount').val('');
// 		});
// 	});
// });