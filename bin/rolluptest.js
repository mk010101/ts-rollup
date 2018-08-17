(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.PACKAGE_NAME = factory());
}(this, (function () { 'use strict';

    class B {
        static getVal() {
            return 100;
        }
    }

    class A {
        constructor() {
            this._val = 123;
        }
        get val() {
            return this._val + B.getVal();
        }
    }

    class Main {
        constructor() {
            this._a = new A();
        }
        getValue() {
            return this._a.val;
        }
    }
    const xxx = new Main();

    return xxx;

})));
