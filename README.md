# Lab DiagnosticsApp System 

## Overview

It allows users to create transactions, filter transaction records, and download reports in Excel format. The system provides a user-friendly interface with authentication, navigation, and a structured dashboard.


## Technologies Used

### Frontend

- React.js

- Tailwind CSS

### Backend

- Node.js

- Express.js

- MongoDB (for database management)

### Other Tools & Libraries

- Axios (for API calls)

- XLSX (for exporting Excel files)



## Features  

- User Authentication (Login Page)

- Dashboard with Profile Section

- Common Navigation Bar and Sidebar

- Create Transaction Page

- List Transactions with Filtering

- Export Transactions as an Excel File

- Custom Date Filtering for Transactions



## Project Setup 

## Installation  

1. Clone the repository using :  
```  
git clone https://github.com/Sneha-p1/Lab-DiagnosticsApp.git
cd Lab DiagnosticsApp
cd LabApp
```  
2. Install Dependencies

### Frontend
```
cd ui
npm install
```

### Backend
```
cd backend
npm install
```
3. Setup MongoDB

Make sure you have MongoDB installed and running.

``` 
sudo systemctl start mongod
```


4. Run the Application

### Start the Backend
```
cd backend
node server.js
```

### Start the Frontend
```
cd ui
npm run dev
```
The application will be accessible at http://localhost:3000/.

## Project Structure & Pages

1. Login Page

- The first page that appears when the user opens the application.

- Users can enter with username and password.

- On successful login, the user is redirected to the Home Page.

- The logged-in username is displayed in the Profile Section of the Home Page.

2. Home Page

- Displays the Profile Section with the logged-in user's name.

- Contains the Navigation Bar and Sidebar Menu.

- Users can navigate to different pages using the Sidebar Menu.

3. Create Transaction Page

- Allows users to create a new transaction.

- Fields include: Receipt Number, Patient Name, Client Name, Visit Date, Visit ID, Gross Amount, Discount, Net Amount, Paid Amount, Due Amount, Mode of Payment (Dropdown selection)

- After submission, the transaction is stored in MongoDB.

4. List Transaction Page

- Displays all transaction records.

- Provides filtering options: This Week, This Month, Custom Date Range

- Includes an Export to Excel feature to download transaction details.

5. Filter Transactions Section

- Users can filter transactions using a From Date and To Date.

- Displays details of transactions within the selected date range.



## API Endpoints


- POST /api/transactions/create - Create a new transaction

- GET /api/transactions/fetch - Retrieve all transactions

- GET /api/transactions/filter - Retrieve transactions based on filters 


## Future Enhancements

- Implement Role-Based Access Control (RBAC)

- Add Pagination to Transactions List

- Integrate Email Notifications for Transaction Confirmation

 

## Contact

For any queries or suggestions, feel free to reach out:

Email: snehaparambadan@example.com

GitHub: Sneha-p1

