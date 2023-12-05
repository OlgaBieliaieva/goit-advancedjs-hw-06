/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}
let weekend = [WeekDays.Sat, WeekDays.Sun];

function isWeekend(day: WeekDays): boolean {
  
  return weekend.includes(day);
}
isWeekend(WeekDays.Fri);
