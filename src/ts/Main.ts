import {A} from "./A";

/**
 * If you want to keep the static ref use export default class MyMainClass.
 * Otherwise, use const at the end of this class.
 */
//export default class Main {
class Main {


    private _a:A;

    constructor() {

        this._a = new A();

    }

    public getValue():number {
        return this._a.val;
    }


}

/**
 * If you want to instantiate the main class
  */
const  xxx = new Main();
export default xxx;