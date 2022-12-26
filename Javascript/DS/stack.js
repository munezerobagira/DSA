class Stack {
  constructor(length) {
    this.Top = -1;
    this.maxLength = length;
    this.Data = [];
  }
  push(item) {
    if (this.Top < this.maxLength - 1) {
      this.Top += 1;
      this.Data.push(item);
    } else
      console.log("The stack is already full, pop oout some elements first");
  }
  pop() {
    if (this.Top >= 0) {
      this.Top -= 1;
      this.Data.pop();
    } else {
      console.log("The stack is already empty");
    }
  }
  peek() {
    if (this.Top >= 0) return this.Data[this.Top];
  }
  isEmpty() {
    return this.Top < 0;
  }
  isFull() {
    return this.Top >= this.maxLength - 1;
  }
}
const stack = new Stack(3);
console.log("Empty:", stack.isEmpty(), "Full:", stack.isFull());
stack.push(1);
console.log(stack.peek());
stack.push(45);
stack.push(56);
stack.push(67);
console.log(stack.peek());
console.log("Full:", stack.isFull(), "Empty:", stack.isEmpty());
stack.pop();
stack.pop();
console.log(stack.peek());
stack.pop();
stack.pop();
console.log(stack.peek());
