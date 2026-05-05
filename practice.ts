class Person {
  constructor(
    public name: string,
    public age: number,
  ) {
    ((this.name = name), (this.age = age));
  }

  void() {
    console.log(`My name is ${this.name}. i'm ${this.age} years old`);
  }
}

const result = new Person("maruf", 21);
result.void();
