(self["webpackChunkmy_own_webpack"] = self["webpackChunkmy_own_webpack"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ 569);



const mainWrapper = document.querySelector('.wrapper');

async function getComponent() {
    const innerDiv = document.createElement('div');

    innerDiv.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'this is', 'my Webpack'], ' ');
    innerDiv.addEventListener('click', _print__WEBPACK_IMPORTED_MODULE_1__.default.bind(null, 'Hello Webpack'));

    return innerDiv;
}

document.body.appendChild(innerDiv);


/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ printMe; }
/* harmony export */ });
function printMe(text) {
    console.log(text);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors"], function() { return __webpack_exec__(138); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9vd25fd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teV9vd25fd2VicGFjay8uL3NyYy9wcmludC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0s7O0FBRTVCOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCLGtEQUFNO0FBQy9CLHVDQUF1QyxnREFBVTs7QUFFakQ7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7QUFDQSIsImZpbGUiOiJpbmRleC4wM2Y1MWZmZmQ3MWJkOWYzYTVhNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBQcmludCBmcm9tICcuL3ByaW50JztcclxuXHJcbmNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgaW5uZXJEaXYuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAndGhpcyBpcycsICdteSBXZWJwYWNrJ10sICcgJyk7XHJcbiAgICBpbm5lckRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFByaW50LmJpbmQobnVsbCwgJ0hlbGxvIFdlYnBhY2snKSk7XHJcblxyXG4gICAgcmV0dXJuIGlubmVyRGl2O1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSh0ZXh0KSB7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9