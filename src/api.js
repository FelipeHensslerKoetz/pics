import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID yH1_7HxqZ7rcUL25IoARtFBsi4tOhSP7Cx9aH2WwK-A",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
