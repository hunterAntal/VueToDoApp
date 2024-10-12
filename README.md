# VueToDoApp
VueToDoApp is my first Vue.js webapp. 
# Vue ToDo Project README

## Overview
This project is a simple Vue.js-based ToDo application that includes user authentication and task management features. It allows users to sign up, log in, and manage projects with different roles (Team Member, Project Lead, Admin). The project consists of a front-end user interface built using Vue.js and a back-end server implemented with Node.js and Express.

## Directory Structure
```
vuejs-auth-backend/
├── public/                # Contains front-end files (HTML, CSS, JS)
│   ├── dashboard.html     # Project dashboard page
│   ├── index.html         # Login page
│   ├── ProjectTaskList.html # Page to manage tasks for specific projects
│   └── signup.html        # Sign-up page for new users
├── node_modules/          # Dependencies installed by npm
├── package-lock.json      # Locks the exact versions of package dependencies
├── package.json           # Metadata for the project and dependencies
├── server.js              # Node.js server script to handle backend logic
├── users.json             # File storing user data for persistence
└── README.txt             # Project documentation (this file)
```

## Requirements
- **Node.js**: Make sure Node.js is installed on your system.
- **npm**: Used to manage dependencies.

## Installation and Setup
1. Clone this repository to your local machine.
   ```
   git clone <repository-url>
   cd vuejs-auth-backend
   ```

2. Install all the dependencies by running:
   ```
   npm install
   ```

3. Start the server by executing:
   ```
   node server.js
   ```
   The server will start on `http://localhost:3000`.

## Usage
1. **Sign Up**: Visit `http://localhost:3000/signup.html` to register a new user.
2. **Login**: After signing up, go to `http://localhost:3000/index.html` to log in.
3. **Dashboard**: On successful login, you will be redirected to the dashboard (`dashboard.html`), where you can view and select projects.
4. **Manage Tasks**: Once you select a project, you will be redirected to `ProjectTaskList.html`, where you can add, edit, and delete tasks for the specific project.

## File Descriptions
- **server.js**: Handles the backend logic, including login and sign-up requests, and serves static files.
- **users.json**: Stores user data, including usernames, passwords, roles, etc., ensuring persistence across server restarts.
- **public/**: Contains all the front-end files for the user interface, including pages for login, signup, dashboard, and task management.

## Accessing the Application on Mobile
1. Ensure your computer and mobile device are connected to the same Wi-Fi network.
2. Find your computer's local IP address using `ifconfig` (Linux/macOS) or `ipconfig` (Windows).
3. Access the application on your mobile device by entering `http://<your-local-ip>:3000` in your mobile browser.

## Troubleshooting
- **Cannot Access from Mobile**: Ensure that your firewall is not blocking port `3000`.
- **404 Error for Pages**: Check that all the HTML files are located in the `public` directory and that `server.js` is configured correctly to serve static files.

## Features
- **User Authentication**: Allows users to sign up and log in securely.
- **Role-based Access**: Users can be assigned roles such as Team Member, Project Lead, or Admin.
- **Task Management**: Users can add, edit, and delete tasks within a project.
- **Persistent User Data**: User information is stored in `users.json` to ensure data persists across server restarts.

## Technologies Used
- **Vue.js**: For building the front-end user interface.
- **Node.js and Express**: For backend services, including user authentication and serving HTML files.
- **JavaScript**: Used for both front-end interactivity and back-end server logic.

## Future Improvements
- **Database Integration**: Use a more secure database instead of `users.json` for better scalability and data management.
- **Enhanced Security**: Implement password hashing and more advanced user authentication.
- **Responsive Design**: Improve the styling and layout to make the app more mobile-friendly.

## License
This project is for educational purposes only and is not licensed for commercial use.

Feel free to explore, modify, and enhance the project!

## Contact
For further questions, please reach out to the project maintainer.

