
# Supermarket React App

This is a simple React application for managing a supermarket cart. It allows users to view products, add them to the cart, and update the quantities of items in the cart. The total price is automatically calculated based on the cart contents.

## Features

- **View Products**: Displays a list of products with descriptions and prices.
- **Add to Cart**: Add products to the cart with a quantity of 1.
- **Update Cart**: Increase or decrease the quantity of items in the cart.
- **Total Price**: Automatically updates the total price based on the cart's contents.

## Technologies Used

- React
- JavaScript
- HTML & CSS (included in the default React setup)

## How to Run

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed on your machine.

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/itamarrot1/react-simple-cart.git
   cd supermarket-react-app
   ```

2. **Install Dependencies**:

   Run the following command to install all the required dependencies:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   Start the React development server with:

   ```bash
   npm start
   ```

## Usage

- **Add Products**: Click the "Add to cart" button next to each product to add it to the cart.
- **Update Quantities**: Use the "+" and "-" buttons next to each cart item to adjust the quantity.
- **View Total**: The total price will be updated automatically based on the cart's contents.

## Code Overview

- **App Component**: Manages the state for products, cart, and total price. Provides functionality for adding items to the cart and updating their quantities.
- **useEffect Hook**: Calculates the total price whenever the cart changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
