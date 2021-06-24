(self["webpackChunkmy_own_webpack"] = self["webpackChunkmy_own_webpack"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const mainWrapper = document.querySelector('.wrapper');

function testFunction() {
    const innerDiv = document.createElement('div');
    const myBtn = document.createElement('button');

    innerDiv.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'this is', 'my Webpack'], ' ');
    myBtn.innerHTML = 'Poke me and go to the console';

    innerDiv.appendChild(myBtn);

    return innerDiv;
}

// mainWrapper.appendChild(testFunction());
document.body.appendChild(testFunction());


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["shared"], function() { return __webpack_exec__("./src/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9vd25fd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUI7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0RBQU07QUFDL0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcblxyXG5mdW5jdGlvbiB0ZXN0RnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBpbm5lckRpdi5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd0aGlzIGlzJywgJ215IFdlYnBhY2snXSwgJyAnKTtcclxuICAgIG15QnRuLmlubmVySFRNTCA9ICdQb2tlIG1lIGFuZCBnbyB0byB0aGUgY29uc29sZSc7XHJcblxyXG4gICAgaW5uZXJEaXYuYXBwZW5kQ2hpbGQobXlCdG4pO1xyXG5cclxuICAgIHJldHVybiBpbm5lckRpdjtcclxufVxyXG5cclxuLy8gbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQodGVzdEZ1bmN0aW9uKCkpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlc3RGdW5jdGlvbigpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==