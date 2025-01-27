import { Client } from 'react-native-appwrite';
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(process.env.ENDPOINT) // Your Appwrite Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setPlatform(process.env.PLATFORM) // Your application ID or bundle ID.
;