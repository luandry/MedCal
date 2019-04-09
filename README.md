# MedCal

An easy way to make an appointment with your doctor

## [Demo](http://sweng-30-medcal.herokuapp.com)
&nbsp;

## Usage
1. Download the client-server branch.
2. Go to the "client" folder in your shell.
3. Go to "client" and "server" folder and run "npm install" in both of them.
3. Type "npm run dev".
4. Go to the "server" folder in another shell window.
5. Then "npm start".
6. Go to http://localhost:8080

## Source code
The source code contains two folders: client and server.
The components folder, like the Doctor View Page, are in the client folder.
Inside client, the router specifies how the different Vue-pages are connected.
Inside client, there's also services which handles requests to the backend.

The backend (server folder) containts MongoDB models describing what format the data will have.
Inside controllers you find methods how requests from the frontend are handled.
app.js finally connects us to the MongoDB database.

The MongoDB database is stored as an Atlas cluster, run by MongoDB themselves.
