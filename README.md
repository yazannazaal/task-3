# E-commerce Platform (Task 3 - PalSoft Training)

This project is part of my training at PalSoft Company and represents an e-commerce platform with essential features for product browsing, searching, and cart management. 

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Overview
This e-commerce website allows users to browse products, search by title or category, view detailed product information, filter products by category, and manage a shopping cart. Users can easily explore product categories and view all products belonging to a specific category.

## Features
- **Home Page**: Contains a header, banner, swiper for featured products, and a footer.
- **Products Page**: Displays all products fetched from an API, with a search functionality for filtering products by title or category.
- **Single Product Page**: Provides detailed information about a selected product.
- **Category Pages**: Allows users to view products within specific categories. Each category page dynamically displays products based on the selected category.
- **Cart Management**: Users can add products to the cart, view, update, or remove items, and see the total price of all items in the cart.

## Technologies Used
- **React**: Core framework for building the user interface.
- **Axios**: For making API requests to fetch product data.
- **React Router**: Handles routing between pages (Home, Products, Product Details).
- **Context API**: Manages global state across components (e.g., cart state).
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Swiper**: Library for the featured products carousel on the homepage.

# Installation Guide

## Prerequisites

- **Node.js:** Version `v20.10.0`  
  Ensure you have Node.js version `v20.10.0` installed to avoid compatibility issues. You can use [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage and switch between different Node.js versions:

  ```bash
  nvm install 20.10.0
  nvm use 20.10.0

  ```

## Installation and Setup

**Note**: This repository was built from scratch and does not contain any cloned code from previous projects.


### Step 1: Clone the Repository

Clone the repository using the following command:
```bash
git clone https://github.com/yazannazaal/task-3.git
```
 **Step 2: Navigate to the project directory:**

   ```bash
   cd task-3
   ```
 **Step 3: Install dependencies:**

   ```bash
   npm install
   ```

 **Step 4: Run the development server:**

   ```bash
   npm run dev
   ```
