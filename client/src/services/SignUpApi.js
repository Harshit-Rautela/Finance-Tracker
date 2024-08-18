import { ID } from 'appwrite';
import { account } from '../authentication/appwrite';
export const SignUpFunction = async(formData)=>{
    try {
        const { email,password ,name}  = formData;
        //for registering a user.
        const response = await account.create(ID.unique(),email,password,name);
        return response;       
    } catch (err) {
        console.log('The error in signupfunc is:',err.message);       
    }
}
