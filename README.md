# booad minds website

1. to run the code, rote npm start, it will start both the server and the client concurrently
2. Install the DotENV extension for working of environment variables
3. Do run the npm i to install node modules
4. Models folder contains all the table/ models for our website
5. to create an api, follow these steps
    i. go in the routes folders, create a new file for the the routes, for example i have created the 
       auth.Routes.js for authentication routes only. i.e login, logout and signup. Similarly you will create file of routes and just add the route there like i did in the already given file.
    ii. go to controllers folder and create the file for the controller, same as like i did for auth.controller.js and wrote the Api body there.
    iii. in the server.js, import the routes like this:
                import authRoutes from './routes/auth.Routes.js'; 
        the you will just use them like this:
                app.use("/api/auth",authRoutes)

    Note: Remeber to export the modules as well.

6. Folders for pages and components have been creates, in components folder, create a folder same as    the  page name for which you are creating the components
 
