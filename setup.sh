#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Setting up Data Engineer Portfolio for Yashjeet ===${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${GREEN}Node.js is not installed. Please install Node.js (v14.0.0 or later) from https://nodejs.org/${NC}"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${GREEN}npm is not installed. It should come with Node.js installation.${NC}"
    exit 1
fi

# Install dependencies
echo -e "${GREEN}Installing dependencies...${NC}"
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Dependencies installed successfully!${NC}"
    
    # Start the development server
    echo -e "${GREEN}Starting the development server...${NC}"
    echo -e "${GREEN}The application will be available at http://localhost:3000${NC}"
    npm start
else
    echo -e "${GREEN}Failed to install dependencies. Please check the error messages above.${NC}"
    exit 1
fi 