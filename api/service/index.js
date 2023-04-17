const MongoClient = require("mongodb").MongoClient;

const uri = "" // add your own mongo URI
const client = new MongoClient(uri, { useNewUrlParser: true });
const addStudent = async (req, res) => {
  const data = [{},{}];
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("mymodels");
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} students inserted.`);
    res.send("Students inserted successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error inserting students.");
  } finally {
    await client.close();
  }
};

module.exports = { addStudent };
