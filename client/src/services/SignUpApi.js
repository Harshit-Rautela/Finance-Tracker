import axios from "axios";

export const SignUpFunction = async (formdata) => {
  try {
    const response = await axios.post(
      "http://localhost:5555/user/SignUp",
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("The SignUp Function error is:", error);
  }
};
