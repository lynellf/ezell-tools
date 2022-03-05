"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.None = exports.mapNone = exports.tapNone = void 0;
function tapNone(x) {
    return function (f) {
        f(x);
        return None(x);
    };
}
exports.tapNone = tapNone;
function mapNone(x) {
    return function (fn) {
        return None(fn(x));
    };
}
exports.mapNone = mapNone;
function None(_) {
    return {
        type: 'None',
        value: undefined,
        map: mapNone(undefined),
        tap: tapNone(undefined)
    };
}
exports.None = None;
//# sourceMappingURL=none.js.map