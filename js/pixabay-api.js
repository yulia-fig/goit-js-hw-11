import axios from "axios";

const API_KEY = "55068921-c9c0644d1a9915f60fd1c8249";

export function getImagesByQuery(query) {
  return axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
  .then(response => response.data);
}