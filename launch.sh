#!/bin/bash

# Change directory to your project folder
cd "/c/Users/basil/ProjetMobileII"

# Specify a log file where the output will be redirected
log_file="expo_logs.txt"

# Start Expo with the --web flag and redirect the output to the log file
npm start -- --web > "$log_file" 2>&1

# Optionally, you can add a message to indicate where the logs are saved
echo "Expo logs are saved in $log_file"
