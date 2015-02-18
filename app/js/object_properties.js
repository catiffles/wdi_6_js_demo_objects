var newObjectWithProperties = {};

newObjectWithProperties.someKey = "Hello World"
var someNewVariable = newObjectWithProperties.someKey;

newObjectWithProperties["anotherKey"] = "Hello World";
var anotherNewVariable = newObjectWithProperties["anotherKey"];

Object.defineProperty(newObjectWithProperties, "oneMoreKey", {
  value: "for more control of the property's behavior", writable: true, enumberable: true, configurable: true
});

Object.defineProperties(newObjectWithProperties, {
  "aNewKey": {
    value: "I like turtles", writable: true
  },
  "anOldKey": {
    value: "Foo bar", writable: false
  }
});
