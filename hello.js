function sayHello(name) {
  console.log("Hello World, " + name);
}

//sayHello("Flourish");
//sayHello("Michael");
//sayHello("Micah");

function sayHelloToConsole(name) {
  console.log("Hello, " + name);

}

sayHelloToConsole("Flourish");

function returnSayHello(name) {
  return "Hello, " + name;
}

var greeting = returnSayHello("John");
console.log(greeting);