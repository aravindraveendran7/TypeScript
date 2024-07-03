"use strict";
//enums are way to represent constant values
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Monday"] = "Monday";
    DayOfWeek["Tuesday"] = "Tuesday";
    DayOfWeek["Wednesday"] = "Wednesday";
    DayOfWeek["Thursaday"] = "Thursday";
    DayOfWeek["Friday"] = "Friday";
})(DayOfWeek || (DayOfWeek = {}));
function chooseTheDay(dayChosen) {
    return dayChosen;
}
const res1 = chooseTheDay(DayOfWeek.Monday);
console.log(res1);
