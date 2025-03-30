// ✅ Step 1: Load necessary modules
const express = require('express'); // Load Express framework for handling HTTP requests
const winston = require('winston'); // Load Winston for logging purposes

// ✅ Step 2: Initialize the application and define the server port
const app = express();
const port = 3000; // Modify the port number if required

// ✅ Step 3: Configure Winston for logging requests and errors
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

// ✅ Step 4: Define API routes with validation and logging

// Addition Endpoint
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    logger.info(`Performing addition: ${num1} + ${num2}`);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input values for addition');
        return res.status(400).send('Invalid input values');
    }
    res.send(`Result: ${Number(num1) + Number(num2)}`);
});

// Subtraction Endpoint
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    logger.info(`Performing subtraction: ${num1} - ${num2}`);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input values for subtraction');
        return res.status(400).send('Invalid input values');
    }
    res.send(`Result: ${Number(num1) - Number(num2)}`);
});

// Multiplication Endpoint
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    logger.info(`Performing multiplication: ${num1} * ${num2}`);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input values for multiplication');
        return res.status(400).send('Invalid input values');
    }
    res.send(`Result: ${Number(num1) * Number(num2)}`);
});

// Division Endpoint with zero-division check
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    logger.info(`Performing division: ${num1} / ${num2}`);
    if (isNaN(num1) || isNaN(num2) || Number(num2) === 0) {
        logger.error('Invalid input values or division by zero');
        return res.status(400).send('Invalid input values or division by zero');
    }
    res.send(`Result: ${Number(num1) / Number(num2)}`);
});

// ✅ Step 5: Start the server and listen for requests
app.listen(port, () => {
    logger.info(`Calculator microservice is running at http://localhost:${port}`);
    console.log(`Calculator microservice is running at http://localhost:${port}`);
});

// Power Calculation Endpoint
app.get('/power', (req, res) => {
    const { base, exponent } = req.query;
    logger.info(`Performing exponentiation: ${base} ^ ${exponent}`);
    if (isNaN(base) || isNaN(exponent)) {
        logger.error('Invalid input values for exponentiation');
        return res.status(400).send('Invalid input values');
    }
    res.send(`Result: ${Math.pow(Number(base), Number(exponent))}`);
});

// Square Root Calculation Endpoint
app.get('/sqrt', (req, res) => {
    const { num } = req.query;
    logger.info(`Calculating square root of: ${num}`);
    if (isNaN(num) || Number(num) < 0) {
        logger.error('Invalid input value for square root calculation');
        return res.status(400).send('Invalid input value for square root calculation');
    }
    res.send(`Result: ${Math.sqrt(Number(num))}`);
});

// Modulo Calculation Endpoint
app.get('/modulo', (req, res) => {
    const { num1, num2 } = req.query;
    logger.info(`Performing modulo operation: ${num1} % ${num2}`);
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input values for modulo operation');
        return res.status(400).send('Invalid input values');
    }
    res.send(`Result: ${Number(num1) % Number(num2)}`);
});

