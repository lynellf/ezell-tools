"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = exports.pipe = void 0;
function pipe(input) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    return fns.reduce(function (nextInput, fn) { return fn(nextInput); }, input);
}
exports.pipe = pipe;
function tap(input) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    fns.forEach(function (fn) { return fn(input); });
    return input;
}
exports.tap = tap;
//# sourceMappingURL=pipe.js.map