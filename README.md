# 🧮 Math Master Game Suite 🎮

Welcome to **Math Master**, a collection of fast-paced math games designed to challenge and sharpen your arithmetic skills! This project combines a dynamic **frontend** built with React and a robust **backend** using Express and MongoDB for storing player scores.

## 📋 Game Modes

Choose from a variety of exciting math challenges:

1. **Marathon** 🏃

   - Answer 20 math exercises as quickly as possible. Test your speed and accuracy!

2. **Free Mode** 🔓

   - No time limits, no restrictions — just focus on solving problems and accumulating a high score.

3. **Time is of the Essence** ⏰

   - You have **60 seconds** to solve as many problems as possible. The clock is ticking!

4. **Survival Mode** 🛡️

   - Start with **10 seconds** on the clock. For every correct answer, earn an extra **2 seconds**. How long can you last?

5. **Multiplication Challenge** ✖️

   - Only multiplication problems. Perfect for practicing your times tables!

6. **Math Blitz** ⚡
   - Every **5 seconds**, a new expression appears. After **10 rounds**, input the final answer to win!

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion (for smooth animations)
- **Backend**: Express, MongoDB (using Mongoose)
- **Deployment**: Vercel (Frontend) & Render (Backend)

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/payton-ggg/numfight.git
   cd math-master
   ```

2. **Install frontend dependencies**:

   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**:
   ```bash
   cd ../backend
   npm install
   ```

### Setting Up Environment Variables

Create a `.env` file in the `/backend` directory and configure the following:

```
MONGODB_URI=mongodb://localhost:27017/leaderboard
PORT=5000
```

### Running the Project

1. **Start the backend server**:

   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server**:

   ```bash
   cd ../frontend
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 🎮 Gameplay Instructions

### Math Blitz Example

- The game starts with the number `0`.
- Every **5 seconds**, a new expression appears (e.g., `+7`, `-3`).
- After **10 expressions**, input the final result in the answer box to win!

### Leaderboard System 🏆

The game includes a leaderboard that stores the top scores for each game mode:

- **Data is stored in MongoDB**.
- **Top 10 players** are displayed on the leaderboard.
- Players can save their scores with a username after finishing a game.

### API Endpoints

- **GET /api/leaderboard**: Fetch the top 10 scores.
- **POST /api/leaderboard**: Save a new score.

## ✨ Features

- Smooth animations using Framer Motion for a polished gaming experience.
- Multiple game modes to suit different skill levels.
- Responsive design for mobile and desktop users.

## 🤔 Future Enhancements

- Online multiplayer mode 🌐.
- Power-ups and bonuses to spice up the gameplay 💥.
- Detailed analytics to track player progress 📊.

## 🛠️ Contributing

Feel free to fork this project, open issues, and submit pull requests. Contributions are always welcome!
