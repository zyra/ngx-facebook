(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @hidden
     */
    function FBMLAttribute(target, key) {
        var processKey = function (_k) { return 'data-' + _k.toString().replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase(); };
        Object.defineProperty(target, key, {
            set: function (value) {
                value = value.toString();
                this.setAttribute(processKey(key), value);
            },
            get: function () {
                return this.getAttribute(processKey(key));
            },
            enumerable: true
        });
    }
    exports.FBMLAttribute = FBMLAttribute;
    /**
     * @hidden
     */
    function FBMLInstanceMethod(target, key) {
        return {
            enumerable: true,
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this._instance) {
                    return this._instance[key].apply(this._instance, args);
                }
                else {
                    console.warn('ng2-facebook-sdk: tried calling instance method before component is ready.');
                    return null;
                }
            }
        };
    }
    exports.FBMLInstanceMethod = FBMLInstanceMethod;
    /**
     * @hidden
     */
    var FBMLComponent = /** @class */ (function () {
        function FBMLComponent(el, rnd, fbClass) {
            this.el = el;
            this.rnd = rnd;
            this.fbClass = fbClass;
            this.nativeElement = this.el.nativeElement;
            this.rnd.addClass(this.nativeElement, this.fbClass);
        }
        FBMLComponent.prototype.setAttribute = function (name, value) {
            if (!name || !value)
                return;
            this.rnd.setAttribute(this.nativeElement, name, value);
        };
        FBMLComponent.prototype.getAttribute = function (name) {
            if (!name)
                return;
            return this.nativeElement.getAttribute(name);
        };
        return FBMLComponent;
    }());
    exports.FBMLComponent = FBMLComponent;
});
//# sourceMappingURL=fbml-component.js.map