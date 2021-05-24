const MongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb+srv://MiaLou89:M1lfordx!@cluster1.uqr4r.gcp.mongodb.net/trident?retryWrites=true&w=majority';


const client = new MongoClient(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);