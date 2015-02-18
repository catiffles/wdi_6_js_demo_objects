var Person = function(name, age, sex){
  this.name = name;
  this.age = age;
  this.sex = sex;
};

Person.prototype = {
  describe: function(){
    return this.name + " identifies as " + this.sex + " and is " + this.age + " years old.";
  }
}

var Computer = function(comp, screensize, owner, nickname){
  this.comp = comp;
  this.screensize = screensize;
  this.owner = owner;
  this.nickname = nickname;
};
