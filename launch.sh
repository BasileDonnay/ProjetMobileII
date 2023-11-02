# Change directory to your project folder
cd "/c/Users/basil/ProjetMobileII"

# Open Visual Studio code
code . &

# Start the server in the background
node server.js &

# Start the React Native program
expo start --web --tunnel -c

#LOG
# exec >> log.txt 2>&1

# timestamp=$(date +"%Y-%m-%d %H:%M:%S")

# cd "/c/Users/basil/ProjetMobileII"

# echo "$timestamp code ." >> log.txt
# code . &

# echo "$timestamp node server.js" >> log.txt
# node server.js &

# echo "$timestamp expo start --web --tunnel -c" >> log.txt
# expo start --web --tunnel -c