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

program
  .command("random <min> <max>")
  .description("Generate a random whole number within a range")
  .action((min, max) => {
    min = Number(min);
    max = Number(max);

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      console.error("Error: Please provide valid whole numbers.");
      process.exitCode = 1;
      return;
    }

    if (min > max) {
      console.error("Error: Minimum cannot be greater than maximum.");
      process.exitCode = 1;
      return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(`Random number: ${result}`);
  });

program
  .command("date")
  .description("Display the current date and time")
  .action(() => {
    const now = new Date();

    const currentDate = now.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const currentTime = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    console.log(`Current Date: ${currentDate}`);
    console.log(`Current Time: ${currentTime}`);
  });

program
  .command("joke")
  .description("Fetch a random programming joke")
  .action(async () => {
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?safe-mode"
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error("The API returned an error.");
      }

      if (data.type === "single") {
        console.log(data.joke);
      } else {
        console.log(data.setup);
        console.log(data.delivery);
      }
    } catch (error) {
      console.error("Error fetching joke:", error.message);
      process.exitCode = 1;
    }
  });

program.parse(process.argv);