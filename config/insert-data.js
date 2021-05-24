const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = 'mongodb+srv://MiaLou89:M1lfordx!@cluster1.uqr4r.gcp.mongodb.net/trident?retryWrites=true&w=majority';
const client = new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
 
 // The database to use
 const dbName = "trident";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // Use the collection "people"
         const col = db.collection("positions");
         // Construct a document                                                                                                                                                              
         let userDocument = {
             "user": "trader_01",
             "ticker": "IBM",
             "bid": 141,                                                                                                                              
             "asset_qty": 2,                                                                                                                                 
        }
         // Insert a single document, wait for promise so we can read it back
         const user = await col.insertOne(userDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
run().catch(console.dir);