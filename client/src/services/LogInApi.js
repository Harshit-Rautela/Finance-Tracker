import { ID } from 'appwrite';
import { account } from '../authentication/appwrite';

export const LogInFunction = async(formData)=>{
    try {
        const {name, email, password} = formData;
        //to check if there is already an active session.
        const user = await account.get();
        if(user){
            console.log('A session already exists');
            return user; //If a session already exists, it returns an existing session.
        }
        //for logging in
        const response = await account.createEmailPasswordSession(email,password);
        return response;
    } catch (err) {
        console.log('The error in loginfunc is',err.message);       
    }
}