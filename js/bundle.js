/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/dropdownList.js":
/*!************************************!*\
  !*** ./js/modules/dropdownList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dropdownList() {
    let header = document.querySelector('.UI__drop-downList-select-header'), 
        body = document.querySelector('.UI__drop-downList-select-body'),
        arrow = document.querySelector('.UI__drop-downList-select-icon'),
        items = body.querySelectorAll('.UI__drop-downList-select-item'),
        current = document.querySelector('.UI__drop-downList-select-current');

    header.addEventListener('click', () => {
        body.classList.toggle("active_body");
        arrow.classList.toggle("active_arrow");
        if (body.classList.contains("active_body")) {
            body.style.maxHeight = body.scrollHeight + "px";
            header.classList.add('active_header');
        } else {
            body.style.maxHeight = 0;
            if (!current.classList.contains('active_current'))
            header.classList.remove('active_header');
        }
    });

    function removeActiveClass(){
        items.forEach(elem => {
            elem.classList.remove('active_item');
        });
    }

    items.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (!elem.classList.contains('active_item'))
            {
                removeActiveClass();
                elem.classList.add('active_item');
                current.classList.add('active_current');
                current.innerHTML = elem.innerHTML;
                header.classList.add('active_header');
            }
            arrow.classList.remove("active_arrow");
            body.classList.remove('active_body');
            body.style.maxHeight = 0;
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropdownList);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
	let tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsParent = document.querySelector(tabsParentSelector);

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/textField.js":
/*!*********************************!*\
  !*** ./js/modules/textField.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textField(inputElement, errorMessageElement) {
    let input = document.querySelectorAll(inputElement)[0],
        error = document.querySelectorAll(errorMessageElement)[0];
    
    const validateEmail = (email) => {
        return email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    input.addEventListener('input', (e) => {
        if (validateEmail(e.target.value) === null)
        {
            input.classList.add('input_error');
            error.style.display = 'block';
            input.classList.remove('input_correct');
            input.classList.remove('input_focus');
            input.classList.remove('input_hover');
        }
            else 
        {
            input.classList.add('input_correct');
            input.classList.remove('input_error');
            error.style.display = 'none';
            input.classList.remove('input_focus');
            input.classList.remove('input_hover');
        }
            
        if (e.target.value === '')
        {
            input.classList.remove('input_error');
            error.style.display = 'none';
            input.classList.remove('input_correct');
            input.classList.add('input_focus');
        }
    });

    input.addEventListener('focus', () => {
        if (!input.classList.contains("input_error") && 
            !input.classList.contains("input_correct"))
        {
            input.classList.add('input_focus');
        }
    });
    input.addEventListener('blur', () => {
        if (input.classList.contains("input_focus"))
        input.classList.remove('input_focus');
    });
    input.addEventListener('mouseover', () => {
        if (!input.classList.contains("input_error") && 
            !input.classList.contains("input_correct"))
        {
            input.classList.add('input_hover');
        }
    });
    input.addEventListener('mouseout', () => {
        if (input.classList.contains("input_hover"))
            input.classList.remove('input_hover');
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textField);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_textField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/textField */ "./js/modules/textField.js");
/* harmony import */ var _modules_dropdownList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dropdownList */ "./js/modules/dropdownList.js");




window.addEventListener('DOMContentLoaded', function() {
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.typography__tabs-item', '.typography__styles', '.typography__tabs', 'typography__tabs-item-active');
    (0,_modules_textField__WEBPACK_IMPORTED_MODULE_1__["default"])('.UI__textField-input', '.UI__textField-errorMessage');
    (0,_modules_dropdownList__WEBPACK_IMPORTED_MODULE_2__["default"])();
}); 
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map