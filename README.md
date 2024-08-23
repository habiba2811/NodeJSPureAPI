# Product Management API

![Node.js](https://img.shields.io/badge/Node.js-v16.x-green)
![Docker](https://img.shields.io/badge/Docker-Containerization-blue)
![file-db Branch](https://img.shields.io/badge/Branch-file--db-blueviolet)
![mongo-db Branch](https://img.shields.io/badge/Branch-mongo--db-ff69b4)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-yellow)

## Overview

This API is designed for educational purposes to demonstrate basic CRUD operations for managing products using Node.js without any frameworks. The project is structured to provide two different approaches to data storage, allowing for a comparison of file-based and database-driven techniques.

There are two branches available:
- **file-db**: Implements a file-based system for storing data directly on the server.
- **mongo-db**: Utilizes MongoDB for data storage, offering a more scalable and flexible solution.

## No Frameworks Used

This project is built from the ground up using plain Node.js to give a clear understanding of how APIs work without the abstraction layers provided by popular frameworks like Express or Koa. This approach aims to enhance foundational knowledge of server-side development.

## CI/CD Pipelines

CI/CD pipelines have been set up to automate the build, test, and deployment processes for both branches, ensuring continuous integration and delivery.

### file-db Branch

- **Branch Name**: `file-db`
- **CI/CD Pipeline**: Configured to build and push Docker images for the file-based storage system.

### mongo-db Branch

- **Branch Name**: `mongo-db`
- **CI/CD Pipeline**: Configured to build and push Docker images for the MongoDB-based storage system.
