# Everyday CLI Toolbox

A lightweight command-line utility package built with **Node.js** and **Commander.js**. It provides a collection of simple everyday utilities through a single CLI interface.

## Installation

Install the package globally using npm:

```bash
npm install -g @v1sh999/npm-submission-project-m3
```

Once installed, the `npm-toolbox` command will be available in your terminal.

## Available Commands

### 1. Greeting

Display a greeting for a given name.

```bash
npm-toolbox greet World
```

### 2. Calculator

Perform arithmetic operations on three numbers.

```bash
npm-toolbox calc 10 5 2 --add
npm-toolbox calc 10 5 2 --sub
npm-toolbox calc 10 5 2 --mul
npm-toolbox calc 10 5 2 --div
```

Available options:

| Option | Description |
|---|---|
| `-a, --add` | Add the numbers |
| `-s, --sub` | Subtract the numbers |
| `-m, --mul` | Multiply the numbers |
| `-d, --div` | Divide the numbers |

Exactly one operation must be selected.

### 3. Random Number Generator

Generate a random whole number within a specified range (inclusive).

```bash
npm-toolbox random 1 100
```

### 4. Date and Time

Display the current date and time.

```bash
npm-toolbox date
```

### 5. Programming Joke

Fetch a random programming joke using the JokeAPI.

```bash
npm-toolbox joke
```

An active internet connection is required for this command.

## Additional Options

Commander.js also provides built-in help and version options.

```bash
npm-toolbox --help
npm-toolbox --version
npm-toolbox calc --help
```

## Technologies Used

- **Node.js** – JavaScript runtime.
- **Commander.js** – Command-line argument and option handling.
- **JavaScript Fetch API** – Making HTTP requests to an external API.

## Project Links

- **npm Package:** https://www.npmjs.com/package/@v1sh999/npm-submission-project-m3
- **GitHub Repository:** https://github.com/v1sh999/npm-submission-project

## Purpose

This project demonstrates the process of creating, configuring, publishing, and using an npm package. It also explores command-line application development using Commander.js and fundamental JavaScript concepts.