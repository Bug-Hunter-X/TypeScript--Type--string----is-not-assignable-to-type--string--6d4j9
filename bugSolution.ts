function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correctly handles the array input
console.log(greeter(user.join(" "))); // Correctly handles the array input by joining it into a string