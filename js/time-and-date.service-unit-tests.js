// Test Dates
var testDates = {
    yesterdayDate: new Date(),
    dateOfLastMonth: new Date(),
    sortListOfDatesAsc_listToSort: [new Date(2019, 3, 18, 10, 3, 0),
    new Date(2007, 3, 18, 10, 3, 0), new Date(2020, 3, 18, 10, 3, 0), new Date(2019, 2, 18, 10, 3, 0)],

    sortListOfDatesAsc_sortedVersionOfList: [new Date(2020, 3, 18, 10, 3, 0), new Date(2019, 3, 18, 10, 3, 0),
    new Date(2019, 2, 18, 10, 3, 0), new Date(2007, 3, 18, 10, 3, 0)],

    sortListOfDatesDesc_listToSort: [new Date(2019, 3, 18, 10, 3, 0),
    new Date(2007, 3, 18, 10, 3, 0), new Date(2020, 3, 18, 10, 3, 0), new Date(2019, 2, 18, 10, 3, 0)],

    sortListOfDatesDesc_sortedVersionOfList: [new Date(2007, 3, 18, 10, 3, 0),
    new Date(2019, 2, 18, 10, 3, 0), new Date(2019, 3, 18, 10, 3, 0), new Date(2020, 3, 18, 10, 3, 0)],
}

// Set yesterday's date and date of last month
testDates.yesterdayDate.setDate(testDates.yesterdayDate.getDate() - 1);
testDates.dateOfLastMonth.setMonth(testDates.dateOfLastMonth.getMonth() - 1);

// ----------- isSameYear() Unit Tests -----------

console.log('should return true when checking if passed dates are in the same year while passing dates in the same year',
    isSameYear(new Date(2018, 3, 18, 10, 3, 0), new Date(2018, 6, 5, 10, 3, 0)) ? "success" : "failed"
);


console.log('should return false when checking if passed dates are in the same year while passing dates not in the same year',
    !isSameYear(new Date(2007, 3, 18, 10, 3, 0), new Date(2018, 6, 5, 10, 3, 0)) ? "success" : "failed"
);

// ----------- isSameMonth() Unit Tests -----------

console.log('should return true when checking if passed dates are in the same month while passing dates in the same month',
    isSameMonth(new Date(2007, 5, 18, 10, 3, 0), new Date(2018, 5, 5, 10, 3, 0)) ? "success" : "failed"
);


console.log('should return false when checking if passed dates are in the same month while passing dates not in the same month',
    !isSameMonth(new Date(2007, 1, 18, 10, 3, 0), new Date(2018, 5, 5, 10, 3, 0)) ? "success" : "failed"
);

// ----------- isSameDayDate() Unit Tests -----------

console.log('should return true when checking if passed dates are in the same day while passing dates of the same day date',
    isSameDayDate(new Date(2007, 5, 18, 10, 3, 0), new Date(2018, 6, 18, 10, 3, 0)) ? "success" : "failed"
);

console.log('should return false when checking if passed dates are in the same day while passing dates not of the same day date',
    !isSameDayDate(new Date(2007, 1, 18, 10, 3, 0), new Date(2018, 5, 17, 10, 3, 0)) ? "success" : "failed"
);

// ----------- isSameHour() Unit Tests -----------

console.log('should return true when checking if passed dates have the same hour while passing dates having the same hour',
    isSameHour(new Date(2007, 5, 18, 10, 3, 0), new Date(2018, 5, 18, 10, 3, 0)) ? "success" : "failed"
);

console.log('should return false when checking if passed dates have the same hour while passing dates not having the same hour',
    !isSameHour(new Date(2007, 1, 18, 10, 3, 0), new Date(2018, 5, 17, 9, 3, 0)) ? "success" : "failed"
);

// ----------- isSameMinute() Unit Tests -----------

console.log('should return true when checking if passed dates have the same minutes while passing dates having the same minutes',
    isSameMinute(new Date(2007, 5, 18, 9, 30, 0), new Date(2018, 5, 18, 10, 30, 0)) ? "success" : "failed"
);

console.log('should return false when checking if passed dates have the same minutes while passing dates not having the same minutes',
    !isSameMinute(new Date(2007, 1, 18, 10, 5, 0), new Date(2018, 5, 17, 10, 30, 0)) ? "success" : "failed"
);

// ----------- isDateRightNow() Unit Tests -----------

console.log('should return true when checking if a date is the date right now while passing this moment\'s date',
    isDateRightNow(new Date()) ? "success" : "failed"
);

console.log('should return false when checking if a date is the date right now while passing an old date',
    !isDateRightNow(new Date(2018, 3, 18, 10, 3, 0)) ? "success" : "failed"
);

// ----------- isDateToday() Unit Tests -----------

console.log('should return true when checking if a date is today\'s date while passing today\'s date',
    isDateToday(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        10,
        3,
        0)) ? "success" : "failed"
);

console.log('should return false when checking if a date is today\'s date while passing an old date',
    !isDateToday(new Date(2018, 3, 18, 10, 3, 0)) ? "success" : "failed"
);

