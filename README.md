Node.js Arithmetic Microservice
Prerequisites
Ensure you have Node.js installed on your system before proceeding.

Setup Instructions

1. Project Initialization

    1.	Create a new project folder and navigate into it.
    2.	Run the following command to initialize a Node.js project:
        npm init -y

2. Install Dependencies
   Install the required Node.js packages by running:
   npm install express winston

3. Create Microservice File
    1.	Create a new file named index.js in the project folder.
    2.	Paste the microservice code into index.js.

4. Configure Logging
    1.	Create a logs folder inside the project directory.
    2.	Inside the logs folder, create two files:
    o	error.log
    o	combined.log

5. Run the Microservice
    Start the microservice using the following command:
    node index.js

6. Test API Endpoints
    Use a web browser or API testing tools like Postman to test the following endpoints:
    Arithmetic Operations
    •	Addition: GET /add?num1=10&num2=5
    •	Subtraction: GET /subtract?num1=10&num2=5
    •	Multiplication: GET /multiply?num1=10&num2=5
    •	Division: GET /divide?num1=10&num2=5
    •	Power Calculation: GET /power?base=2&exponent=3
    •	Square Root: GET /sqrt?num=25
    •	Modulo Operation: GET /modulo?num1=10&num2=3

7. Verify Logs
    Check the console output and the log files (logs/error.log and logs/combined.log) to confirm API request handling and error logging.
    Additional Notes
    •	Ensure your API inputs are correctly formatted to avoid errors.
    •	Modify index.js as needed to add more features or improve error handling.
    •	Consider using a process manager like PM2 for production deployments.

