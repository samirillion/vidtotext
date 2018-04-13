// var menuItem = {
// 	'id': 'addProtein',
// 	'title': 'Add Protein',
// 	'contexts':['selection']
// }

// chrome.contextMenus.create(menuItem);

// chrome.contextMenus.onClicked.addListener(function (clickData) {
// 	if (clickData.menuItemId == "addProtein" && clickData.selectionText) {
// 		var intRegex = /^\d+$\.?\d?/;
// 		if(intRegex.test(clickData.selectionText)) {
// 			chrome.storage.sync.get('total', function(items) {
// 				var newTotal = 0;
// 				if(items.total) {
// 					newTotal += parseFloat(items.total);
// 				}
// 				newTotal += parseFloat(clickData.selectionText);
// 				chrome.storage.sync.set({'total':newTotal});
// 			});
// 		}
// 	}
// })

// chrome.storage.onChanged.addListener(function(changes) {
// 	chrome.browserAction.setBadgeText({'text': changes.total.newValue.toString()
// 	});
// });