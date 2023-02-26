/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./constants/weatherData.ts":
/*!**********************************!*\
  !*** ./constants/weatherData.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = [
    { id: 1, name: 'summer', image: 'assets/images/summer-bg.jpg', sound: 'assets/images/sounds/summer.mp3', icon: 'assets/images/icons/sun.svg' },
    { id: 2, name: 'rain', image: 'assets/images/rainy-bg.jpg', sound: 'assets/images/sounds/rain.mp3', icon: 'assets/images/icons/cloud-rain.svg' },
    { id: 3, name: 'winter', image: 'assets/images/winter-bg.jpg', sound: 'assets/images/sounds/winter.mp3', icon: 'assets/images/icons/cloud-snow.svg' },
];


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var weatherData_1 = __importDefault(__webpack_require__(/*! ./constants/weatherData */ "./constants/weatherData.ts"));
var root = document.querySelector('#root');
var iaPlaying = false;
var iaPaused = false;
var activeWeather = '';
var dataset = '';
var audio;
var Weather = /** @class */ (function () {
    function Weather(data) {
        this.clickWeather = function (event) {
            var _a, _b;
            var target = event.target;
            var isPlayNewSound = false;
            var datasetObj;
            if (target) {
                document.querySelectorAll('.icon_pause').forEach(function (icon) { return icon.setAttribute('style', 'visibility: hidden'); });
                dataset = target.getAttribute('dataset');
                if (dataset) {
                    datasetObj = JSON.parse(dataset);
                    (_b = (_a = target.closest('.weather_list__item')) === null || _a === void 0 ? void 0 : _a.querySelector('.icon_pause')) === null || _b === void 0 ? void 0 : _b.setAttribute('style', 'visibility: visible');
                    isPlayNewSound = (!iaPlaying && !iaPaused) || (activeWeather !== datasetObj.name);
                    if (isPlayNewSound && datasetObj) {
                        activeWeather = datasetObj.name;
                        h1.textContent = 'Weather sounds ' + activeWeather;
                        divWrapper.setAttribute('style', 'background-image: url(' + datasetObj.image + ')');
                        audio.setAttribute('src', datasetObj.sound);
                    }
                }
                iaPlaying = true;
                iaPaused = false;
                audio.play();
            }
        };
        this.clickPause = function (event) {
            event.stopPropagation();
            var target = event.target;
            if (target) {
                target.setAttribute('style', 'visibility: hidden');
            }
            iaPlaying = false;
            iaPaused = true;
            audio.pause();
        };
        this.id = data.id;
        this.name = data.name;
        this.image = data.image;
        this.sound = data.sound;
        this.icon = data.icon;
    }
    Weather.prototype.addWeather = function (weather) {
        var li = document.createElement('li');
        li.className = 'weather_list__item';
        li.setAttribute('style', 'background-image: url(' + weather.image + ')');
        li.setAttribute('dataset', JSON.stringify(weather));
        var img = document.createElement('img');
        img.src = weather.icon;
        img.width = 60;
        li.appendChild(img);
        var iconPause = document.createElement('i');
        iconPause.className = 'icon_pause';
        iconPause.setAttribute('style', 'visibility: hidden');
        iconPause.addEventListener('click', this.clickPause);
        li.appendChild(iconPause);
        li.addEventListener('click', this.clickWeather);
        ul.append(li);
    };
    return Weather;
}());
function onChangeRange(event) {
    var target = event.target;
    var value = '';
    if (target)
        value = target.value;
    audio.volume = Number(value);
}
var divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
root.append(divWrapper);
var h1 = document.createElement('h1');
h1.textContent = 'Weather sounds';
divWrapper.appendChild(h1);
var ul = document.createElement('ul');
ul.className = 'weather_list';
divWrapper.appendChild(ul);
var divRange = document.createElement('div');
divRange.className = 'range_volume';
var inputRange = document.createElement('input');
inputRange.type = 'range';
inputRange.step = '0.1';
inputRange.min = '0.1';
inputRange.max = '1';
inputRange.value = '0.5';
inputRange.addEventListener('input', onChangeRange);
divRange.appendChild(inputRange);
divWrapper.appendChild(divRange);
audio = document.createElement('audio');
divWrapper.appendChild(audio);
weatherData_1.default.forEach(function (weather) {
    var _weather = new Weather(weather);
    _weather.addWeather(_weather);
});


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZDA1ZGI2Y2I5MDdlOWY5ODE0ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWU7QUFDZixNQUFNLDRJQUE0STtBQUNsSixNQUFNLDhJQUE4STtBQUNwSixNQUFNLG1KQUFtSjtBQUN6Sjs7Ozs7Ozs7Ozs7QUNOYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9DQUFvQyxtQkFBTyxDQUFDLDJEQUF5QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLDBEQUEwRDtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7VUN6R0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnN0YW50cy93ZWF0aGVyRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogJ3N1bW1lcicsIGltYWdlOiAnYXNzZXRzL2ltYWdlcy9zdW1tZXItYmcuanBnJywgc291bmQ6ICdhc3NldHMvaW1hZ2VzL3NvdW5kcy9zdW1tZXIubXAzJywgaWNvbjogJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3VuLnN2ZycgfSxcbiAgICB7IGlkOiAyLCBuYW1lOiAncmFpbicsIGltYWdlOiAnYXNzZXRzL2ltYWdlcy9yYWlueS1iZy5qcGcnLCBzb3VuZDogJ2Fzc2V0cy9pbWFnZXMvc291bmRzL3JhaW4ubXAzJywgaWNvbjogJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2xvdWQtcmFpbi5zdmcnIH0sXG4gICAgeyBpZDogMywgbmFtZTogJ3dpbnRlcicsIGltYWdlOiAnYXNzZXRzL2ltYWdlcy93aW50ZXItYmcuanBnJywgc291bmQ6ICdhc3NldHMvaW1hZ2VzL3NvdW5kcy93aW50ZXIubXAzJywgaWNvbjogJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2xvdWQtc25vdy5zdmcnIH0sXG5dO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgd2VhdGhlckRhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb25zdGFudHMvd2VhdGhlckRhdGFcIikpO1xudmFyIHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xudmFyIGlhUGxheWluZyA9IGZhbHNlO1xudmFyIGlhUGF1c2VkID0gZmFsc2U7XG52YXIgYWN0aXZlV2VhdGhlciA9ICcnO1xudmFyIGRhdGFzZXQgPSAnJztcbnZhciBhdWRpbztcbnZhciBXZWF0aGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdlYXRoZXIoZGF0YSkge1xuICAgICAgICB0aGlzLmNsaWNrV2VhdGhlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgaXNQbGF5TmV3U291bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBkYXRhc2V0T2JqO1xuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uX3BhdXNlJykuZm9yRWFjaChmdW5jdGlvbiAoaWNvbikgeyByZXR1cm4gaWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6IGhpZGRlbicpOyB9KTtcbiAgICAgICAgICAgICAgICBkYXRhc2V0ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YXNldCcpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRPYmogPSBKU09OLnBhcnNlKGRhdGFzZXQpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0YXJnZXQuY2xvc2VzdCgnLndlYXRoZXJfbGlzdF9faXRlbScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcignLmljb25fcGF1c2UnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTogdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBpc1BsYXlOZXdTb3VuZCA9ICghaWFQbGF5aW5nICYmICFpYVBhdXNlZCkgfHwgKGFjdGl2ZVdlYXRoZXIgIT09IGRhdGFzZXRPYmoubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1BsYXlOZXdTb3VuZCAmJiBkYXRhc2V0T2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVXZWF0aGVyID0gZGF0YXNldE9iai5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaDEudGV4dENvbnRlbnQgPSAnV2VhdGhlciBzb3VuZHMgJyArIGFjdGl2ZVdlYXRoZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZXcmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1pbWFnZTogdXJsKCcgKyBkYXRhc2V0T2JqLmltYWdlICsgJyknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvLnNldEF0dHJpYnV0ZSgnc3JjJywgZGF0YXNldE9iai5zb3VuZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWFQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpYVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGlja1BhdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTogaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpYVBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlhUGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkYXRhLmltYWdlO1xuICAgICAgICB0aGlzLnNvdW5kID0gZGF0YS5zb3VuZDtcbiAgICAgICAgdGhpcy5pY29uID0gZGF0YS5pY29uO1xuICAgIH1cbiAgICBXZWF0aGVyLnByb3RvdHlwZS5hZGRXZWF0aGVyID0gZnVuY3Rpb24gKHdlYXRoZXIpIHtcbiAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuY2xhc3NOYW1lID0gJ3dlYXRoZXJfbGlzdF9faXRlbSc7XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1pbWFnZTogdXJsKCcgKyB3ZWF0aGVyLmltYWdlICsgJyknKTtcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhc2V0JywgSlNPTi5zdHJpbmdpZnkod2VhdGhlcikpO1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSB3ZWF0aGVyLmljb247XG4gICAgICAgIGltZy53aWR0aCA9IDYwO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICB2YXIgaWNvblBhdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBpY29uUGF1c2UuY2xhc3NOYW1lID0gJ2ljb25fcGF1c2UnO1xuICAgICAgICBpY29uUGF1c2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OiBoaWRkZW4nKTtcbiAgICAgICAgaWNvblBhdXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja1BhdXNlKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaWNvblBhdXNlKTtcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrV2VhdGhlcik7XG4gICAgICAgIHVsLmFwcGVuZChsaSk7XG4gICAgfTtcbiAgICByZXR1cm4gV2VhdGhlcjtcbn0oKSk7XG5mdW5jdGlvbiBvbkNoYW5nZVJhbmdlKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgdmFsdWUgPSAnJztcbiAgICBpZiAodGFyZ2V0KVxuICAgICAgICB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBhdWRpby52b2x1bWUgPSBOdW1iZXIodmFsdWUpO1xufVxudmFyIGRpdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRpdldyYXBwZXIuY2xhc3NOYW1lID0gJ3dyYXBwZXInO1xucm9vdC5hcHBlbmQoZGl2V3JhcHBlcik7XG52YXIgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaDEudGV4dENvbnRlbnQgPSAnV2VhdGhlciBzb3VuZHMnO1xuZGl2V3JhcHBlci5hcHBlbmRDaGlsZChoMSk7XG52YXIgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xudWwuY2xhc3NOYW1lID0gJ3dlYXRoZXJfbGlzdCc7XG5kaXZXcmFwcGVyLmFwcGVuZENoaWxkKHVsKTtcbnZhciBkaXZSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGl2UmFuZ2UuY2xhc3NOYW1lID0gJ3JhbmdlX3ZvbHVtZSc7XG52YXIgaW5wdXRSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5pbnB1dFJhbmdlLnR5cGUgPSAncmFuZ2UnO1xuaW5wdXRSYW5nZS5zdGVwID0gJzAuMSc7XG5pbnB1dFJhbmdlLm1pbiA9ICcwLjEnO1xuaW5wdXRSYW5nZS5tYXggPSAnMSc7XG5pbnB1dFJhbmdlLnZhbHVlID0gJzAuNSc7XG5pbnB1dFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25DaGFuZ2VSYW5nZSk7XG5kaXZSYW5nZS5hcHBlbmRDaGlsZChpbnB1dFJhbmdlKTtcbmRpdldyYXBwZXIuYXBwZW5kQ2hpbGQoZGl2UmFuZ2UpO1xuYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuZGl2V3JhcHBlci5hcHBlbmRDaGlsZChhdWRpbyk7XG53ZWF0aGVyRGF0YV8xLmRlZmF1bHQuZm9yRWFjaChmdW5jdGlvbiAod2VhdGhlcikge1xuICAgIHZhciBfd2VhdGhlciA9IG5ldyBXZWF0aGVyKHdlYXRoZXIpO1xuICAgIF93ZWF0aGVyLmFkZFdlYXRoZXIoX3dlYXRoZXIpO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9tYWluLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9