# Product Management API

## Overview

This Node.js API provides basic CRUD operations for managing products. There are two branches available:
- **file-db**: Uses a file-based system for storing data.
- **mongo-db**: Uses MongoDB for data storage.

## CI/CD Pipelines

CI/CD pipelines have been set up to automate the build, test, and deployment processes for both branches:

### file-db Branch

- **Branch Name**: `file-db`
- **CI/CD Pipeline**: The pipeline is configured to build and push Docker images for the file-based system setup.

### mongo-db Branch

- **Branch Name**: `mongo-db`
- **CI/CD Pipeline**: The pipeline is configured to build and push Docker images for the MongoDB-based system setup.

### Prerequisites

- Node.js
- Docker (for containerized setup)
