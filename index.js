import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes'

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
routes(app);

app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

// app.listen(PORT, () => 
//     console.log(`your server is running on port ${PORT}`)
// );

mongoose.connect(`mongodb+srv://akenzua:${process.env.MONGO_PASSWORD}@cluster0-3rpvi.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
.then(() => {
    console.log(`your server is running on port ${PORT}`)
    app.listen(4000);
    
}).catch(err => {
    console.log(err);
});
