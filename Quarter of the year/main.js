// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

// Solution:

const quarterOf = (month) => {
 let January = 1
 let February = 2
 let March = 3
 let April = 4
 let May = 5
 let June = 6
 let July = 7
 let August = 8
 let September = 9
 let October = 10
 let November = 11
 let December = 12
 
 let firstQuarter = [1,2,3]
 let secondQuarter = [4, 5, 6]
 let thirdQuarter = [7, 8, 9]
 let fourthQuarter = [10, 11, 12]
 
 if(month === 1 || month === 2 || month === 3){
   return 1
 }else if (month === 4 || month === 5 || month === 6){
   return 2
 } else if (month === 7 || month === 8 || month === 9){
   return 3
 } else if (month === 10 || month === 11 || month === 12){
   return 4
 }
 
}