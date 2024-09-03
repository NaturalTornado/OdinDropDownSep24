/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage.js */ \"./src/loadPage.js\");\n// index.js - rev-01\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_loadPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    const ddButton = document.getElementById('ddButton');\r\n    const ddMenuArea = document.getElementById('ddMenuArea');\r\n\r\n    // Toggle dropdown menu visibility on button click\r\n    ddButton.addEventListener('click', function(event) {\r\n        event.stopPropagation(); // Prevent event bubbling\r\n        ddMenuArea.style.display = ddMenuArea.style.display === 'block' ? 'none' : 'block';\r\n    });\r\n\r\n    // Hide dropdown menu when clicking outside of it\r\n    document.addEventListener('click', function(event) {\r\n        if (!ddButton.contains(event.target) && !ddMenuArea.contains(event.target)) {\r\n            ddMenuArea.style.display = 'none';\r\n        }\r\n    });\r\n\r\n    // Handle menu item click\r\n    const menuItems = document.querySelectorAll('.dropButton');\r\n    menuItems.forEach(item => {\r\n        item.addEventListener('click', function() {\r\n            // Here, you can define what should happen when an item is clicked\r\n            console.log(`${this.id} clicked`);\r\n        });\r\n    });\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQSxJQUFJLHdEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUztBQUNwQyxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluZHJvcGRvd25zZXAyNC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LmpzIC0gcmV2LTAxXHJcblxyXG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkUGFnZS5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbG9hZFBhZ2UoKTtcclxuXHJcbiAgICBjb25zdCBkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZEJ1dHRvbicpO1xyXG4gICAgY29uc3QgZGRNZW51QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZE1lbnVBcmVhJyk7XHJcblxyXG4gICAgLy8gVG9nZ2xlIGRyb3Bkb3duIG1lbnUgdmlzaWJpbGl0eSBvbiBidXR0b24gY2xpY2tcclxuICAgIGRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudCBldmVudCBidWJibGluZ1xyXG4gICAgICAgIGRkTWVudUFyZWEuc3R5bGUuZGlzcGxheSA9IGRkTWVudUFyZWEuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIaWRlIGRyb3Bkb3duIG1lbnUgd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGl0XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFkZEJ1dHRvbi5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkZE1lbnVBcmVhLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgZGRNZW51QXJlYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhhbmRsZSBtZW51IGl0ZW0gY2xpY2tcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wQnV0dG9uJyk7XHJcbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIEhlcmUsIHlvdSBjYW4gZGVmaW5lIHdoYXQgc2hvdWxkIGhhcHBlbiB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmlkfSBjbGlja2VkYCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// loadPage.js - rev-01\r\n\r\nfunction loadPage() {\r\n    // Cache DOM elements\r\n    const mainBox = document.getElementById('mainBox');\r\n    const dropDownArea = document.getElementById('dropDownArea');\r\n    const ddMenuArea = document.getElementById('ddMenuArea');\r\n    const ddButton = document.getElementById('ddButton');\r\n\r\n    // Main Box flex styling\r\n    mainBox.style.display = 'flex';\r\n    mainBox.style.flexDirection = 'column';\r\n    mainBox.style.justifyContent = 'center';\r\n    mainBox.style.alignItems = 'center';\r\n\r\n    // Drop Down Area styling\r\n    dropDownArea.style.display = 'flex';\r\n    dropDownArea.style.flexDirection = 'column';\r\n    dropDownArea.style.justifyContent = 'center';\r\n    dropDownArea.style.alignItems = 'center';\r\n\r\n    // Drop Down Menu Area initial state\r\n    ddMenuArea.style.display = 'none'; // Initially hidden\r\n\r\n    // Add hover effect for the button\r\n    ddButton.addEventListener('mouseover', function() {\r\n        ddButton.style.backgroundColor = 'gray';\r\n        ddButton.style.cursor = 'pointer';\r\n    });\r\n\r\n    ddButton.addEventListener('mouseout', function() {\r\n        ddButton.style.backgroundColor = ''; // Reset to original color\r\n    });\r\n\r\n    // Add hover effects for dropdown menu items\r\n    const dropButtons = document.querySelectorAll('.dropButton');\r\n    dropButtons.forEach(button => {\r\n        button.addEventListener('mouseover', function() {\r\n            button.style.backgroundColor = 'green';\r\n            button.style.cursor = 'pointer';\r\n            button.style.fontWeight = '900';\r\n        });\r\n\r\n        button.addEventListener('mouseout', function() {\r\n            button.style.backgroundColor = ''; // Reset to original color\r\n            button.style.fontWeight = '500'; // Reset to original font weight\r\n        });\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZFBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLDZDQUE2QztBQUM3QyxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluZHJvcGRvd25zZXAyNC8uL3NyYy9sb2FkUGFnZS5qcz80NDEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxvYWRQYWdlLmpzIC0gcmV2LTAxXHJcblxyXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICAgIC8vIENhY2hlIERPTSBlbGVtZW50c1xyXG4gICAgY29uc3QgbWFpbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQm94Jyk7XHJcbiAgICBjb25zdCBkcm9wRG93bkFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcERvd25BcmVhJyk7XHJcbiAgICBjb25zdCBkZE1lbnVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RkTWVudUFyZWEnKTtcclxuICAgIGNvbnN0IGRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RkQnV0dG9uJyk7XHJcblxyXG4gICAgLy8gTWFpbiBCb3ggZmxleCBzdHlsaW5nXHJcbiAgICBtYWluQm94LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBtYWluQm94LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcclxuICAgIG1haW5Cb3guc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcclxuICAgIG1haW5Cb3guc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG5cclxuICAgIC8vIERyb3AgRG93biBBcmVhIHN0eWxpbmdcclxuICAgIGRyb3BEb3duQXJlYS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgZHJvcERvd25BcmVhLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcclxuICAgIGRyb3BEb3duQXJlYS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xyXG4gICAgZHJvcERvd25BcmVhLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuXHJcbiAgICAvLyBEcm9wIERvd24gTWVudSBBcmVhIGluaXRpYWwgc3RhdGVcclxuICAgIGRkTWVudUFyZWEuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gSW5pdGlhbGx5IGhpZGRlblxyXG5cclxuICAgIC8vIEFkZCBob3ZlciBlZmZlY3QgZm9yIHRoZSBidXR0b25cclxuICAgIGRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRkQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmF5JztcclxuICAgICAgICBkZEJ1dHRvbi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRkQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnOyAvLyBSZXNldCB0byBvcmlnaW5hbCBjb2xvclxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIGhvdmVyIGVmZmVjdHMgZm9yIGRyb3Bkb3duIG1lbnUgaXRlbXNcclxuICAgIGNvbnN0IGRyb3BCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3BCdXR0b24nKTtcclxuICAgIGRyb3BCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuZm9udFdlaWdodCA9ICc5MDAnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnOyAvLyBSZXNldCB0byBvcmlnaW5hbCBjb2xvclxyXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuZm9udFdlaWdodCA9ICc1MDAnOyAvLyBSZXNldCB0byBvcmlnaW5hbCBmb250IHdlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/loadPage.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;