class Godkits {
    static sleep(millisecond) {
        if (millisecond < 0) {
            let errMsg = `function(Godkits.sleep/timeout)'s argument(millisecond: ${millisecond}) is less than 0;`;
            throw new Error(errMsg);
        }
        let currentNow = Date.now();
        while (Date.now() < currentNow + millisecond) {}
    }

    static countDown(callback, millisecond) {
        Godkits.sleep(millisecond);
        callback();
    }

    static addInterval(intervalName, callback, millisecond) {
        // intervalName duplicated?
        // if (Godkits.intervalNameSet.has(intervalName)) {
        //     return false;
        // }
        // Godkits.intervalNameSet.add(intervalName);
        // Godkits.intervalArray.push({
        //     [intervalName]: setInterval(callback, millisecond)
        // });
        // return true;

        // intervalName duplicated?
        if (Godkits.intervalMapping[intervalName] != undefined) {
            return false;
        }

        Godkits.intervalMapping[intervalName] = setInterval(callback, millisecond);
        return true;
    }

    static clearInterval(intervalName) {
        // if (!Godkits.intervalNameSet.has(intervalName)) {
        //     let errMsg = `clearInterval error, don't have the intervalName:${intervalName} at all`;
        //     throw new Error(errMsg);
        // }
        // Godkits.intervalNameSet.delete(intervalName);

        if (Godkits.intervalMapping[intervalName] == undefined) {
            // let errMsg = `clearInterval error, don't have the intervalName:${intervalName} at all`;
            // throw new Error(errMsg);
            return false;
        }
        clearInterval(Godkits.intervalMapping[intervalName])
        delete Godkits.intervalMapping[intervalName];
        return true;
    }

    static flatArray(arr) {
        let result = [];

        function whetherArray(ele1) {
            if (Array.isArray(ele1)) {
                ele1.forEach(ele2 => {
                    whetherArray(ele2);
                })
            } else {
                result.push(ele1);
            }
        }

        arr.forEach(element => {
            whetherArray(element);
        });
        return result;
    }

    static dissolveObject(obj) {
        let result = [];

        // function flat(arr) {
        //     // let result = [];
        //     function whetherArray(ele1) {
        //         if (Array.isArray(ele1)) {
        //             ele1.forEach(ele2 => {
        //                 whetherArray(ele2);
        //             })
        //         } else {
        //             result.push(ele1);
        //         }
        //     }
        //     arr.forEach(element => {
        //         whetherArray(element);
        //     });
        //     return result;
        // }

        function whileObject(ele) {
            for (const key in ele) {
                result.push(key);
                if (Array.isArray(ele[key])) {
                    // flat(ele[key]);
                    result = [...result, ...Godkits.flatArray(ele[key])];
                } else if (typeof ele[key] == 'object') {
                    whileObject(ele[key]);
                } else {
                    result.push(ele[key]);
                }
            }
        }

        whileObject(obj)
        return result;
    }

    static randomSample(sample, num) {
        let arr = Object.assign(sample);
        if (num > arr.length || num < 1) {
            console.log(`the number of the randomSample should be in [1, sample.length)`);
            return null;
        }
        let outputArr = [];
        for (let i = 0; i < num; i++) {
            let nowIndex = Math.floor(Math.random() * arr.length); //Math.floor保证了nowIndex不会取到arr.length
            outputArr[i] = arr[nowIndex];
            let temp = arr[nowIndex];
            arr[nowIndex] = arr[arr.length - 1];
            arr[arr.length - 1] = temp;
            arr.pop(); //pop()方法会改变原数组长度
        }
        return outputArr;
    }
}

// static property
Godkits.intervalMapping = {};
// Godkits.intervalNameSet = new Set();
// Godkits.intervalArray = [];
module.exports = Godkits;