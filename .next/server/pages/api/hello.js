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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "form-data":
/*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),

/***/ "mailgen":
/*!**************************!*\
  !*** external "mailgen" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mailgen");

/***/ }),

/***/ "mailgun.js":
/*!*****************************!*\
  !*** external "mailgun.js" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mailgun.js");

/***/ }),

/***/ "(api)/./pages/api/hello.ts":
/*!****************************!*\
  !*** ./pages/api/hello.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mailgun_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mailgun.js */ \"mailgun.js\");\n/* harmony import */ var mailgun_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mailgun_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form-data */ \"form-data\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mailgen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mailgen */ \"mailgen\");\n/* harmony import */ var mailgen__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mailgen__WEBPACK_IMPORTED_MODULE_2__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\nconst API_KEY = \"ca89003d5b854013c33c392ae4d82f87-6df690bb-8d197859\";\nconst DOMAIN = \"sandbox46880521a7b24e859f672952141a7190.mailgun.org\";\nconst mailgen = new (mailgen__WEBPACK_IMPORTED_MODULE_2___default())({\n    theme: \"default\",\n    product: {\n        name: \"Rishi\",\n        link: \"https://rishibhattasali.vercel.app\"\n    }\n});\nconst mailgun = new (mailgun_js__WEBPACK_IMPORTED_MODULE_0___default())((form_data__WEBPACK_IMPORTED_MODULE_1___default())).client({\n    username: \"api\",\n    key: API_KEY\n});\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const { recipient  } = req.query; // Pass the recipient email as a query parameter.\n        try {\n            console.log(\"Fetching email events...\");\n            const response = await mailgun.events.get(DOMAIN, {\n                recipient: recipient\n            });\n            res.status(200).json({\n                success: true,\n                events: response.items\n            });\n        } catch (e) {\n            console.error(\"Error fetching events:\", e.message || e);\n            res.status(500).json({\n                success: false,\n                error: e.message || e\n            });\n        }\n        return;\n    }\n    if (req.method === \"POST\") {\n        const body = req.body || {};\n        const intro = body.intro || \"\";\n        const content = body.content || \"\";\n        const email = {\n            body: {\n                name: body.name || \"Customer\",\n                intro,\n                outro: content\n            }\n        };\n        try {\n            console.log(\"Sending email...\");\n            const response = await mailgun.messages.create(DOMAIN, {\n                to: \"pretishasahoo@gmail.com\",\n                from: \"rishibhattasali@gmail.com\",\n                subject: body.subject || \"Test Email\",\n                text: mailgen.generatePlaintext(email),\n                html: mailgen.generate(email)\n            });\n            console.log(\"Mailgun response:\", response);\n            res.status(200).json({\n                success: true\n            });\n        } catch (e) {\n            console.error(\"Mailgun error:\", e.message || e);\n            res.status(500).json({\n                success: false\n            });\n        }\n        return;\n    }\n    // If the method is not GET or POST, return 404\n    res.status(404).json({\n        success: false\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZFQUE2RTtBQUU1QztBQUNBO0FBQ0g7QUFFOUIsTUFBTUcsVUFBVTtBQUNoQixNQUFNQyxTQUFTO0FBRWYsTUFBTUMsVUFBVSxJQUFJSCxnREFBT0EsQ0FBQztJQUN4QkksT0FBTztJQUNQQyxTQUFTO1FBQ0xDLE1BQU07UUFDTkMsTUFBTTtJQUNWO0FBQ0o7QUFFQSxNQUFNQyxVQUFVLElBQUlWLG1EQUFPQSxDQUFDQyxrREFBUUEsRUFBRVUsTUFBTSxDQUFDO0lBQ3pDQyxVQUFVO0lBQ1ZDLEtBQUtWO0FBQ1Q7QUFjZSxlQUFlVyxRQUMxQkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3RCO0lBQ0UsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDdEIsTUFBTSxFQUFFQyxVQUFTLEVBQUUsR0FBR0gsSUFBSUksS0FBSyxFQUFFLGlEQUFpRDtRQUVsRixJQUFJO1lBQ0FDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE1BQU1DLFdBQXNCLE1BQU1aLFFBQVFhLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDcEIsUUFBUTtnQkFDekRjLFdBQVdBO1lBQ2Y7WUFFQUYsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUyxJQUFJO2dCQUFFSixRQUFRRCxTQUFTTSxLQUFLO1lBQUM7UUFDakUsRUFBRSxPQUFPQyxHQUFRO1lBQ2JULFFBQVFVLEtBQUssQ0FBQywwQkFBMEJELEVBQUVFLE9BQU8sSUFBSUY7WUFDckRiLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUcsT0FBT0QsRUFBRUUsT0FBTyxJQUFJRjtZQUFFO1FBQ2pFO1FBQ0E7SUFDSixDQUFDO0lBRUQsSUFBSWQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDdkIsTUFBTWUsT0FBT2pCLElBQUlpQixJQUFJLElBQUksQ0FBQztRQUMxQixNQUFNQyxRQUFRRCxLQUFLQyxLQUFLLElBQUk7UUFDNUIsTUFBTUMsVUFBVUYsS0FBS0UsT0FBTyxJQUFJO1FBQ2hDLE1BQU1DLFFBQVE7WUFDVkgsTUFBTTtnQkFDRnhCLE1BQU13QixLQUFLeEIsSUFBSSxJQUFJO2dCQUNuQnlCO2dCQUNBRyxPQUFPRjtZQUNYO1FBQ0o7UUFFQSxJQUFJO1lBQ0FkLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE1BQU1DLFdBQVcsTUFBTVosUUFBUTJCLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDbEMsUUFBUTtnQkFDbkRtQyxJQUFJO2dCQUNKQyxNQUFNO2dCQUNOQyxTQUFTVCxLQUFLUyxPQUFPLElBQUk7Z0JBQ3pCQyxNQUFNckMsUUFBUXNDLGlCQUFpQixDQUFDUjtnQkFDaENTLE1BQU12QyxRQUFRd0MsUUFBUSxDQUFDVjtZQUMzQjtZQUNBZixRQUFRQyxHQUFHLENBQUMscUJBQXFCQztZQUNqQ04sSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUyxJQUFJO1lBQUM7UUFDekMsRUFBRSxPQUFPRSxHQUFRO1lBQ2JULFFBQVFVLEtBQUssQ0FBQyxrQkFBa0JELEVBQUVFLE9BQU8sSUFBSUY7WUFDN0NiLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztZQUFDO1FBQzFDO1FBQ0E7SUFDSixDQUFDO0lBRUQsK0NBQStDO0lBQy9DWCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLFNBQVMsS0FBSztJQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWlsZ3VuLy4vcGFnZXMvYXBpL2hlbGxvLnRzPzY1N2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBNYWlsZ3VuIGZyb20gJ21haWxndW4uanMnO1xyXG5pbXBvcnQgRm9ybURhdGEgZnJvbSAnZm9ybS1kYXRhJztcclxuaW1wb3J0IE1haWxHZW4gZnJvbSAnbWFpbGdlbic7XHJcblxyXG5jb25zdCBBUElfS0VZID0gJ2NhODkwMDNkNWI4NTQwMTNjMzNjMzkyYWU0ZDgyZjg3LTZkZjY5MGJiLThkMTk3ODU5JztcclxuY29uc3QgRE9NQUlOID0gJ3NhbmRib3g0Njg4MDUyMWE3YjI0ZTg1OWY2NzI5NTIxNDFhNzE5MC5tYWlsZ3VuLm9yZyc7XHJcblxyXG5jb25zdCBtYWlsZ2VuID0gbmV3IE1haWxHZW4oe1xyXG4gICAgdGhlbWU6ICdkZWZhdWx0JyxcclxuICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICBuYW1lOiAnUmlzaGknLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL3Jpc2hpYmhhdHRhc2FsaS52ZXJjZWwuYXBwJyxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgbWFpbGd1biA9IG5ldyBNYWlsZ3VuKEZvcm1EYXRhKS5jbGllbnQoe1xyXG4gICAgdXNlcm5hbWU6ICdhcGknLFxyXG4gICAga2V5OiBBUElfS0VZLFxyXG59KTtcclxuXHJcbnR5cGUgRGF0YSA9IHtcclxuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbn07XHJcblxyXG50eXBlIEV2ZW50RGF0YSA9IHtcclxuICAgIGl0ZW1zOiBBcnJheTx7XHJcbiAgICAgICAgZXZlbnQ6IHN0cmluZztcclxuICAgICAgICByZWNpcGllbnQ6IHN0cmluZztcclxuICAgICAgICB0aW1lc3RhbXA6IG51bWJlcjtcclxuICAgIH0+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIGNvbnN0IHsgcmVjaXBpZW50IH0gPSByZXEucXVlcnk7IC8vIFBhc3MgdGhlIHJlY2lwaWVudCBlbWFpbCBhcyBhIHF1ZXJ5IHBhcmFtZXRlci5cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIGVtYWlsIGV2ZW50cy4uLicpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTogRXZlbnREYXRhID0gYXdhaXQgbWFpbGd1bi5ldmVudHMuZ2V0KERPTUFJTiwge1xyXG4gICAgICAgICAgICAgICAgcmVjaXBpZW50OiByZWNpcGllbnQgYXMgc3RyaW5nLCAvLyBUcmFjayBldmVudHMgZm9yIGEgc3BlY2lmaWMgZW1haWwuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBldmVudHM6IHJlc3BvbnNlLml0ZW1zIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBldmVudHM6JywgZS5tZXNzYWdlIHx8IGUpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZS5tZXNzYWdlIHx8IGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGludHJvID0gYm9keS5pbnRybyB8fCAnJztcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gYm9keS5jb250ZW50IHx8ICcnO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0ge1xyXG4gICAgICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBib2R5Lm5hbWUgfHwgJ0N1c3RvbWVyJyxcclxuICAgICAgICAgICAgICAgIGludHJvLFxyXG4gICAgICAgICAgICAgICAgb3V0cm86IGNvbnRlbnQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgZW1haWwuLi4nKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWlsZ3VuLm1lc3NhZ2VzLmNyZWF0ZShET01BSU4sIHtcclxuICAgICAgICAgICAgICAgIHRvOiAncHJldGlzaGFzYWhvb0BnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgZnJvbTogJ3Jpc2hpYmhhdHRhc2FsaUBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgc3ViamVjdDogYm9keS5zdWJqZWN0IHx8ICdUZXN0IEVtYWlsJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6IG1haWxnZW4uZ2VuZXJhdGVQbGFpbnRleHQoZW1haWwpLFxyXG4gICAgICAgICAgICAgICAgaHRtbDogbWFpbGdlbi5nZW5lcmF0ZShlbWFpbCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTWFpbGd1biByZXNwb25zZTonLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcclxuICAgICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWFpbGd1biBlcnJvcjonLCBlLm1lc3NhZ2UgfHwgZSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgbWV0aG9kIGlzIG5vdCBHRVQgb3IgUE9TVCwgcmV0dXJuIDQwNFxyXG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiTWFpbGd1biIsIkZvcm1EYXRhIiwiTWFpbEdlbiIsIkFQSV9LRVkiLCJET01BSU4iLCJtYWlsZ2VuIiwidGhlbWUiLCJwcm9kdWN0IiwibmFtZSIsImxpbmsiLCJtYWlsZ3VuIiwiY2xpZW50IiwidXNlcm5hbWUiLCJrZXkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVjaXBpZW50IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJldmVudHMiLCJnZXQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIml0ZW1zIiwiZSIsImVycm9yIiwibWVzc2FnZSIsImJvZHkiLCJpbnRybyIsImNvbnRlbnQiLCJlbWFpbCIsIm91dHJvIiwibWVzc2FnZXMiLCJjcmVhdGUiLCJ0byIsImZyb20iLCJzdWJqZWN0IiwidGV4dCIsImdlbmVyYXRlUGxhaW50ZXh0IiwiaHRtbCIsImdlbmVyYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.ts"));
module.exports = __webpack_exports__;

})();