// .js is a compiled file
// $ tsc ts_basic.ts

function greeter_ts(person: string) {
  return "Hello, " + person;
}

let user_ts = "John Doe";

console.log(greeter_ts(user_ts));
