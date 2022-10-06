"use strict";
// .js is a compiled file
// $ tsc ts_basic.ts
function greeter_ts(person) {
    return "Hello, " + person;
}
let user_ts = "John";
console.log(greeter_ts(user_ts));
