const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./shapes');

const promptUser = async () => {
  const prompt = inquirer.createPromptModule();  // Create a prompt instance

  const answers = await prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo text:',
      validate: (input) => input.length <= 3 || 'Text must be 3 characters or less.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color for the text (color name or hex code):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color for the shape (color name or hex code):'
    }
  ]);

  let shape;
  if (answers.shape === 'circle') {
    shape = new Circle();
  } else if (answers.shape === 'square') {
    shape = new Square();
  } else if (answers.shape === 'triangle') {
    shape = new Triangle();
  }

  shape.setColor(answers.shapeColor);

  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>`;

  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
};

module.exports = { promptUser };
