import axios from "axios";

const baseUrl = "https://api.nhs.uk/medicines";

export const getMedication = (medicationName) =>
  axios({
    method: "get",
    headers: {
      "subscription-key": "8b1256c6a267411eab1bc7b1bb78833b",
    },
    url: `${baseUrl}/${medicationName}`,
  }).then((response) => {
    console.log(response.data);
    return response.data;
  });
