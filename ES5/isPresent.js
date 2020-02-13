export var present = function() {
    for (var i = 0; i < 25; i++){   // на for сделал, чтоб отсечь более 25 элементов и убрать лишние проверки
        if (this.attendance[i] === undefined){
            this.attendance[i] = true;
            break;
        }
    }
}
