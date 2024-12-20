## **Backend-Assignment-2**

## **Objective**
- Set up user authentication with JWT.
- Create user registration and login endpoints.
- Protect routes with authentication middleware.

## **Instructions**
## **Part 1: Set Up User Authentication**
- [x] Install Additional Dependencies:
- [x] Create the User Model

## **Part 2: Implement Registration and Login Endpoints**
- [x] Set Up the Routes
- [x] Create Authentication Middleware
- [x] Integrate the Routes with the Server

## **Part 3: Test the API**
- Start Your Server (npm run dev)
- Test with Thunder Client or Postman:
- [x] Register a User: Method: POST

![Alt text](imgs/auth-register.png)

![Alt text](imgs/mongo.jpg)

- [x] Login a User & Copy the token from the response

![Alt text](imgs/auth-login.jpg)

- [x] Access Protected Product Routes: Method: GET
- [x] Screenshot the GET request and response.

![Alt text](imgs/products-token.jpg)

![Alt text](imgs/3000-products.png)

## **Backend-Assignment-3 / Weds Dec 18**

## **Objective**

- Add more endpoints to the API
- Implement CRUD operations for users
- Refine product endpoints
- Handle errors and edge cases

- [x] Step 1: Add More Endpoints to the API
- [x] Step 2: Refine Product Endpoints
- [x] Step 3: Handle Errors and Edge Cases

- Create Error Handling Middleware
- Integrate Error Handling Middleware with the Server

- [x] Step 4: Test the API

## **Test with Thunder Client or Postman**
- [x] Get All Users (Admin Only) - Method: GET

![Alt text](imgs/get-all-users.png)

- [x] Get a Single User by ID - Method: GET

![Alt text](imgs/get-by-id.png)

- [x] Update a User by ID: - Method: PUT

![Alt text](imgs/put-by-id.png)

- [x] Delete a User by ID (Admin Only): Method: DELETE

![Alt text](imgs/delete-user.png)

## **POST, GET, PUT, & DELETE Products on Postman**

- [x] Post New Product with "Added Successfully Message": Method: POST

![Alt text](imgs/post-product.png)

- [x] Get All Products or Filter by Category: Method: GET

![Alt text](imgs/get-all-products.png)

- [x] Get a Single Product by ID: Method: GET & update product price Method: PUT

![Alt text](imgs/put-product.png)

- [x] Delete a Product by ID: Method: DELETE

![Alt text](imgs/delete-product.png)

## **Backend - Assignment 4 - HANDLE UPLOADS**

## **Objective**
- Implement pagination for product listings
- Add sorting and filtering capabilities
- Handle file uploads for product images

- [x] Step 1: Implement Pagination for Product Listings
- [x] Step 2: Handle File Uploads for Product Images
- Install Multer for File Uploads
- Set Up Multer Middleware
- Update Product Routes to Handle File Uploads
- [x] Step 3: Integrate File Upload Server: Add upload folder to static files on server
- Update Server Setup
- [x] Step 4: Test the Postman API 

## **TEST UPLOAD POST & GET PRODUCT APIS**

- POST PRODUCT SUCCESSFULLY

![Alt text](imgs/post-krampus-mug.png)

- GET PRODUCTS SUCCESSFULLY

![Alt text](imgs/get-krampus-mug.png)

![Alt text](imgs/get-holiday-mug.png)

- GET ALL PRODUCTS (UPLOADED MUGS)

![Alt text](imgs/get-all-mugs.png)

- TEST PRODUCT URL WITH UPLOAD/ MUG IMAGES

![Alt text](imgs/localhost-krampus.png)

![Alt text](imgs/localhost-mug1.png)

