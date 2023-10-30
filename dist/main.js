"use strict";
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/main.ts
var main_exports = {};
__export(main_exports, {
    A: function() {
        return A;
    },
    Address: function() {
        return Address;
    },
    Article: function() {
        return Article;
    },
    Aside: function() {
        return Aside;
    },
    B: function() {
        return B;
    },
    Body: function() {
        return Body;
    },
    Br: function() {
        return Br;
    },
    Button: function() {
        return Button;
    },
    Code: function() {
        return Code;
    },
    Element: function() {
        return Element;
    },
    Flex: function() {
        return Flex;
    },
    FlexColumn: function() {
        return FlexColumn;
    },
    FlexRow: function() {
        return FlexRow;
    },
    Footer: function() {
        return Footer;
    },
    Form: function() {
        return Form;
    },
    Grid: function() {
        return Grid;
    },
    H1: function() {
        return H1;
    },
    H2: function() {
        return H2;
    },
    H3: function() {
        return H3;
    },
    H4: function() {
        return H4;
    },
    H5: function() {
        return H5;
    },
    Header: function() {
        return Header;
    },
    I: function() {
        return I;
    },
    IFrame: function() {
        return IFrame;
    },
    Image: function() {
        return Image;
    },
    Img: function() {
        return Img;
    },
    Input: function() {
        return Input;
    },
    Link: function() {
        return Link;
    },
    Main: function() {
        return Main;
    },
    Marker: function() {
        return Marker;
    },
    Menu: function() {
        return Menu;
    },
    MenuItem: function() {
        return MenuItem;
    },
    Option: function() {
        return Option;
    },
    OptionGroup: function() {
        return OptionGroup;
    },
    P: function() {
        return P;
    },
    Section: function() {
        return Section;
    },
    Select: function() {
        return Select;
    },
    Span: function() {
        return Span;
    },
    Text: function() {
        return Text;
    },
    TextArea: function() {
        return TextArea;
    },
    UIThemeProvider: function() {
        return UIThemeProvider;
    },
    Video: function() {
        return Video;
    },
    createUITheme: function() {
        return createUITheme;
    },
    generateCssOverrides: function() {
        return generateCssOverrides;
    }
});
module.exports = __toCommonJS(main_exports);