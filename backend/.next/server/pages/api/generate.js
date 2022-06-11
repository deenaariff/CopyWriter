"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n  apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const completion = await openai.createCompletion(\"text-davinci-002\", {\n    prompt: generatePrompt(req.body.prompt),\n    temperature: 0.9\n  });\n  res.status(200).json({\n    result: completion.data.choices[0].text\n  });\n}\n\nfunction generatePrompt(prompt) {\n  return `Reword this sentence to make it better.\n\nOriginal: He picked up something heavy and hit James on the face. James cried out, and fell.\nBetter: He snatched up a rock and smashed it against James’ nose. James groaned, and sank to his knees.\nOriginal: The morning sun’s silent rays burned Julia’s skin as she walked from the grassy, open field into the deeply forested woods. Immediately the late spring air felt cooler.\nBetter: The morning sun burned Julia’s skin as she walked from the grassy field into the deep woods. Immediately the late spring air felt cooler.\nOriginal: The man was there in the bushes, waiting. When Joan was just three feet away, he kind of tensed, then leaped out and grabbed her. Joan struggled, but it seemed he was just too strong for her, and finally they fell down. She actually screamed, and even scratched his face.\nBetter: The man was in the bushes, waiting. When Joan was three feet away, he tensed, leaped out, and grabbed her. Joan struggled, but he was too strong for her, and they fell down. She screamed, and scratched his face.\nOriginal: ${prompt}\nBetter:`;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNRSxhQUFhLEdBQUcsSUFBSUYsaURBQUosQ0FBa0I7QUFDdENHLEVBQUFBLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBRGtCLENBQWxCLENBQXRCO0FBR0EsTUFBTUMsTUFBTSxHQUFHLElBQUlOLDZDQUFKLENBQWNDLGFBQWQsQ0FBZjtBQUVBLDZCQUFlLDBDQUFnQk0sR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3ZDLFFBQU1DLFVBQVUsR0FBRyxNQUFNSCxNQUFNLENBQUNJLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QztBQUNuRUMsSUFBQUEsTUFBTSxFQUFFQyxjQUFjLENBQUNMLEdBQUcsQ0FBQ00sSUFBSixDQUFTRixNQUFWLENBRDZDO0FBRW5FRyxJQUFBQSxXQUFXLEVBQUU7QUFGc0QsR0FBNUMsQ0FBekI7QUFJQU4sRUFBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsSUFBQUEsTUFBTSxFQUFFUixVQUFVLENBQUNTLElBQVgsQ0FBZ0JDLE9BQWhCLENBQXdCLENBQXhCLEVBQTJCQztBQUFyQyxHQUFyQjtBQUNEOztBQUVELFNBQVNSLGNBQVQsQ0FBd0JELE1BQXhCLEVBQWdDO0FBQzlCLFNBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVlBLE1BQU87QUFDbkIsUUFURTtBQVVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcz8xM2RhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbn0pO1xuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbihcInRleHQtZGF2aW5jaS0wMDJcIiwge1xuICAgIHByb21wdDogZ2VuZXJhdGVQcm9tcHQocmVxLmJvZHkucHJvbXB0KSxcbiAgICB0ZW1wZXJhdHVyZTogMC45LFxuICB9KTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzWzBdLnRleHQgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvbXB0KHByb21wdCkge1xuICByZXR1cm4gYFJld29yZCB0aGlzIHNlbnRlbmNlIHRvIG1ha2UgaXQgYmV0dGVyLlxuXG5PcmlnaW5hbDogSGUgcGlja2VkIHVwIHNvbWV0aGluZyBoZWF2eSBhbmQgaGl0IEphbWVzIG9uIHRoZSBmYWNlLiBKYW1lcyBjcmllZCBvdXQsIGFuZCBmZWxsLlxuQmV0dGVyOiBIZSBzbmF0Y2hlZCB1cCBhIHJvY2sgYW5kIHNtYXNoZWQgaXQgYWdhaW5zdCBKYW1lc+KAmSBub3NlLiBKYW1lcyBncm9hbmVkLCBhbmQgc2FuayB0byBoaXMga25lZXMuXG5PcmlnaW5hbDogVGhlIG1vcm5pbmcgc3Vu4oCZcyBzaWxlbnQgcmF5cyBidXJuZWQgSnVsaWHigJlzIHNraW4gYXMgc2hlIHdhbGtlZCBmcm9tIHRoZSBncmFzc3ksIG9wZW4gZmllbGQgaW50byB0aGUgZGVlcGx5IGZvcmVzdGVkIHdvb2RzLiBJbW1lZGlhdGVseSB0aGUgbGF0ZSBzcHJpbmcgYWlyIGZlbHQgY29vbGVyLlxuQmV0dGVyOiBUaGUgbW9ybmluZyBzdW4gYnVybmVkIEp1bGlh4oCZcyBza2luIGFzIHNoZSB3YWxrZWQgZnJvbSB0aGUgZ3Jhc3N5IGZpZWxkIGludG8gdGhlIGRlZXAgd29vZHMuIEltbWVkaWF0ZWx5IHRoZSBsYXRlIHNwcmluZyBhaXIgZmVsdCBjb29sZXIuXG5PcmlnaW5hbDogVGhlIG1hbiB3YXMgdGhlcmUgaW4gdGhlIGJ1c2hlcywgd2FpdGluZy4gV2hlbiBKb2FuIHdhcyBqdXN0IHRocmVlIGZlZXQgYXdheSwgaGUga2luZCBvZiB0ZW5zZWQsIHRoZW4gbGVhcGVkIG91dCBhbmQgZ3JhYmJlZCBoZXIuIEpvYW4gc3RydWdnbGVkLCBidXQgaXQgc2VlbWVkIGhlIHdhcyBqdXN0IHRvbyBzdHJvbmcgZm9yIGhlciwgYW5kIGZpbmFsbHkgdGhleSBmZWxsIGRvd24uIFNoZSBhY3R1YWxseSBzY3JlYW1lZCwgYW5kIGV2ZW4gc2NyYXRjaGVkIGhpcyBmYWNlLlxuQmV0dGVyOiBUaGUgbWFuIHdhcyBpbiB0aGUgYnVzaGVzLCB3YWl0aW5nLiBXaGVuIEpvYW4gd2FzIHRocmVlIGZlZXQgYXdheSwgaGUgdGVuc2VkLCBsZWFwZWQgb3V0LCBhbmQgZ3JhYmJlZCBoZXIuIEpvYW4gc3RydWdnbGVkLCBidXQgaGUgd2FzIHRvbyBzdHJvbmcgZm9yIGhlciwgYW5kIHRoZXkgZmVsbCBkb3duLiBTaGUgc2NyZWFtZWQsIGFuZCBzY3JhdGNoZWQgaGlzIGZhY2UuXG5PcmlnaW5hbDogJHtwcm9tcHR9XG5CZXR0ZXI6YDtcbn1cbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsImNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwicHJvbXB0IiwiZ2VuZXJhdGVQcm9tcHQiLCJib2R5IiwidGVtcGVyYXR1cmUiLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/generate.js\n");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();