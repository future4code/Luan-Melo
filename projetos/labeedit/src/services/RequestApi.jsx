import axios from "axios";

export const doRegister = async ({ username, email, password }) => {
  try {
    const { data } = await axios.post(
      "https://labeddit.herokuapp.com/users/signup",
      {
        username,
        email,
        password,
      }
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const doLogin = async ({ email, password }) => {
  try {
    const { data } = await axios.post(
      "https://labeddit.herokuapp.com/users/login",
      { email, password }
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const doFeed = async ({ token }) => {
  try {
    const { data } = await axios.get("https://labeddit.herokuapp.com/posts", {
      headers: {
        auth: `${token}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
