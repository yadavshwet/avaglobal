export const getCall = (url) => {
  fetch(url, {
    method: "GET",
    headers: addHeaders(),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const postCall = (url) => {};

const addHeaders = () => {
  return new Headers({
    "X-DPW-ApiKey": "dL6SngaHRXZfvzGA716lioRD7ZsRC9hs",
    "X-DPW-Org-Token": "qW85cUMgO36kMayI4Fwfc9eIkF9aNOat",
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
  });
};
