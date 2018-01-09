//objects/this 
let person = {
  name: 'Abigail',
  age: 29,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',

  sayHello: function() {
    return `Hello, my name is ${this.name}`
    return 'Hello, there!';
  },

  sayGoodbye() {
    return 'Goodbye!';
  }

};

let friend = {
  name: 'Nicole',
};

friend.sayHello = person.sayHello;

console.log(person.sayHello());

person.hobbies = ['Knitting', 'Cross stitching'];
person.hobbies = ['Napping'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

console.log(friend.sayHello());

/////////////////
//getters and setters
let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
get age() {
  console.log(`${this.name} is ${this.age}`);
  return this._age;
}
};

console.log(person.age);

person.age = 'Thirty-nine';
person.age = 39;
