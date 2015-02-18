var Animal = {
  type: "Birds",
  displayType : function(){
    return "/" + this.type + "/";
  }
}

var HumanBeing = {
  name: "Matt",
  age: 10,
  talk : function(speech){
    return this.name + " said " + speech + " when he/she turned " + this.age;
  }
}
