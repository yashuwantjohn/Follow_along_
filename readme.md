Ecommerce-Follow-Along Project Overview

## Project Description
Ecommerce-Follow-Along is a comprehensive project designed to guide developers through the process of building an e-commerce application from scratch. This project will cover various aspects of web development, including front-end design, back-end integration, and database management, providing a hands-on learning experience.

## Milestone 1: Project Overview

In this session, we focused on the foundational elements of the Ecommerce-Follow-Along project. Key topics covered included:

### 1. *Project Setup*
   - We initialized the GitHub repository and set up the basic structure for our application.

### 2. *Technology Stack*
   - An overview of the technologies that will be utilized throughout the project:
     - *Node.js*: JavaScript runtime for the back-end.
     - *Express.js*: Web framework for building the back-end API.
     - *MongoDB*: NoSQL database to store application data.
     - *React (MUI)*: Front-end framework using React with Material-UI for UI components.

### 3. *Version Control*
   - Introduction to *Git* and *GitHub* for version control.
   - Emphasized best practices for committing code and managing branches.

### 4. *Development Environment*
   - Configuration of local development environments to ensure consistency across team members.

---

## Milestone 2: Front-End Development - Login Page

In this milestone, we focused on building the front-end login page using React and Tailwind CSS. Key activities included:

### 1. *Login Page Creation*
   - We designed and implemented a user login page.
   - Integrated *React* for front-end logic and *Tailwind CSS* for styling.

### 2. *Understanding Tailwind CSS*
   - Learned about the utility-first approach of *Tailwind CSS* and how it differs from traditional CSS.
   - Practiced using Tailwind's utility classes to style elements efficiently.

### 3. *Connecting to App*
   - Linked the login page to the main App.jsx file by creating a LoginPage.jsx component in the pages folder.

---

## Milestone 3: Back-End Setup - Node.js & MongoDB

In this milestone, we focused on setting up the back-end of the application. Key activities included:

### 1. *Folder Structure & Organization*
   - Organized the back-end code into dedicated folders for models, controllers, routes, and middleware to ensure scalability.

### 2. *Node.js Server Setup*
   - Initialized a *Node.js* server and created a server.js file to handle API requests.

### 3. *MongoDB Integration*
   - Connected the application to *MongoDB*, setting up the database for storing data related to products, users, and orders.

### 4. *Error Handling*
   - Implemented basic *error handling* to ensure the application responds appropriately to failed requests and server errors.

---

# Milestone 4: Creating User Model and Controller

In this milestone, we accomplished the following tasks:

## User Model
- Created a *User Model* using MongoDB Schemas to define the structure of user data.
- Designed a blueprint for storing user information, including:
  - name
  - email
  - password

## User Controller
- Created a *User Controller* to handle user-related data, such as:
  - Adding a new user.
  - Retrieving user information.
- Implemented the controller to manage user requests and responses effectively.

## Multer Support
- Enabled *file uploads* using *Multer*, allowing users to upload files like profile pictures.
- Configured Multer to:
  - Store user images in the backend.
  - Keep track of the uploaded files.

## README Update
- Updated the *README* file in the root of the repository to summarize the progress made in this milestone.
- Added a new section titled *"Milestone 4: Creating User Model and Controller"* to document the achievements.

---

## Milestone 5: Creating the Signup Page
In this milestone, we created the frontend UI for users to register by filling out their details. We also ensured that user inputs (like email and password) are properly validated before they're submitted.

### Key Achievements
* Created a simple yet effective sign-up form that is clean and user-friendly.
* Implemented form validation to ensure users input valid data.

### Code Changes
* Implemented HTML and CSS for the Sign-Up Page.
* Added form validation to ensure users input valid data.

### Future Work
* Connect the frontend with the backend.
* Implement user session management.

---

## Milestone 6: Encrypting Passwords and Storing User Data Securely

### Achievements:
In this milestone, I completed the following tasks:
- Implemented password encryption using bcrypt to hash user passwords during signup.
- Stored the hashed password in the database instead of plain text.
- Saved all user data (e.g., name, email, etc.) in the database while ensuring that the password remains encrypted.

### Code Changes:
- Updated the backend API to use bcrypt for password hashing.
- Modified the database schema to store hashed passwords.
- Implemented data validation and sanitization to ensure secure data storage

---

# Login Functionality Progress for Milestone 7

In this milestone, we implemented a backend endpoint for user login, focusing on validating user credentials and verifying the encrypted password stored in the database.

## Key Features

* Validating user credentials during login
* Comparing encrypted passwords using bcrypt
* Protecting user data by storing hashed passwords

## Technologies Used

* Backend endpoint for user login
* Bcrypt for password hashing
* Database for storing user records
## Milestone 8: Frontend Card Component and Homepage Design

