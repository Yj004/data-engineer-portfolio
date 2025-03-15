#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Starting Data Engineer Portfolio for Yashjeet ===${NC}"

# Check if profile image exists
if [ ! -s "public/images/profile-image.jpg" ]; then
    echo -e "${YELLOW}Warning: Profile image not found or is empty.${NC}"
    echo -e "${YELLOW}Please save your profile image as 'public/images/profile-image.jpg'${NC}"
    echo -e "${YELLOW}You can use the placeholder for now.${NC}"
    echo ""
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Node.js is not installed. Attempting to install using Conda...${NC}"
    
    # Check if Conda is available
    if command -v conda &> /dev/null; then
        echo -e "${GREEN}Installing Node.js using Conda...${NC}"
        conda install -c conda-forge nodejs -y
        
        # Check if installation was successful
        if ! command -v node &> /dev/null; then
            echo -e "${YELLOW}Failed to install Node.js. Please install it manually from https://nodejs.org/${NC}"
            exit 1
        fi
    else
        echo -e "${YELLOW}Conda not found. Please install Node.js manually from https://nodejs.org/${NC}"
        exit 1
    fi
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
    echo -e "${YELLOW}Failed to install dependencies. Please check the error messages above.${NC}"
    exit 1
fi 