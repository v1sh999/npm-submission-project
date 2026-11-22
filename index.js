#!/usr/bin/env node

const { program } = require("commander");

program
  .command("greet <name>")
  .action((name) => {
    console.log(`Hello ${name}`);
  });

program
  .command("calc <n1> <n2> <n3>")
  .option("-a, --add", "Add the numbers")
  .option("-s, --sub", "Subtract the numbers")
  .option("-m, --mul", "Multiply the numbers")
  .option("-d, --div", "Divide the numbers")
  .action((n1, n2, n3, options) => {
    const numbers = [n1, n2, n3].map(Number);

    if (numbers.some((num) => !Number.isFinite(num))) {
      console.error("Error: Please provide valid numbers.");
      process.exitCode = 1;
      return;
    }

    const operations = [
      options.add,
      options.sub,
      options.mul,
      options.div,
    ].filter(Boolean);

    if (operations.length !== 1) {
      console.error("Error: Please specify exactly one operation.");
      process.exitCode = 1;
      return;
    }

    let result;

    if (options.add) {
      result = numbers.reduce((sum, num) => sum + num, 0);
    } else if (options.sub) {
      result = numbers.reduce((total, num) => total - num);
    } else if (options.mul) {
      result = numbers.reduce((total, num) => total * num, 1);
    } else if (options.div) {
      if (numbers.slice(1).some((num) => num === 0)) {
        console.error("Error: Division by zero is not allowed.");
        process.exitCode = 1;
        return;
      }

      result = numbers.reduce((total, num) => total / num);
    }

    console.log(`Result: ${result}`);
  });

program.parse(process.argv);
