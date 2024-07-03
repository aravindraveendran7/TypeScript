//enums are way to represent constant values
enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursaday = "Thursday",
  Friday = "Friday",
}

function chooseTheDay(dayChosen: DayOfWeek) {
  return dayChosen;
}

const res1: DayOfWeek = chooseTheDay(DayOfWeek.Monday);
console.log(res1);
