import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { setSession } from "../config/session";
import axios from "axios";

export const logIn = async (data) => {
  let userId;
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    ).then(console.log("Signed In"));
    console.log(user);

    await axios
      .get(
        `https://google-play-store.onrender.com/api/users/login?email=${data.email}`
      )
      .then((response) => {
        let id = response.data.payload.user_id;
        let profile_picture = response.data.payload.profile_picture;
        localStorage.setItem("id", id);
        localStorage.setItem("profile", profile_picture);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const accessToken = user.user.accessToken;
    const expirationDate =
      user._tokenResponse.expiresIn * 1000 + new Date().getTime();
    const session = {
      accessToken,
      expirationDate,
      email: data.email,
    };
    setSession(session);
    userId = user.user.uid;
  } catch (error) {
    alert(error);
  }
  return userId;
};

export const signUp = async (data) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const regsiterData = {
      username: data.email,
      password: data.password,
      email: data.email,
      profile_picture:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/979.jpg",
    };

    await axios
      .post("https://google-play-store.onrender.com/api/users", regsiterData)
      .then((response) => {
        let id = response.data.message.user_id;
        let profile_picture = response.data.message.profile_picture;
        localStorage.setItem("id", id);
        localStorage.setItem("profile", profile_picture);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const accessToken = user.user.accessToken;
    const expirationDate =
      user._tokenResponse.expiresIn * 1000 + new Date().getTime();
    const session = {
      accessToken,
      expirationDate,
      email: data.email,
    };
    setSession(session);
  } catch (error) {
    alert(error);
  }
};
