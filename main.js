import { LinkedList } from "./index.js"

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("elephant");

console.log(list.toString());

console.log(list.size());

console.log(list.printHead());
console.log(list.printTail());

console.log(list.at(3));

list.pop();

console.log(list.toString());

console.log(list.contains("elephant"));
console.log(list.contains("turtle"));
console.log(list.contains("snake"));

console.log(list.find("elephant"));
console.log(list.find("parrot"));
console.log(list.find("snake"));
console.log(list.find("turtle"));

list.insertAt("mammoth", 3);
list.insertAt("monkey", 0);
console.log(list.toString());

list.removeAt(6);
console.log(list.toString());