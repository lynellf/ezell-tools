"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.None = void 0;
function None(x) {
    return {
        value: undefined,
        map: function (_fn) { return None(x); },
        flatMap: function (_fn) { return None(x); },
        tap: function (_fn) { return None(x); }
    };
}
exports.None = None;
//# sourceMappingURL=none.js.map