
# MeetRooms  

**MeetRooms** is an advanced web application designed for seamless real-time video conferencing, live chat functionality, and session tracking. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it leverages WebRTC for peer-to-peer communication, providing high-quality interactive video calls. Key WebRTC components like ICE (Interactive Connectivity Establishment) ensure efficient connection negotiation, while SDP (Session Description Protocol) facilitates signaling between peers. The platform incorporates robust authentication, authorization, and session management to guarantee secure user interactions, making it a reliable and feature-rich solution for modern virtual communication needs.

---

## Key Features  

### WebRTC Integration  
- Peer-to-peer video communication.  
- ICE (Interactive Connectivity Establishment) for connection negotiation.  
- SDP (Session Description Protocol) for signaling between peers.  

### Material-UI Design  
- Modern, responsive UI components for a professional user experience.  

### Token-Based Authentication  
- Secure user session management with JSON Web Tokens (JWT).  

---

## Features  

### Real-Time Communication  
- **Video Conferencing:** High-quality peer-to-peer video calls using WebRTC.  
- **Live Chat:** Integrated instant messaging for seamless collaboration during calls.  
- **Ongoing Session Management:** Tracks and displays active meetings for participants.  

### Secure Authentication and Authorization  
- **Sign-Up:** Requires a username, password, and name for user registration.  
- **Sign-In:** Authenticates users via username and password.  
- **Token-Based Session Management:** Employs secure token storage and management for user sessions.  
- **Sign-Out:** Fully implemented logout functionality.  

### Deployment  
The application is deployed on **Render**, ensuring accessibility and high performance.  

---

## Technology Stack  

| **Category**               | **Technology**                   |  
|-----------------------------|-----------------------------------|  
| **Frontend Framework**      | React.js (Vite), Material-UI (MUI), CSS |  
| **Backend Framework**       | Node.js, Express.js              |  
| **Real-Time Communication** | WebRTC, Socket.IO, Socket.IO.CLIENT |  
| **Authentication**          | JSON Web Tokens (JWT), Bcrypt, Crypto |  
| **Database**                | MongoDB                          |  
| **Deployment**              | Render                           |  

---

## Folder Structure  

```
MeetRooms/  
├── Backend/  
│   ├── node_modules/      # Backend dependencies  
│   ├── src/  
│   │   ├── controllers/   # API logic for handling requests  
│   │   ├── models/        # Database models (e.g., User, Meeting)  
│   │   ├── routes/        # API route handlers  
│   │   └── .env           # Environment variables for secure configuration  
│   ├── app.js             # Main backend server entry point  
│   └── .env               # Backend environment variables  
├── Frontend/  
│   ├── node_modules/      # Frontend dependencies  
│   ├── public/            # Static assets and HTML templates  
│   ├── src/  
│   │   ├── assets/        # Images, fonts, and other static files  
│   │   ├── contexts/      # Context API for state management  
│   │   ├── pages/         # Major application pages  
│   │   ├── styles/        # Global and component-level CSS/SCSS  
│   │   ├── utils/         # Helper functions and utilities  
│   │   ├── App.js         # Main application component  
│   │   ├── App.css        # Application-wide styles  
│   │   ├── index.js       # React application entry point  
│   │   ├── index.css      # Global CSS styles  
│   │   ├── environment.js # Configuration for environment variables  
│   │   ├── setupTests.js  # Jest setup for testing  
│   │   ├── App.test.js    # Unit tests for App component  
│   │   ├── reportWebVitals.js # Performance monitoring setup  
│   └── package.json       # Frontend dependencies and scripts  
├── .gitignore             # Git ignored files  
├── README.md              # Documentation  
```  

---

## Installation and Setup  

### Clone the Repository  
```bash  
git clone https://github.com/your-username/MeetRooms.git  
cd MeetRooms  
```  

### Backend Setup  
1. Navigate to the `Backend` folder:  
   ```bash  
   cd Backend  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Add a `.env` file:  
   ```env  
   DATABASE_URI=<your_mongo_db_uri>  
   JWT_SECRET=<your_jwt_secret>  
   ICE_SERVERS=<your_ice_server_config>  
   ```  
4. Start the backend server:  
   ```bash  
   npm start  
   ```  

### Frontend Setup  
1. Navigate to the `Frontend` folder:  
   ```bash  
   cd ../Frontend  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Start the frontend server:  
   ```bash  
   npm run dev  
   ```  

### Run the Application  
- The frontend will be available at `http://localhost:3000`.  
- The backend will run at `http://localhost:8080`.  

---

## API Endpoints  

### Authentication  
| Method | Endpoint          | Description                      | Access           |  
|--------|--------------------|----------------------------------|------------------|  
| POST   | `/api/auth/signup` | Register a new user              | Public           |  
| POST   | `/api/auth/login`  | Login to an existing account     | Public           |  

### Meetings  
| Method | Endpoint          | Description                      | Access           |  
|--------|--------------------|----------------------------------|------------------|  
| GET    | `/api/meetings`    | Retrieve all ongoing meetings    | Authenticated    |  
| POST   | `/api/meetings`    | Create a new meeting             | Authenticated    |  

---

## Deployment  

The project is deployed on Render and accessible at:  
[MeetRooms Deployment Link](https://frontendmeetrooms.onrender.com)  

---

## Future Enhancements  

1. **Screen Sharing:** Enable users to share their screen during meetings.  
2. **Recording:** Provide functionality to record video meetings.  
3. **Push Notifications:** Notify users about upcoming or ongoing meetings.  
4. **Mobile Responsiveness:** Optimize UI for mobile devices.  

---

## Contributing  

Contributions are welcome! Follow these steps:  
1. Fork the repository.  
2. Create a new branch:  
   ```bash  
   git checkout -b feature-branch  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m "Add feature"  
   ```  
4. Push the branch:  
   ```bash  
   git push origin feature-branch  
   ```  
5. Open a Pull Request.  

---

## License  

This project is licensed under the **MIT License**. See the LICENSE file for more details.  

## Author (Built by):
Vidhi Jindal

Thank you for taking the time to explore and review the MeetRooms project! I hope you find it engaging and insightful. Your interest and feedback are greatly appreciated. Feel free to contribute or reach out with any questions or suggestions. I’m excited to continue improving and evolving this project with the support of the developer community.

Happy coding!
