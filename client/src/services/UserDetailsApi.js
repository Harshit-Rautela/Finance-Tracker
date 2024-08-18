import { account } from '../authentication/appwrite';

export const getUserDetails = async()=>{
    try {
         //can also be used to get logged in user details;
         const user = await account.get();
         console.log(user);
         return user;      
    } catch (error) {
        console.log('Failed to fetch user details',error.message);      
    }
}