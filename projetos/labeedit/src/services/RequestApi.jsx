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
    const { data } = await axios.get(
      "https://labeddit.herokuapp.com/posts/?page=1&size=10",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    // throw new Error(error);
  }
};

export const doCreatePost = async ({ token, title, body }) => {
  try {
    const { data } = await axios.post(
      "https://labeddit.herokuapp.com/posts",
      { title, body },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const doCreateComments = async ({ id, token, body }) => {
  try {
    const { data } = await axios.post(
      `https://labeddit.herokuapp.com/posts/${id}/comments`,
      { body },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const doGetDetailsComments = async ({ id, token }) => {
  try {
    const { data } = await axios.get(
      `https://labeddit.herokuapp.com/posts/${id}/comments`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const doCreatePostVote = async ({ id, token, obj }) => {
  try {
    const { direction } = obj;
    const { data } = await axios.post(
      `https://labeddit.herokuapp.com/posts/${id}/votes`,
      { direction },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const doCreateCommentVote = async ({ id, token, obj }) => {
  try {
    const { direction } = obj;
    const { data } = await axios.post(
      `https://labeddit.herokuapp.com/comments/${id}/votes`,
      { direction },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const doRemovePostVote = async ({ id, token }) => {
  try {
    const { data } = await axios.delete(
      `https://labeddit.herokuapp.com/posts/${id}/votes`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const doRemoveCommentPost = async ({ id, token }) => {
  try {
    const { data } = await axios.delete(
      `https://labeddit.herokuapp.com/comments/${id}/votes`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
