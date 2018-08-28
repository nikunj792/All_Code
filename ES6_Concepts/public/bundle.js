/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	eval("\"use strict\";\n\nfunction func(name, city) {\n\tconsole.log(\"111111\", this);\n\tthis.name = name;\n\tthis.city = city;\n}\n\nvar sample = func(\"Nikunj\", \"Bangalore\");\nconsole.log(\"222222222\", sample);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvZXM2LmpzeD9lZDE1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZ1bmMobmFtZSxjaXR5KXtcblx0Y29uc29sZS5sb2coXCIxMTExMTFcIix0aGlzKTtcblx0dGhpcy5uYW1lID0gbmFtZTtcblx0dGhpcy5jaXR5ID0gY2l0eTtcbn1cblxudmFyIHNhbXBsZSA9ICBmdW5jKFwiTmlrdW5qXCIsXCJCYW5nYWxvcmVcIik7XG5jb25zb2xlLmxvZyhcIjIyMjIyMjIyMlwiLHNhbXBsZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9lczYuanN4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);