
# Link Shortener Website Backend

Welcome to the backend documentation of the Link Shortener website. This backend is responsible for handling URL shortening and redirection, user authentication, and analytics for the link shortening service.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [License](#license)

## Introduction

The Link Shortener website backend is built with NodeJs mainly and it's deependencies. It offers a simple and efficient way to shorten long URLs, making them more shareable and easy to manage.

## Features

- URL Shortening: Convert long URLs into short, custom, and user-friendly links.
- Redirection: Redirect users to the original long URL when accessing the shortened link.


## Getting Started

Follow the instructions below to set up the Link Shortener backend on your local machine or server.

### Installation

1. Clone the repository from GitHub: `git clone https://github.com/saugatpokhrel7/link-shortner-backend.git`.
2. Navigate to the project directory: `cd link-shortener-backend`.
3. Install the required dependencies: `npm install` or `yarn install`.

## Running the Server
Make sure your database is set up and running.
Start the backend server: npm start or yarn start.
The server should now be running on http://localhost:5000

## API Endpoints
Below are the available API endpoints for the Link Shortener backend:

<<<<<<< HEAD
POST /api/url/shorten: Shorten a long URL.
GET /api/url/:shortCode: Redirect to the original long URL based on the provided short code. 
=======
### POST /api/url/shorten: Shorten a long URL.
### GET /api/url/:shortCode: Redirect to the original long URL based on the provided short code. 
>>>>>>> 10154ed12ee2d82c3286af1ebf8f2148c216107b

## Contributing
We welcome contributions to the Link Shortener backend. If you find any issues or have suggestions for improvement, please submit a pull request or open an issue on the GitHub repository.

## License
[MIT](https://choosealicense.com/licenses/mit/)


