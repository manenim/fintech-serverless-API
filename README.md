Fintech Serverless API
====================

Introduction
------------

This project is a backend application that provides endpoints for a consumer-based web application for the fintech industry. The platform allows renters and buyers to find properties for rent or sale, respectively. The application has two types of users: renters and buyers. Renters can only rent properties listed on the platform, while buyers can purchase properties listed on the platform. The application has endpoints to handle registration, retrieval of renters and buyers list, and matching of renters and buyers for the same property.

Features
--------

-   Renters and buyers can use the platform to find properties for rent or sale, respectively.
-   The platform has two types of users: renters and buyers.
-   Renters can only rent properties listed on the platform, while buyers can purchase properties listed on the platform.
-   The platform has endpoints to handle registration, retrieval of renters and buyers list, and matching of renters and buyers for the same property.
-   The backend of the platform uses Node, Lambda function on AWS Serverless platform, and DynamoDB as the database.

Endpoints
---------

-   POST - <https://ochoohdbkd.execute-api.us-east-1.amazonaws.com/prod/register> - Accepts registration requests from both renters and buyers. Stores information in a database for future retrieval.
-   GET - <https://ochoohdbkd.execute-api.us-east-1.amazonaws.com/prod/users> - Fetches all users on the Database
-   GET - [https://ochoohdbkd.execute-api.us-east-1.amazonaws.com/prod/users/{userId}](https://ochoohdbkd.execute-api.us-east-1.amazonaws.com/prod/users/%7BuserId%7D) - Retrieves a user by Id
-   GET - <https://ochoohdbkd.execute-api.us-east-1.amazonaws.com/prod/users/renters> - Retrieves list of all renters
-   GET - <https://ochoohdbkd.execute-api.us-east-1.amazonaws.com/prod/buyers> - Retrieves list of all buyers
-   GET - [https://ochoohdbkd.execute-api.us-east-1.amazonaws.com/prod/property/{propertyId}]https://ochoohdbkd.execute-api.us-east-1.amazonaws.com/prod/property/%7BpropertyId%7D) - Checks and matches renters and buyers who are interested in the same property.
-   DELETE - [https://ochoohdbkd.execute-api.us-east-1.amazonaws.com/prod/users/{userId}](https://ochoohdbkd.execute-api.us-east-1.amazonaws.com/prod/users/%7BuserId%7D) - Deletes a user
-   GET - <https://ochoohdbkd.execute-api.us-east-1.amazonaws.com/prod/api> - Link to the Swagger Documentation of the project


Structure and Best Practices
----------------------------

The code is well-structured, easy to understand, and follows best practices. Unit tests have been implemented with Jest to ensure that the application meets requirements and functions as expected. Additionally, a CI/CD pipeline has been implemented with Github actions that automates two unit tests.

Getting Started
---------------

1.  Clone the repository
2.  Install dependencies using `yarn`
3.  Run tests using `yarn test`