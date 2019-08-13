const express = require('express');

const {
    MongoClient
} = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbName = 'updateTestDB';


const app = express();

app.get('/', (req, res) => {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(url, {
                useNewUrlParser: true
            });
            const db = client.db(dbName);
            const response = await db.collection('users').insertOne({
                username: 'admin',
                password: 'password'
            });
            res.send(response);

        } catch (error) {
            res.send(error.message);
        }
        client.close();

    }())

});

app.get('/update', (req, res) => {
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(url, {
                useNewUrlParser: true
            });
            const db = client.db(dbName);
            const response = await db.collection('users').updateOne({
                username: 'alperen'
            },{
                $set : {username: 'admin'}
            }
            );
            res.send(response)
        } catch (error) {
            res.send(error.message);
        }
    }())
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});