# <b>Introduction:</b>
God-specific javascript utils

# <b>Installation:</b>
```shell
npm i godkits
```
# <b>Import:</b>
```shell
let Godkits = require('godkits');
```

# <b>API:</b>


## <b>Godkits.dissolveObject(obj)</b>
* ```obj``` \<object\>
* ```Returns``` \<array\>

### a method to dissolve an object, and then return an array which contains keys and values of the object, even if the value is still an object or an array

```js
let obj = {
    a: "b",
    c: {
        d: "e",
        f: {
            g: "h",
            i: function () {
                console.log("haha");
            },
            j: [[[[["k"]]]], ["l", [["m"]], "n"]]
        }
    }
}

console.log(Godkits.dissolveObject(obj));

// [ 'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  [Function: i],  'j',  'k',  'l',  'm',  'n' ]
```

## <b>Godkits.flatArray(arr)</b>
* ```arr``` \<array\>
* ```Returns``` \<array\>

### a method to flat an array

```js
let a = [[[[1, 2], 3], 4], 5, [6, [7, [[8, [[[[9]]]]]]], [10]]];
console.log(Godkits.flatArray(a));

// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```


## <b>Godkits.sleep(milliseconds)</b>
* ```milliseconds``` \<number\>
* ```Returns``` \<void\>
### a blocking sleep method

```js
console.log(new Date());
Godkits.sleep(3000);
console.log(new Date());

// 2019-04-19T09:54:03.163Z
// 2019-04-19T09:54:06.167Z
```

## <b>Godkits.countDown(callback, milliseconds)</b>
* ```callback``` \<function\>
* ```milliseconds``` \<number\>
* ```Returns``` \<void\>
### a more intuitionistic method to invoke the callback later than the native timeout method

```js
function logTime() {
    console.log("  end time: " + new Date());
}
```
```js
// native timeout method (notice the end time below)

console.log("start time: " + new Date());
setTimeout(logTime, 3000);
setTimeout(logTime, 3000);
setTimeout(logTime, 3000);

// start time: Fri Apr 19 2019 18:07:52 GMT+0800 (GMT+08:00)
//   end time: Fri Apr 19 2019 18:07:55 GMT+0800 (GMT+08:00)
//   end time: Fri Apr 19 2019 18:07:55 GMT+0800 (GMT+08:00)
//   end time: Fri Apr 19 2019 18:07:55 GMT+0800 (GMT+08:00)
```
```js
// Godkits' countDown method (notice the end time below)

console.log("start time: " + new Date());
Godkits.countDown(logTime, 3000);
Godkits.countDown(logTime, 3000);
Godkits.countDown(logTime, 3000);

// start time: Fri Apr 19 2019 18:21:59 GMT+0800 (GMT+08:00)
//   end time: Fri Apr 19 2019 18:22:02 GMT+0800 (GMT+08:00)
//   end time: Fri Apr 19 2019 18:22:05 GMT+0800 (GMT+08:00)
//   end time: Fri Apr 19 2019 18:22:08 GMT+0800 (GMT+08:00)
```

## <b>Godkits.addInterval(intervalName, callback, milliseconds)</b>
* ```intervalName``` \<string\>
* ```callback``` \<function\>
* ```milliseconds``` \<number\>
* ```Returns``` \<boolean\>
### a method looks like the native setInterval(), but more humanizing

```js
// native interval method
let haha = setInterval(() => { console.log("haha"); }, 3000);
clearInterval(haha);

// Godkits interval method
Godkits.addInterval("haha", () => { console.log("haha"); }, 3000);
Godkits.clearInterval("haha");
```

## <b>Godkits.clearInterval(intervalName)</b>
* ```intervalName``` \<string\>
* ```Returns``` \<boolean\>

### a method looks like the native clearInterval(), but more humanizing

```js
// native interval methods
let haha = setInterval(() => { console.log("haha"); }, 3000);
clearInterval(haha);

// Godkits interval methods
Godkits.addInterval("haha", () => { console.log("haha"); }, 3000);
Godkits.clearInterval("haha");
```


## <b>Godkits.randomSample(sample, number)</b>
* ```sample``` \<array\>
* ```array``` \<number\>
* ```Returns``` \<array\>

### a method to return a shuffled (subset) array of the sample array

```js
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Godkits.randomSample(a, 6));
// [ 5, 6, 8, 2, 9, 4 ]
console.log(Godkits.randomSample(a, 3));
// [ 3, 7, 1 ]
```












