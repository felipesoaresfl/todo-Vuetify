import api from "@/api";

export default {
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      api
        .post("/api/auth/login", { username, password })
        .then((response) => {
          console.log("API AUTH: SUCCESS");
          return resolve(response.data);
        })
        .catch((error) => {
          console.log("API AUTH: ERROR");
          return reject(error);
        });
    });
  },
  signup: (username, name, email, password) => {
    return new Promise((resolve, reject) => {
      api
        .post("/api/auth/signup", { username, name, email, password })
        .then((response) => {
          console.log("cheguei no signup auth.api.js");
          console.log("API AUTH: SUCCESS");
          return resolve(response.data);
        })
        .catch((error) => {
          ("falhei no signup auth.api.js");
          console.log("API AUTH: ERROR");
          return reject(error);
        });
    });
  },
};
