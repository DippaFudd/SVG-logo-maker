# SVG Logo Maker

This is a command-line application that allows freelance web developers to generate simple logos for their projects without hiring a graphic designer. The application uses Node.js, Inquirer for user prompts, and Jest for unit testing. It allows users to input text, choose a shape (circle, triangle, or square), and select colors for both the text and the shape. The generated logo is saved as an SVG file and can be viewed in a browser.

## User Story

AS a freelance web developer  
I WANT to generate a simple logo for my projects  
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

### GIVEN a command-line application that accepts user input:
- **WHEN** I am prompted for text:
  - **THEN** I can enter up to three characters.
  
- **WHEN** I am prompted for the text color:
  - **THEN** I can enter a color keyword (OR a hexadecimal number).
  
- **WHEN** I am prompted for a shape:
  - **THEN** I am presented with a list of shapes to choose from: circle, triangle, and square.
  
- **WHEN** I am prompted for the shape's color:
  - **THEN** I can enter a color keyword (OR a hexadecimal number).
  
- **WHEN** I have entered input for all the prompts:
  - **THEN** an SVG file is created named `logo.svg`.
  - **AND** the output text "Generated logo.svg" is printed in the command line.
  
- **WHEN** I open the `logo.svg` file in a browser:
  - **THEN** I am shown a 300x200 pixel image that matches the criteria I entered.

## Features

- **Text Input:** Allows the user to input up to 3 characters for the logo text.
- **Color Options:** Users can select a color for both the text and the shape, using either a color keyword or a hexadecimal code.
- **Shape Selection:** Users can choose between three shapes: Circle, Triangle, or Square.
- **SVG File Generation:** The application generates an SVG file named `logo.svg` containing the chosen text and shape with the specified colors.
- **Viewable in Browser:** The generated SVG file can be opened in any browser to view the logo.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) installed.
- A terminal or command prompt to run the application.

## Installation
To install the necessary dependencies, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine using the following command:
    git clone (cloned repo)
   
2. **Navigate to the Project Directory**: Change your current directory to the project directory:
    cd SVG-logo-maker
    
3. **Install Dependencies**: Install the required dependencies using npm:
    npm i
   
5. **Test**: Npm run test   
    
6. **Run the Application**: Start the application by running the following command:
    node index.js

### Usage

Once you run the application, you will be prompted for the following inputs:

1. **Text for the Logo:** Enter up to 3 characters for the logo text.
2. **Text Color:** Provide a color keyword (e.g., "red") or a hexadecimal color code (e.g., "#ff0000").
3. **Shape:** Choose a shape from the following options:
    - Circle
    - Triangle
    - Square
4. **Shape Color:** Provide a color keyword or hexadecimal code for the shape's color.

After entering all the prompts, the application will generate an SVG file named `logo.svg` in the project directory.


## Example Output

An example of the SVG logo generated with the following inputs:

- **Text:** SVG
- **Text Color:** White
- **Shape:** Circle
- **Shape Color:** Green

Would result in a green circle with white "SVG" text inside.

## Screenshot and Screen Recording
![Image Alt](https://github.com/DippaFudd/SVG-logo-maker/blob/962429cc895870a53b5eec32418c9836be755e59/2025-03-17%20(2).png)

Video link :
https://app.screencastify.com/v3/watch/QXe2hjsKKd3j6N5rVNRc



