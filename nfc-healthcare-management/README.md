# NFC-Based Healthcare Management System

## Overview
The NFC-Based Healthcare Management System is a web application designed to leverage NFC technology for managing electronic health records. The application serves two primary use cases: emergency healthcare data retrieval and hospital management system integration.

## Features
- **Emergency Healthcare Use Case**: Users can scan an NFC tag to retrieve critical health information, including:
  - Name
  - Emergency Contact
  - Allergies
  - Past Medications
  - Past Surgeries

- **Hospital Management System Integration**: Healthcare staff can:
  - Register new patients
  - Update existing patient records
  - Retrieve patient data through a secure dashboard

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript (with optional libraries like Bootstrap)
- **Backend**: Node.js (using Express.js for API endpoints)
- **Database**: Firebase Realtime Database or Firestore
- **Hosting**: Firebase Hosting for both frontend and backend

## Project Structure
```
nfc-healthcare-management
├── public
│   ├── index.html
│   ├── registration.html
│   ├── emergency.html
│   ├── dashboard.html
│   ├── css
│   │   └── styles.css
│   └── js
│       └── main.js
├── src
│   ├── app.js
│   ├── controllers
│   │   ├── patientController.js
│   └── routes
│       ├── patientRoutes.js
├── package.json
├── firebase.json
├── .firebaserc
├── .gitignore
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd nfc-healthcare-management
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up Firebase:
   - Create a Firebase project and configure the database.
   - Update the Firebase configuration in your project files.

5. Start the application:
   ```
   npm start
   ```

## Usage
- Access the application through the web browser at `http://localhost:3000`.
- Use the registration form to add new patients.
- Utilize the emergency data retrieval feature by scanning NFC tags or entering patient IDs.
- Hospital staff can log in to the dashboard to manage patient records.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.