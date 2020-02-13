import attendance from "./arrayMethodAttendance.js";
import performance from "./arrayMethodPerformance.js";

 function ArrayConstructorES5 () {
    var arr = [];
    for (var i = 0; i < arguments.length; i++){
        arr.push(arguments[i]);
    }
    return arr;
}

ArrayConstructorES5.prototype.attendance = attendance;
ArrayConstructorES5.prototype.performance = performance;

export default ArrayConstructorES5;
