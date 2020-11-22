// index.js
"use strict";
var _message = _interopRequireDefault(
	require("./message.js")
);
function _interopRequireDefault(obj) { 
	return obj && obj.__esModule ? obj : { "default": obj };
}
// import message1 from './message1.js'\nconsole.log(_message["default"]);


// message.js
"use strict";

Object.defineProperty(exports, "__esModule",{
  value: true
});
exports["default"] = void 0;
var _name = require("./name.js");
var message = "welcome ".concat(_name.name);
var _default = message;
exports["default"] = _default;


// name.js
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = void 0;
var name = 'PengGeng';
exports.name = name;