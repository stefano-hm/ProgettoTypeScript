# React + TypeScript + Vite

#  EcoQuiz

**EcoQuiz** is an interactive web application that raises awareness about environmental issues through a fun and engaging quiz. Users answer multiple-choice questions, receive a score at the end, and can share their results on social media.

## Features

- Start screen with quiz introduction and call-to-action
- Multiple-choice questions 
- Final score display and eco-level achieved
- Social sharing via Web Share API or fallback links
- Progress bar that advances with each answer
- Responsive design for all devices
- Clean and modern UI

## Prerequisities

To run the project locally, make sure you have installed:

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) (automatically installed with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/stefano-hm/ProgettoTypeScript.git
   cd meditation-app

2. Install dependencies:

   ```bash
   npm install

3. Start the development server:

   ```bash
   npm run dev

The application will be available at http://localhost:5173.

## Project Structure

The project is structured as follows:

```bash
   meditation-app/
├── index.html
├── package.json
├── public/
│   ├── favicon/
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon.ico
│   │   └── site.webmanifest
│   ├── images/
│   │   └── logo.PNG
│   └── sounds/
│       ├── forest.mp3
│       ├── nature.mp3
│       ├── ocean.mp3
│       └── rain.mp3
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── BackgroundAudio.jsx
│   │   ├── BackgroundImage.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── MeditatioQuotes.jsx
│   │   └── Timer.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Guide.jsx
│   │   └── Home.jsx
│   ├── store/
│   │   ├── index.js
│   │   └── slices/
│   │       └── timerSlice.js
│   └── styles/
│       ├── about-media.css
│       ├── About.css
│       ├── BackgroundImage.css
│       ├── Footer.css
│       ├── global.css
│       ├── guide-media.css
│       ├── Guide.css
│       ├── Header.css
│       ├── home-media.css
│       ├── Logo.css
│       ├── MeditationQuotes.css
│       └── Timer.css

   ```

## Preview

Check out the deployed version: https://eco-quiz.netlify.app

## Contributing

If you’d like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch: ```git checkout -b branch-name.```
3. Make your changes and commit: ```git commit -am 'Add a description of your changes'.```
4. Push to your branch: ```git push origin branch-name.```
5. Create a pull request.

## What's in the README?

**Project description**: A brief overview of what the app does.

**Features**: All the features of the project. 

**Prerequisites**: Tools needed to run the project locally.

**Installation**: Steps to set up the development environment and run the app.

**Project structure**: An overview of the main folders and files.

**Preview**: The link to the deployed version.

**Contributing**: How to contribute to the project.

