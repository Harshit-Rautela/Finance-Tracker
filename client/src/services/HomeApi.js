import axios from 'axios';

const getUserDetails = async(token)=>{
    const response = await axios.get('http://localhost:5555/user',{
        headers:{
            'x-auth-token':token,
        }
    })
    return response.data;
}

export default getUserDetails;