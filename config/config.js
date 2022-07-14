import dotenv from 'dotenv';
dotenv.config();


const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const SERVER_PORT = process.env.SERVER_PORT;
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.842wnho.mongodb.net/wander?retryWrites=true&w=majority`;


 export const config = { 
    mongo: {
        url:MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
}
