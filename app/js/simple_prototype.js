var person = {
  type: 'person',
  name: 'person',
  sayHi: function(msg){
    return this.name + " says " + msg;
  }
};

var jeff = {
  name: "Jeff Horn",
  age: 23,
  describe: function(){
    return this.name + " is " + this.age + " years old";
  }
};

jeff.__proto__ = person;

jeff.sayHi('hello world');
