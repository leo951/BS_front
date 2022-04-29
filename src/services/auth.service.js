export default {
  register(user) {
    return fetch(`${process.env.API_URL}users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  },
  login(user) {
    return fetch(`${process.env.API_URL}users/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  },
  sendEmail(user) {
    return fetch(`${process.env.API_URL}userSendMail`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((err) => console.log("Je suis err = ", err));
  },
  getEmail(user) {
    return fetch(`${process.env.API_URL}userMail`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      res.json().catch((err) => console.log("Je suis err = ", err))
    );
  },
  getUser(token) {
    return fetch(`${process.env.API_URL}users/`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    }).then((res) => res.json());
  },

  getAllUser() {
    return fetch(`${process.env.API_URL}usersAll`, {
      method: "GET",
    }).then((res) => res.json());
  },
  deleteUser(id, token) {
    return fetch(`${process.env.API_URL}users/delete/${id}`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    }).then((res) => res.json());
  },

  updateUser(token, user) {
    return fetch(`${process.env.API_URL}users/update`, {
      method: "PUT",
      headers: {
        authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>  res.json());
  },
  verifyToken(token) {
    return fetch(`${process.env.API_URL}verifytoken`, {
      headers: {
        authorization: token,
      },
    }).then((res) => res.json());
  },
  verifyAdmin(token) {
    return fetch(`${process.env.API_URL}verifyAdmin`, {
      headers: {
        authorization: token,
      },
    }).then((res) => res.json());
  },
};
