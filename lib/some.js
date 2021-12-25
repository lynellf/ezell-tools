"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Some = void 0;
var map_1 = require("./map");
var tap_1 = require("./tap");
var flatmap_1 = require("./flatmap");
function Some(x) {
    return {
        value: x,
        map: (0, map_1.map)(x),
        flatMap: (0, flatmap_1.flatMap)(x),
        tap: (0, tap_1.tap)(x)
    };
}
exports.Some = Some;
//# sourceMappingURL=some.js.map