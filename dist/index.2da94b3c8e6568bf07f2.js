(self["webpackChunkmy_own_webpack"] = self["webpackChunkmy_own_webpack"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

const mainWrapper = document.querySelector('.wrapper');

async function getComponent() {
    const innerDiv = document.createElement('div');
    const { default: _ } = await __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23));

    innerDiv.innerHTML = _.join(['Hello', 'this is', 'my Webpack'], ' ');
    return innerDiv;
}

getComponent().then((innerDiv) => {
    document.body.appendChild(innerDiv);
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9vd25fd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGFBQWEsU0FBUywySkFBZ0I7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJpbmRleC4yZGE5NGIzYzhlNjU2OGJmMDdmMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB7IGRlZmF1bHQ6IF8gfSA9IGF3YWl0IGltcG9ydCgnbG9kYXNoJyk7XHJcblxyXG4gICAgaW5uZXJEaXYuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAndGhpcyBpcycsICdteSBXZWJwYWNrJ10sICcgJyk7XHJcbiAgICByZXR1cm4gaW5uZXJEaXY7XHJcbn1cclxuXHJcbmdldENvbXBvbmVudCgpLnRoZW4oKGlubmVyRGl2KSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=