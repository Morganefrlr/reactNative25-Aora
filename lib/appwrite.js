import { Account, Client, ID } from 'react-native-appwrite';
// Init your React Native SDK


const client = new Client();
const account = new Account(client);


client
    .setEndpoint(process.env.EXPO_PUBLIC_ENDPOINT) // Your Appwrite Endpoint
    .setProject(process.env.EXPO_PUBLIC_PROJECT_ID) // Your project ID
    .setPlatform(process.env.EXPO_PUBLIC_PLATFORM) // Your application ID or bundle ID.
;


export const createUser = () => {
    
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}