#!/bin/bash

# Change directory to your project folder
cd "/c/Users/basil/ProjetMobileII"

# Start the server in the background
node server.js &

# Start the React Native program
expo start --web
