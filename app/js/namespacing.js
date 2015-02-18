var PersonApp = PersonApp || {};

PersonApp.joe = { name: 'joe', age: 23 };

PersonApp.createPerson = function(name, age){
  var display = function(){
    return this.name + " is " + this.age + " years old";
  };
  return {
    name: name,
    age: age,
  };
};

var joe = PersonApp.createPerson('joe', 23);

PersonApp.Person = function Person(name, age){
  this.name = name;
  this.age = age;
  return this;
};

var joemamma = new PersonApp.Person('joemamma', 34);
var jasonwharff = new PersonApp.Person('jasonwharff', 18);
