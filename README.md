# Find the Pokemon evolution chain
Prerequisites:
- **Node js**: Version v18.16.0 (You can download Node.js from the official website https://nodejs.org and follow the installation instructions for your operating system.)
- **Angular CLI**: Version 16.1.0 (After installing Node.js, ensure that NPM is properly installed by checking its version with the command **npm -v**. NPM is generally included with Node installation. You can then install Angular globally using the command **npm install -g @angular/cli**.)
- **Git**: Git is a version control system used for managing code repositories. Install Git on your system by downloading it from the official website (https://git-scm.com) and following the installation instructions.
- **IDE**: I used Visual Studio Code to build this app. However, you can use any other IDE you prefer. You can download Visual Studio Code from here: https://code.visualstudio.com/
- **Postman**: To test API download postman from here- https://www.postman.com/

## Clone the repository
Once you have above prerequisites installed, Open a terminal or command prompt and navigate to the directory where you want to clone the repository. Run the following command to clone the repository to your local machine:
```
git clone https://github.com/san-joy/pokemonEvolutionChain.git
```
This command will create a local copy of the repository on your machine.

## Running backend Nodejs Rest API
1. Navigate to the project directory: Change into the project directory by running the following command:
```
cd pokemonEvolutionChain/backend
```
2. Install project dependencies: Use npm to install the project dependencies specified in the package.json file. Run the following command:
```
npm install
```
This will download and install all the required dependencies for the node app.

3. Run the serve.js: Once the dependencies are installed, you can start the server by using the following command:
```
node serve.js
```
4. Test the api in postman using following link.
   GET: http://localhost:3000/api/evolution/butterfree

   output should be this
```
{
    "name": "caterpie",
    "variations": [
        {
            "name": "metapod",
            "variations": [
                {
                    "name": "butterfree",
                    "variations": []
                }
            ]
        }
    ]
}
```
5. Run the unit test using the following command
```
npx jest
```

## Running frontend Angular app
1. Navigate to the project directory: Change into the project directory by running the following command:
```
cd pokemonEvolutionChain/frontend
```
2. Install project dependencies: Use npm to install the project dependencies specified in the package.json file. Run the following command:
```
npm install
```
This will download and install all the required dependencies for the Angular app.

4. Run the Angular app: Once the dependencies are installed, you can start the development server and run the Angular app locally. Use the following command:
```
ng serve
```
5. Open a web browser and navigate to http://localhost:4200/. You should see the Angular app running.
