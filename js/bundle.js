/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function accordion(headerSelector, bodySelector){
    let accordionHeader = document.querySelector(headerSelector),
        accordionBody = document.querySelector(bodySelector);

    accordionHeader.addEventListener('click', () => {
        accordionBody.classList.toggle("active_accordion_body");
        accordionHeader.classList.toggle("active_accordion_header");
        if (accordionBody.classList.contains("active_accordion_body")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    }); 

    accordionHeader.addEventListener('mouseover', () => {
        accordionBody.classList.add('accordion_hover');
    });
    accordionHeader.addEventListener('mouseout', () => {
        accordionBody.classList.remove('accordion_hover');
    });  
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function burger(backPageSelector, burgerSelector){
    let backPage = document.querySelector(backPageSelector),
    burger = document.querySelector(burgerSelector);

    /* Закрытие backPage */
    function closeBackPage(){
        backPage.classList.remove('show');
        backPage.classList.remove('fade');
        backPage.classList.add('hide');
        document.body.style.overflow = '';
    }

    /* Открытие backPage */
    function openBackPage(){
        backPage.classList.add('show');
        backPage.classList.add('fade');
        backPage.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    /* Открытие и закрытие при коике на бургер */
    burger.addEventListener('click', () => {
        burger.classList.toggle('active_burger');
        if (backPage.classList.contains('show'))
        {
            closeBackPage();
        } else {
            openBackPage();
        }
    });

    /* Закрытие при клике на "escape" */
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && backPage.classList.contains('show')) { 
            closeBackPage();
            burger.classList.remove('active_burger');
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./js/modules/check_btns.js":
/*!**********************************!*\
  !*** ./js/modules/check_btns.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function check_btns(checkboxParentSelector, checkboxSelector, radioParentSelector, radioSelector){
    let parentCheckbox = document.querySelector(checkboxParentSelector),
        checkbox = parentCheckbox.querySelector(checkboxSelector),
        parentRadio = document.querySelector(radioParentSelector),
        radio = parentRadio.querySelector(radioSelector);

    parentCheckbox.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
    });
    checkbox.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
    });

    parentRadio.addEventListener('click', () => {
        radio.checked = true;
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check_btns);

/***/ }),

/***/ "./js/modules/dropdownList.js":
/*!************************************!*\
  !*** ./js/modules/dropdownList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dropdownList(dropdownListSelector ,headerSelector, bodySelector, arrowSelector, itemsSelector, currentSelector) {
    let header = document.querySelector(headerSelector), 
        body = document.querySelector(bodySelector),
        dropdownList = document.querySelector(dropdownListSelector),
        arrow = document.querySelector(arrowSelector),
        items = body.querySelectorAll(itemsSelector),
        current = document.querySelector(currentSelector);

    
    /* Открытие и закрытие выпадающего списка */
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
    
    /* Выбор элемента из списка */
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

    /* Закрытие при клике вне выпадающего списка */
    document.addEventListener('click', (e) => {
        if (e.target === dropdownList || dropdownList.contains(e.target)) {
            return;
        }
        arrow.classList.remove("active_arrow");
        body.classList.remove('active_body');
        body.style.maxHeight = 0;
        if (!current.classList.contains('active_current'))
            header.classList.remove('active_header');
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropdownList);

/***/ }),

/***/ "./js/modules/navigation.js":
/*!**********************************!*\
  !*** ./js/modules/navigation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function navigation(){
    let sections = document.querySelectorAll("section"),
        navigationLink = document.querySelector("nav").querySelectorAll("a"),
        sectionId;

    /* Смена активности навигационных ссылок */
    window.addEventListener("scroll", () => {
        let scroll = window.pageYOffset;  

        sections.forEach(current => {
            let sectionHeight = current.offsetHeight, 
                sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;

            sectionId = current.getAttribute('data-section_number');

            if (Number(sectionId) - 1 == 0)
            {
                sectionHeight += sectionTop + 1;
                sectionTop = -1;
            }
            
            /* Если скролл ниже начала секции и выше конца */
            if (scroll > sectionTop &&
                scroll <= sectionTop + sectionHeight)
            {
                navigationLink[Number(sectionId) - 1].classList.add("active_link");
            } else {
                navigationLink[Number(sectionId) - 1].classList.remove("active_link");
            }
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);

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

    /* Скрытие контента у всех табов */
	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
	}

    /* Показ контента у конкретного таба */
	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;
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
            input.classList.remove('input_correct');
            input.classList.remove('input_focus');
            input.classList.remove('input_hover');
            error.style.display = 'block';
        }
            else 
        {
            input.classList.add('input_correct');
            input.classList.remove('input_error');
            input.classList.remove('input_focus');
            input.classList.remove('input_hover');
            error.style.display = 'none';
        }
            
        if (e.target.value === '')
        {
            input.classList.add('input_focus');
            input.classList.remove('input_correct');
            input.classList.remove('input_error');
            error.style.display = 'none';
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
/* harmony import */ var _modules_check_btns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/check_btns */ "./js/modules/check_btns.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion */ "./js/modules/accordion.js");
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/navigation */ "./js/modules/navigation.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");








window.addEventListener('DOMContentLoaded', function() {
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.typography__tabs-item', '.typography__styles', '.typography__tabs', 'typography__tabs-item-active');
    (0,_modules_textField__WEBPACK_IMPORTED_MODULE_1__["default"])('.UI__textField-input', '.UI__textField-errorMessage');
    (0,_modules_dropdownList__WEBPACK_IMPORTED_MODULE_2__["default"])('.UI__drop-downList-select', '.UI__drop-downList-select-header', '.UI__drop-downList-select-body','.UI__drop-downList-select-icon','.UI__drop-downList-select-item','.UI__drop-downList-select-current');
    (0,_modules_check_btns__WEBPACK_IMPORTED_MODULE_3__["default"])('.UI__check_button', '.UI__check_button-checkbox','.UI__radio_button', '.UI__radio_button-radio');
    (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_4__["default"])('.UI__accordion-header', '.UI__accordion-body');
    (0,_modules_navigation__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_burger__WEBPACK_IMPORTED_MODULE_6__["default"])('.back-page', '.header__burger');
}); 
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map