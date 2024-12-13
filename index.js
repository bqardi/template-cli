#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const templates = {
  vanilla: {
    canuse: ["tailwind"],
  },
  react: {
    canuse: ["tailwind"],
  },
};

async function createProject() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "Which project template would you like to generate?",
      choices: Object.keys(templates),
    },
    {
      type: "confirm",
      name: "tailwind",
      message: "Use Tailwind?",
      default: false,
      when: (answers) =>
        templates[answers.template].canuse.includes("tailwind"),
    },
    {
      type: "input",
      name: "projectName",
      message: "Enter the name of your project:",
      default: "my-project",
    },
  ]);

  const template = answers.tailwind
    ? `${answers.template}-tailwind`
    : answers.template;

  const templatePath = path.join(__dirname, "templates", template);
  const destinationPath = path.join(process.cwd(), answers.projectName);

  try {
    await fs.copy(templatePath, destinationPath);
    console.log(
      chalk.green(
        `\nProject ${answers.projectName} created successfully using the ${answers.template} template!`
      )
    );
  } catch (error) {
    console.error(chalk.red(`\nError: ${error.message}`));
  }
}

createProject();