## Learning Goals
* Create a card component
* Display cards on products page

## Steps
1. Create card component with props (name, image, price)
2. Design homepage layout with grid or flexbox

# Milestone 9: Product Form Creation
## Overview
In this milestone, we created a frontend form for taking product input details and multiple images.

## Key Features
- Created a form to input product details
- Added functionality to upload multiple images

# Milestone 10: Creating Product Schema and Endpoint
## Overview

This milestone covers creating a Mongoose schema for products and an endpoint to store product details in MongoDB.

## Learning Objectives
- Write a product schema with proper validation
- Create a POST endpoint to receive and validate product data
- Save product details to MongoDB

# Milestone 11 - Dynamic Product Display
## Overview

- Write an Endpoint: Create an API endpoint to fetch all product data from MongoDB.
- Fetch Data in Frontend: Implement a function in the frontend to retrieve this data from the endpoint.
- Display Data Dynamically: Pass the fetched data to the Product Card component to display each product dynamically on the homepage.

# Learning Goals
- Learn how to extract and send data from a backend (MongoDB) to the frontend.
- Understand how to receive and display data dynamically in React components.

# Milestone 12: Displaying User-Specific Products
## Overview

In this milestone, we focused on creating an endpoint to fetch and display products specific to a user based on their email, and rendering that data dynamically on the frontend.

## Key Achievements:
- Endpoint for Product Retrieval: Created an API endpoint to fetch all products associated with a user's email from MongoDB.
- Frontend Integration: Wrote a function to send a request to the backend and receive the user-specific products data.
- Dynamic Data Rendering: Displayed the retrieved products dynamically on the frontend using the product card component.
- Data Filtering: Implemented filtering logic on the backend to ensure that only products tied to the authenticated user's email are sent to the client.

# Milestone 13: Editing User Products

In this milestone, we added functionality for users to edit their uploaded products.

## Key Achievements:
Edit Button: Added an edit button to product cards.
Autofill Form: Pre-filled the form with existing product details for easy editing.
Backend Update: Created an endpoint to update product details in MongoDB.

# Milestone 14: Deleting User Products

In this milestone, we added the functionality to delete products.

## Key Achievements:
- Delete Button: Added a delete button to the product card.
- Backend Endpoint: Created an endpoint to delete products from MongoDB using the product ID.
- Frontend Integration: Enabled the frontend to send the product ID to the backend for deletion when the delete button is clicked.

# Milestone 15: Creating and Integrating a Navbar

In this milestone, we focused on creating and integrating a reusable Navbar component to enhance the navigation experience in our application.

## Key Achievements:
- Navbar Component: Created a Navbar component with links to all pages, including Home, My Products, Add Product, and Cart.
- Responsive Design: Made the Navbar responsive, ensuring it looks good on all screen sizes.
- Frontend Integration: Integrated the Navbar component into all pages to enable smooth and easy navigation between different sections of the app.

# Milestone 16: Creating a Product Info Page

In this milestone, we focused on creating a product info page that displays detailed product data, along with options to select the quantity and add the product to the cart.

##  Key Achievements:
- Product Info Page: Created a new page to display all relevant product details, such as name, description, and price.
- Quantity Selection: Implemented functionality to select the quantity of the product before adding it to the cart.
- Add to Cart Button: Added an "Add to Cart" button that allows users to add selected products to their cart.

# Milestone 17 Overview: Add Products to Cart

In this milestone, you'll implement cart functionality in an e-commerce app. You will update the user schema to store cart items and create an API endpoint to add products to the cart in the database.

## Key Achievements:

- Updated User Schema: Added a cart field to store product details.
- Created API Endpoint: Developed an endpoint to add products to the cart.
- Database Interaction: Enabled saving and retrieving cart data for users.

# Milestone 18 Overview: Backend Endpoint for Cart Page

In Milestone 18, you'll create a backend endpoint to fetch and display all the products in a user's cart. This endpoint will allow the cart page to request and receive the cart data based on the user's email.

## Key Achievements:
- Backend Endpoint for Cart Page: Developed an endpoint to handle requests from the cart page.
- Fetch Cart Products: Created functionality to retrieve all products in the cart for a specific user using their email.

---

# Milestone 19: Cart Page UI with Quantity Adjustments

In this milestone, we focused on building the frontend UI for the cart page and adding functionality to adjust product quantities.

## Key Achievements:
- Cart Page UI: Created a frontend cart page that displays all products with their name, image, price, and quantity.
- Quantity Adjustment: Added buttons to increase and decrease the quantity of each product in the cart.
- Backend Endpoint: Developed an API endpoint to update the quantity of products in the cart.

# Milestone 20: Profile Page UI with User Data Display

