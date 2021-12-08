module.exports = class Calculator {
    number1 = 0
    number2 = 0

    sum(number1, number2) {
      this.number1 = number1
      this.number2 = number2
      return this.number1 + this.number2
    }

    multiply(number1, number2) {
      this.number1 = number1
      this.number2 = number2
      return this.number1 * this.number2;
    }

    subs(number1, number2) {
      this.number1 = number1
      this.number2 = number2
      return this.number1 - this.number2;
    }

    divide(number1, number2) {
      this.number1 = number1
      this.number2 = number2
      return this.number1 / this.number2;
    }
}