"use strict";
{
    // nullable types / unknow type
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName("Mohammad");
    // unknown typeof
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ${unit}`);
        }
        else {
            console.log("Input Valid Input");
        }
    };
    getSpeedInMeterPerSecond(`1000 kh^-1`);
    // Never 
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("Error Makes");
}
