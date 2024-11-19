import api from "./axios_sd";

const movieApi = {
  getNow: async () => {
    const response = await api.get("now_playing", {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    });
    return response.data;
  },
  getPop: async () => {
    const response = await api.get("popular");
    return response.data;
  },
  getTop: async () => {
    const response = await api.get("top_rated");
    return response.data;
  },
};

export default movieApi;
