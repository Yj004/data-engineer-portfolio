#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Deploying Data Engineer Portfolio to GitHub Pages ===${NC}"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${YELLOW}Git is not installed. Please install Git first.${NC}"
    exit 1
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

# Check if profile image exists
if [ ! -s "public/images/profile-image.jpg" ]; then
    echo -e "${YELLOW}Warning: Profile image not found or is empty.${NC}"
    echo -e "${YELLOW}Please save your profile image as 'public/images/profile-image.jpg'${NC}"
    echo -e "${YELLOW}You can use the placeholder for now.${NC}"
    echo ""
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo -e "${GREEN}Installing dependencies...${NC}"
    npm install
    
    if [ $? -ne 0 ]; then
        echo -e "${YELLOW}Failed to install dependencies. Please check the error messages above.${NC}"
        exit 1
    fi
fi

# Install gh-pages if not already installed
if ! npm list -g gh-pages &> /dev/null; then
    echo -e "${GREEN}Installing gh-pages package...${NC}"
    npm install --save-dev gh-pages
    
    if [ $? -ne 0 ]; then
        echo -e "${YELLOW}Failed to install gh-pages. Please check the error messages above.${NC}"
        exit 1
    fi
fi

# Configure Git if not already configured
if [ -z "$(git config --get user.name)" ]; then
    echo -e "${YELLOW}Git user name not configured.${NC}"
    read -p "Enter your name for Git: " git_name
    git config user.name "$git_name"
fi

if [ -z "$(git config --get user.email)" ]; then
    echo -e "${YELLOW}Git user email not configured.${NC}"
    read -p "Enter your email for Git: " git_email
    git config user.email "$git_email"
fi

# Check if the repository is already initialized
if [ ! -d ".git" ]; then
    echo -e "${GREEN}Initializing Git repository...${NC}"
    git init
    git add .
    git commit -m "Initial commit"
fi

# Check if remote origin exists
if ! git remote | grep -q "origin"; then
    echo -e "${YELLOW}Remote origin not found.${NC}"
    echo -e "${GREEN}Adding remote origin...${NC}"
    read -p "Enter your GitHub repository URL (e.g., https://github.com/yj004/data-engineer-portfolio.git): " repo_url
    git remote add origin "$repo_url"
fi

# Deploy to GitHub Pages
echo -e "${GREEN}Deploying to GitHub Pages...${NC}"
npm run deploy

if [ $? -eq 0 ]; then
    echo -e "${GREEN}Deployment successful!${NC}"
    echo -e "${GREEN}Your portfolio is now live at: https://yj004.github.io/data-engineer-portfolio${NC}"
    
    # Push changes to main branch
    echo -e "${GREEN}Pushing changes to main branch...${NC}"
    git add .
    git commit -m "Update portfolio"
    git push -u origin main || git push -u origin master
    
    echo -e "${GREEN}All done! Your portfolio is now live and your code is on GitHub.${NC}"
else
    echo -e "${YELLOW}Deployment failed. Please check the error messages above.${NC}"
    exit 1
fi 