In this milestone, we focused on building the frontend UI for the user profile page and writing a backend endpoint to retrieve and display user data.

## Key Achievements:
- Profile Page UI: Designed a frontend profile page that displays the user's profile photo, name, email, and address.
- User Data Display: The profile page includes sections for the user's personal info (photo, name, email) and a separate section for addresses.
- Address Management: Added a button to allow users to add a new address. If no address is found, a "No address found" message is displayed.
- Backend Endpoint: Developed an API endpoint to send user data, including the profile photo, name, email, and address information.

# Milestone 21: Create Address Input Form for User Profile

In this milestone, you will create a form for users to input their address details, including country, city, address1, address2, zip code, and address type. When the "Add Address" button is clicked on the profile page, users will be navigated to this form to add their address.

## Key Achievements:
- Address Input Form: Created a form with necessary fields for address details.
- State Management: Managed form data using state.
- Navigation: Enabled navigation from profile to address form.

# Milestone 22: Storing Address in User Profile

Create a backend endpoint that saves a user's address inside their profile in the database.

## Key Achievements:
- Create Backend Endpoint: Set up an endpoint to receive the address from the frontend.
- Update User Profile: Add the received address to the address array in the user's database profile.
- Handle Responses: Send success or error responses based on the operation's outcome.
- Testing & Validation: Ensure the address is correctly added to the user profile and test using tools like Postman.

# Milestone 23 Overview: Place Order and Address Selection

In Milestone, we will implement the functionality to place an order by selecting a delivery address. This will involve adding a "Place Order" button on the cart page, creating an address selection page, and writing the backend schema to store order details.

## Key Achievements:
- Place Order Button: Add a "Place Order" button inside the cart page that navigates to the address selection page.
- Select Address Page: Create a page that displays all available addresses for the user and allows selecting one for delivery.
- Backend Endpoint: Write an endpoint to fetch and send all the user's addresses from the database.
- Order Schema: Create a Mongoose schema to store order details in the database.

# Milestone 24 Overview: Order Confirmation Page

In Milestone 24, we will create an order confirmation page that displays the products being ordered, the selected delivery address, and the total price details.

## Key Achievements:
Display Ordered Products: Show all the products the user is ordering on the confirmation page.
Display Selected Address: Show the address the user selected for delivery.
Show Total Price: Display the total value of the cart, including any applicable pricing details.
Place Order Button: Add a "Place Order" button at the bottom to finalize the order.

# Milestone 25: Create Order API Endpoint 

We will develop a backend API endpoint to place orders by storing order details in MongoDB.

## Key Achievements
- Create Order Endpoint – Accepts products, user, and address details.
- Retrieve User ID – Fetch _id using the user’s email.
- Separate Orders for Each Product – Each product is stored as a unique order with the same address.
- Save to MongoDB – Store order details in the orders collection.

# Milestone 26: Create Backend Endpoint for User Orders

In this milestone, you'll create a backend endpoint to fetch all orders for a specific user using their email address.

## Key Achievements:
- Create an API Endpoint: Accept the user's email as input.
- Retrieve User ID: Fetch the user's _id from the database using their email.
- Fetch User Orders: Use the _id to get all orders linked to the user.
- Send Response: Return the complete list of the user's orders in the API response.

# Milestone 27: Create Frontend Page for User Orders

In this milestone, you'll create a My Orders page to display all the user's orders by fetching data from the backend.

## Key Achievements:
- Create My Orders Page: Build a new page to show user orders.
- Fetch User Orders: Send a GET request to the /my-orders endpoint with the user's email.
- Display Orders: Render the list of user orders on the page.
- Add to Navbar: Include a My Orders link in the navigation for easy access.

# Milestone 28: Add Cancel Order Feature

In this milestone, you'll enhance the My Orders page by allowing users to cancel their orders and create a backend endpoint to handle the cancellation.

## Key Achievements:
- Add Cancel Button: Display a Cancel Order button for each active order.
- Hide for Canceled Orders: Ensure the button is not shown if the order is already canceled.
- Create Cancel Endpoint: Build a POST endpoint to receive the order-id and update the order status to "canceled".
- Update Order Status: Save the updated order status in the database.

# Milestone 29: Integrate PayPal Payment Gateway

In this milestone, you'll set up a PayPal payment gateway to offer online payment alongside Cash on Delivery (COD) on your order confirmation page.

## Key Achievements:
- Set Up PayPal Account: Create a PayPal Developer account and access sandbox credentials (UserID and Client ID).
- Add Payment Options: Include radio buttons on the order confirmation page to choose between COD and Online Payment.
- Prepare for PayPal Integration: Ensure PayPal buttons are displayed when the Online Payment option is selected.