let session = localStorage.getItem("session") ?? "";

export const setSession = (newSession) => {
  session = newSession;
  localStorage.setItem("session", session);
};

export const getSession = () => {
  return session ?? localStorage.getItem("session") ?? "";
};

export const getUserId = () => {
  return localStorage.getItem("id");
};

export const deleteSession = () => {
  session = "";
  localStorage.removeItem("session");
  localStorage.removeItem("id");
};

export const getAccessToken = () => {
  return (
    session.accessToken ?? localStorage.getItem("session").accessToken ?? ""
  );
};
