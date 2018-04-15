/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nchrome.runtime.onMessage.addListener(function (request, sender) {\n  if (request.action == \"getSource\") {\n    message.innerText = request.source;\n  }\n});\n\nfunction onWindowLoad() {\n\n  var message = document.querySelector('#message');\n\n  chrome.tabs.executeScript(null, {\n    file: \"app.js\"\n  }, function () {\n    // If you try and inject into an extensions page or the webstore/NTP you'll get an error\n    if (chrome.runtime.lastError) {\n      message.innerText = 'There was an error injecting script : \\n' + chrome.runtime.lastError.message;\n    }\n  });\n}\n\nwindow.onload = onWindowLoad;\n\n// $(function(){\n// \tchrome.storage.sync.get(['total', 'goal'], function (items) {\n// \t\t$('#goal').text(items.goal);\n// \t\t$('#total').text(items.total);\n// \t});\n\n// \t$('#addAmount').click(function(){\n// \t\tchrome.storage.sync.get('total', function (items) {\n// \t\t\tvar newTotal = 0;\n// \t\t\tif(items.total) {\n// \t\t\t\tnewTotal += parseInt(items.total);\n// \t\t\t}\n// \t\t\tvar amount = $('#amount').val();\n// \t\t\tif(amount) {\n// \t\t\t\tnewTotal += parseInt(amount);\n// \t\t\t}\n\n// \t\t\tchrome.storage.sync.set({'total' : newTotal });\n// \t\t\t$('#total').text(newTotal);\n// \t\t\t$('#amount').val('');\n// \t\t});\n// \t});\n// });\n\n//# sourceURL=webpack:///./src/popup.js?");

/***/ })

/******/ });