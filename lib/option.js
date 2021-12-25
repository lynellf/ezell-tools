"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
var none_1 = require("./none");
var some_1 = require("./some");
function Option(x) {
    return x === undefined || x === null ? (0, none_1.None)(x) : (0, some_1.Some)(x);
}
exports.Option = Option;
//# sourceMappingURL=option.js.map