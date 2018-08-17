import {A} from "./A";

class Main {


    private _a:A;

    constructor() {

        this._a = new A();

    }

    public getValue():number {
        return this._a.val;
    }


}