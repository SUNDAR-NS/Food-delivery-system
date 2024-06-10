# Online Food Delivery System

## Abstract

Our proposed system is an online food delivery system that simplifies the process for customers to order food. It addresses the drawbacks of traditional queueing systems by providing a hassle-free medium for ordering food from restaurants and mess services. This system enhances the method of taking orders from customers, setting up an online food menu, and allowing customers to easily place and track orders. Additionally, it includes a feedback system where users can rate food items, and the system can recommend hotels and food based on user ratings. Hotel staff are informed about necessary improvements to maintain quality. Payments can be made online or through a pay-on-delivery system. For secure ordering, each user maintains a separate account with an ID and password.

## Features

### Customer
- **Browse Restaurants and Food Items**: Customers can select a restaurant and view its menu.
- **Place Orders**: Add desired food items to the cart and place orders.
- **Track Orders**: Monitor the status of placed orders.
- **Rate and Review**: Provide feedback and rate food items.
- **Recommendations**: Receive food and hotel recommendations based on ratings.
- **Secure Accounts**: Each customer has a secure account with an ID and password.
- **Payment Options**: Choose between online payment or pay-on-delivery.

## Tech Stack

- **Frontend**: Angular
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB

### Steps to Run the Project

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/online-food-delivery-system.git
    ```

2. **Install Backend Dependencies**
    ```bash
    cd online-food-delivery-system/backend
    npm install
    ```

3. **Install Frontend Dependencies**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Run MongoDB**
    Ensure MongoDB is running on your system.

5. **Start the Backend Server**
    ```bash
    cd ../backend
    npm start
    ```

6. **Start the Frontend Server**
    ```bash
    cd ../frontend
    ng serve
    ```

Open [http://localhost:4200](http://localhost:4200) to view the application in your browser.

## Project Structure

### Backend
- **Server**: Contains server setup and configuration.
- **Routes**: Defines API endpoints for user authentication, restaurant management, order processing, etc.
- **Models**: Defines MongoDB schemas and models for users, restaurants, orders, etc.
- **Controllers**: Contains logic for handling requests and responses.

### Frontend
- **Components**: Contains Angular components for different views like home, restaurant, cart, orders, etc.
- **Services**: Defines services for making HTTP requests to the backend.
- **Routes**: Configures client-side routing for navigation between views.
- **Styles**: Contains stylesheets for the application.

## Available Scripts

### `npm start` (Backend)
Runs the backend server in development mode.

### `ng serve` (Frontend)
Runs the frontend server in development mode.

## Screenshots

### Home Page
![Home Page](https://github.com/your-username/online-food-delivery-system/screenshots/home-page.png)

### Restaurant Selection
![Restaurant Selection](https://github.com/your-username/online-food-delivery-system/screenshots/restaurant-selection.png)

### Food Menu
![Food Menu](https://github.com/your-username/online-food-delivery-system/screenshots/food-menu.png)

### Cart
![Cart](https://github.com/your-username/online-food-delivery-system/screenshots/cart.png)

### Order Tracking
![Order Tracking](https://github.com/your-username/online-food-delivery-system/screenshots/order-tracking.png)

### Login Page
![Login Page](https://github.com/your-username/online-food-delivery-system/screenshots/login-page.png)

### Register Page
![Register Page](https://github.com/your-username/online-food-delivery-system/screenshots/register-page.png)

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For any issues or questions, please contact the project maintainer at [your-email@example.com].
