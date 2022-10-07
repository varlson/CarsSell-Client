import axiosCost from "./axios";
const API_requires = {
  remove: (id) => {
    try {
      axiosCost
        .get(`/delete/${id}`)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  },
};

export default API_requires;
