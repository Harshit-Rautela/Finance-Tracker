import axios from "axios";

export const LogInFunction = async (formdata) => {
  try {
    const response = await axios.post(
      "http://localhost:5555/LogIn",
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("The LogIn function error is:", error);
  }
};
