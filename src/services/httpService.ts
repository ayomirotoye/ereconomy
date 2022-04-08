import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 120000;
axios.interceptors.request.use((request) => {
  return request;
});

function setJwt(jwt: string | null) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

function getJwt(): string | null {
  // const tokenVal: string = axios.defaults.headers.common["Authorization"];

  // if (!isNullOrUndefined(tokenVal)) {
  //   let tokenValSplit = tokenVal.split(" ");
  //   if (tokenValSplit.length > 1 && tokenValSplit[1].length > 0) {
  //     return tokenVal;
  //   } else {
  //     return null;
  //   }
  // } else {
  //   return null;
  // }
  return null;
}

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
  getJwt,
};

export default httpService;
