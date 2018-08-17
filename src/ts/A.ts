import {B} from "./util/B"

export class A {


    private _val:number;

    constructor() {

        this._val = 123;

    }


    get val():number {
        return this._val + B.getVal();
    }


}