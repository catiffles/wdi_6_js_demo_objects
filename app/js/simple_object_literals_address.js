var judy = {
  name: "Judy Dench",
  age: 32
};

var fred = {
  name: "Fred Armison",
  age: 27
};

var jason = {
  name: "Jason Wharff",
  age: 34,
  occupation: "Software Developer",
  siblings: [judy, fred],
  address: {
    street: "44 Warren St.",
    city: "Stoneham",
    state: "MA",
    zip: 21144,
    display: function(){
      return this.street + ", " + this.city + ", " + this.state;
    }
  },

  describe: function(){
    return this.name + " is " + this.age + " years old";
  }
};
