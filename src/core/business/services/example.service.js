import axios from "axios";

const getDataService = config => {
  return axios({
    method: "GET",
    url: config.url,
    headers: {
      authorization: config.token
    }
  });
};
export default getDataService;
