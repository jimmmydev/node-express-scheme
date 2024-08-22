const mongoose = require("mongoose");
const mongoAtlasUri = `mongodb://localhost:27017/jimmmydev`;

async function mongooseConnection() {
    try {
        // Connect to the MongoDB cluster
        await mongoose.connect(mongoAtlasUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongoose is connected");

        const dbConnection = mongoose.connection;

        dbConnection.on("error", (err) => console.log(`Connection error: ${err}`));
        dbConnection.once("open", () => console.log("Connected to DB!"));
    } catch (e) {
        console.error("Could not connect to MongoDB:", e);
        process.exit(1); // Exit the process with a failure code
    }
}

module.exports = mongooseConnection;