// ----------- isDateYesterday() Unit Tests -----------

console.log('should return true when checking if a date is yesterday\'s date while passing yesterday\s date',
    isDateYesterday(testDates.yesterdayDate) ? "success" : "failed"
);

console.log('should return false when checking if a date is yesterday\'s date while passing an old date',
    !isDateYesterday(new Date()) ? "success" : "failed"
);

// // ----------- isDateThisMonth() Unit Tests -----------

console.log('should return true when checking if passed date exists in the current month while passing a date in the current month',
    isDateThisMonth(new Date()) ? "success" : "failed"
);

console.log('should return false when checking if passed date exists in the current month while passing a date not in the current month',
    !isDateThisMonth(testDates.dateOfLastMonth) ? "success" : "failed"
);

// ----------- areDatesIdentical() Unit Tests -----------

console.log('should return true when checking if two dates are identical and passing identical dates',
    areDatesIdentical(new Date(2018, 3, 18, 10, 3, 0), new Date(2018, 3, 18, 10, 3, 0)) ? "success" : "failed"
);

console.log('should return false when checking if two dates are identical and passing non-identical dates',
    !areDatesIdentical(new Date(2018, 3, 18, 10, 2, 0), new Date(2018, 3, 18, 10, 3, 0)) ? "success" : "failed"
);

// ----------- formatDateToHHMM() Unit Tests -----------

console.log('should return \'10:03 AM\' when passing the date \'01/8/2018 10:03:00:00\' as a date type to format it to \'HH:MM clocktype\'',
    formatDateToHHMM(new Date(2018, 0, 8, 10, 3, 0)) === '10:03 AM' ? "success" : "failed"
);

console.log('should return \'10:03 PM\' when passing the date \'01/8/2018 22:03:00:00\' as a date type to format it to \'HH:MM clocktype\'',
    formatDateToHHMM(new Date(2018, 0, 8, 22, 3, 0)) === '10:03 PM' ? "success" : "failed"
);

// ----------- formatDateToHHMMSS() Unit Tests -----------

console.log("should return '10:50:01 AM' when passing a date of the same time to format it to HHMMSS",
    formatDateToHHMMSS(new Date(2019, 3, 18, 10, 50, 1)) === "10:50:01 AM" ? "success" : "failed"
);

console.log("should return '10:50:55 PM' when passing a date of the same time to format it to HHMMSS",
    formatDateToHHMMSS(new Date(2019, 3, 18, 22, 50, 55)) === "10:50:55 PM" ? "success" : "failed"
);

// ----------- formatDateToDDMMYY() Unit Tests -----------

console.log('should return \'18/4/19\' when passing the date \'18/04/2019\' to format it to DD/MM/YY without zero prefix',
    formatDateToDDMMYY(new Date(2019, 3, 18, 10, 3, 0), false) === '18/4/19' ? "success" : "failed"
);

console.log('should return \'18/04/19\' when passing the date \'18/04/2019\' to format it to DD/MM/YY with zero prefix',
    formatDateToDDMMYY(new Date(2019, 3, 18, 10, 3, 0), true) === '18/04/19' ? "success" : "failed"
);

// ----------- sortListOfDates() Unit Tests -----------

console.log('should return the list of dates sorted in an ascending order',
    areListsOfDatesIdentical(sortListOfDates(testDates.sortListOfDatesAsc_listToSort, true),
        testDates.sortListOfDatesAsc_sortedVersionOfList) ? "success" : "failed"
);

console.log('should return the list of dates sorted in an descending order',
    areListsOfDatesIdentical(sortListOfDates(testDates.sortListOfDatesDesc_listToSort, false),
        testDates.sortListOfDatesDesc_sortedVersionOfList) ? "success" : "failed"
);

// .:::: helper function ::::.
/** Returns whether or not the passed lists of date are identical
 * @param {Date} listOfDates1 - the first list to test
 * @param {Date} listOfDates2 - the second list to test
 * @returns {Boolean} whether the two passed lists of dates are identical or not
 */
function areListsOfDatesIdentical(listOfDates1, listOfDates2) {
    if (listOfDates1.length !== listOfDates2.length && listOfDates1.length === 0) {
        return false;
    }

    for (let i = 0; i < listOfDates1.length; i++) {
        if (!areDatesIdentical(listOfDates1[i], listOfDates2[i])) {
            return false;
        }
    }

    return true;
}

// ----------- formatDateToMonthNameAndDay() Unit Tests -----------

console.log('should return \'April 18\' when passing the date \'18/04/2019\' to format it to \'monthName dayDate\'',
    formatDateToMonthNameAndDay(new Date(2019, 3, 18, 10, 3, 0), false) === 'April 18' ? "success" : "failed"
);

console.log('should return \'Apr 18\' when passing the date \'18/04/2019\' to format it to \'monthName dayDate\'',
    formatDateToMonthNameAndDay(new Date(2019, 3, 18, 10, 3, 0), true) === 'Apr 18' ? "success" : "failed"
);

