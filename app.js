const express = require('express');

const app = express();

//Environtment Variables
require('dotenv').config()

//Connect to Database
require("./config/db");

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Please use /api/v1/books');
});


app.use('/api/v1/books', require('./routes/books'))
app.use('/api/v1/details', require('./routes/details'))
app.use('/api/v1/itemins', require('./routes/itemins'))
app.use('/api/v1/itemouts', require('./routes/itemouts'))
app.use('/api/v1/items', require('./routes/items'))
app.use('/api/v1/members', require('./routes/members'))
app.use('/api/v1/outcomes', require('./routes/outcomes'))
app.use('/api/v1/rules', require('./routes/rules'))
app.use('/api/v1/salarylist', require('./routes/salarylist'))
app.use('/api/v1/services', require('./routes/services'))
app.use('/api/v1/transactions', require('./routes/transactions'))
app.use('/api/v1/users', require('./routes/users'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on Port ${PORT}`))