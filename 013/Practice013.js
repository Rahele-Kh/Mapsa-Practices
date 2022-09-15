const object = {
  firstName: "Rahele",
  lastName: "Khalifeie",
  age: 30,
  gender: "female",
  bio: function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old. His/Her gender is ${this.gender}`;
  },
  birthDate: function () {
    return `He/She borns in ${this.age * 365 - 33} days ago in a summer's day.`;
  },
};

console.log(object.birthDate());
