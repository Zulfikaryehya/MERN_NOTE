# MERN Notes App

A modern, responsive notes application built with the MERN stack (MongoDB, Express, React, Node.js). This application allows users to create, read, update, and delete notes with a clean and intuitive interface.

![MERN Notes App](https://github.com/Zulfikaryehya/MERN_NOTE/raw/main/screenshot.png)

## Features

- 📝 Create, view, edit, and delete notes
- 🎨 Modern UI with DaisyUI and Tailwind CSS
- ⚡ Fast performance with React and Vite
- 🔒 Rate limiting protection against abuse
- 📱 Fully responsive design for all devices
- 🌐 Full-stack JavaScript application

## Tech Stack

### Frontend
- React
- Vite (for fast development and building)
- Tailwind CSS with DaisyUI
- React Router for navigation
- Axios for API requests
- React Hot Toast for notifications

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Rate limiting middleware
- RESTful API architecture

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB connection (local or Atlas)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Zulfikaryehya/MERN_NOTE.git
cd MERN_NOTE
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
npm install --prefix backend

# Install frontend dependencies
npm install --prefix frontend
```

3. Create a `.env` file in the backend directory with the following variables:
```
PORT=5001
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

4. Start the development servers:
```bash
# Run backend server
npm run start --prefix backend

# In a separate terminal, run frontend development server
npm run dev --prefix frontend
```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This command will:
1. Install dependencies for both frontend and backend
2. Build the frontend application
3. Prepare the application for deployment

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/notes | Get all notes |
| GET    | /api/notes/:id | Get a specific note |
| POST   | /api/notes | Create a new note |
| PUT    | /api/notes/:id | Update a note |
| DELETE | /api/notes/:id | Delete a note |

## Deployment

This application is set up for easy deployment on platforms like Render, Vercel, or Heroku.

For Render deployments:
- Build Command: `npm run build`
- Start Command: `npm run start`

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

[Zulfikar Yehya](https://github.com/Zulfikaryehya)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
