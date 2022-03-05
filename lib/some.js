"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Some = void 0;
var map_1 = require("./map");
var tap_1 = require("./tap");
function unwrap(x) {
    var _a, _b;
    var isSome = ((_a = x) === null || _a === void 0 ? void 0 : _a.type) === 'Some';
    var value = (_b = x) === null || _b === void 0 ? void 0 : _b.value;
    var hasValue = value !== undefined;
    if (!isSome)
        return x;
    if (!hasValue)
        return x;
    return hasValue ? value : unwrap(x);
}
function Some(x) {
    return {
        type: 'Some',
        map: (0, map_1.map)(x),
        tap: (0, tap_1.tap)(x),
        get value() {
            return unwrap(x);
        }
    };
}
exports.Some = Some;
//# sourceMappingURL=some.js.map