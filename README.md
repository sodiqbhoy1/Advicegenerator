# Advice Generator App

This is a simple Advice Generator web application built using React. The app fetches random advice from the [Advice Slip API](https://api.adviceslip.com/advice) and displays it in a user-friendly interface. Users can click the dice icon to generate new advice. The app features a sleek design with hover effects and smooth interactions.

## Features

- Displays a random piece of advice fetched from the API.
- Users can click on the dice icon to get new advice.
- Stylish interface with smooth hover effects on the dice.
- Responsive design that works on various screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Advice Slip API**: A public API to get random advice.

## Getting Started

Follow the instructions below to set up and run this project locally.

### Prerequisites

- Make sure you have **Node.js** installed. If not, download it from [nodejs.org](https://nodejs.org/).
- Ensure that **npm** (Node Package Manager) is installed, which comes with Node.js.

### Clone the Repository

1. Clone this repository to your local machine using Git:

   
   ```bash
   git clone https://github.com/sodiqbhoy1/Advicegenerator.git

2. Navigate to the project directory:
	cd Advicegenerator

3. Install the required dependencies by running the following command:
	npm install

4. After the installation is complete, start the development server:
	npm run dev
This will start the React app and open it in your default web browser. The app will be available at http://localhost:5173

## How to Use
- Upon loading the app, a random piece of advice will be displayed with its ID.
- Click the dice icon to fetch a new piece of advice.
- The dice has a hover effect, and when clicked, it triggers a new request to fetch a random piece of advice.

## Styling
- This project uses Tailwind CSS for styling. Tailwind is a utility-first CSS framework that allows for rapid styling by adding predefined classes directly in the JSX.

## Custom Styling Features
- The dice icon glows on hover and slightly enlarges with a pulsing effect.
- The advice is displayed inside a responsive card with smooth transitions and a divider image between the advice and the dice icon.
- The layout adjusts to various screen sizes, ensuring a good user experience on both desktop and mobile.

## Contributing
- Contributions are welcome! If you would like to improve the app, please fork the repository and submit a pull request.

## Steps to Contribute:
-Fork the repository.
-Create a new branch.
-Make your changes and commit them.
-Push to your forked repository.
-Create a pull request to the main repository.

## License
-This project is open source and available under the MIT License.

## Acknowledgements
-Advice Slip API for providing random advice.
-React for building the user interface.
-Tailwind CSS for easy and flexible styling.
-Feel free to reach out if you have any questions or suggestions!