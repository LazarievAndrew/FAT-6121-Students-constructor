
import attendance from  './arrayConstuctorClassMethodAtendance.js'
import performance from "./arrayConstructorMethodPerformance.js";

class arrayConstructor extends Array {
    constructor(...args) {
        super();
        return args;
    }
}

export default arrayConstructor;

arrayConstructor.attendance = attendance;
arrayConstructor.performance = performance;
