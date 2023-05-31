const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const morgan = require('morgan');
const { notFound, errorHandler} = require('./middleware/errorMiddleware');

const hpp = require('hpp');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');

const port = process.env.PORT || 5000;

// Load env files
dotenv.config({ path: './config/config.env'});

// Connect to database
connectDB();

const app = express();

//Route Files
const listings = require('./routes/listingRoutes');
const agents = require('./routes/agentRoutes');

// Body parser
app.use(express.json())

// Dev loggin middleware
app.use(morgan('dev'))

// Sanitize data
app.use(mongoSanitize())

// Set security headers
app.use(helmet());

// prevent XSS attacks
app.use(xss());

// Prevent hppt param pollution
app.use(hpp())

// Enable CORS
app.use(cors())

// Mount Routers
app.use('/api/listings', listings);
app.use('/api/agents', agents)

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
