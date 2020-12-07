import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];


describe("Calculator", () => {

  dataset.forEach((value) => {
      const x = value.x;
      const y = value.y;
      const m = value.method;
    test("which method", () => {

      /* Option 1: We can test using a switch case comparing the methods and in return doing that particular function */

      switch(m){
        case "add":
          expect(calculator.add(x,y)).toBe(x + y);
          break;
        case "subtract":
          expect(calculator.subtract(x,y)).toBe(x - y);
          break;
        case "multiply":
          expect(calculator.multiply(x,y)).toBe(x * y);
          break;
        case "divide":
          expect(calculator.divide(x,y)).toBe(x / y);
          break;   
           default:
               null
               break;
      };

      /* Option 2: Or we can use a ternary which is less readable   */

      // m === "add" ? expect(calculator.add(x, y)).toBe(x + y) :
      //   m === "subtract" ? expect(calculator.subtract(x, y)).toBe(x - y) :
      //     m === "multiply" ? expect(calculator.multiply(x, y)).toBe(x * y) :
      //       m === "divide" ? expect(calculator.divide(x, y)).toBe(x / y) : null;


    /*  Option 3: Or we can use Object literals to pass in the parameters  */
      // (m) => ({
      //   "add" : expect(calculator.add(x, y)).toBe(x + y),
      //   "subract" : expect(calculator.subtract(x, y)).toBe(x - y),
      //   "multiply" :  expect(calculator.multiply(x, y)).toBe(x * y),
      //   "divide" : expect(calculator.divide(x, y)).toBe(x / y)
      // });
    });
  });

});
