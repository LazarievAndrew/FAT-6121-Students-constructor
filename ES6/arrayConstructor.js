
import attendance from  './arrayConstuctorClassMethodAttendance.js'
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
