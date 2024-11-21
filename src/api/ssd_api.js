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
    const response = await api.get("popular", {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    });
    return response.data;
  },
  getTop: async () => {
    const response = await api.get("top_rated", {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    });
    return response.data;
  },
  // 1. api요청을 함수로 만든다. getDetail
  getDetail: async (movie_id) => {
    const response = await api.get(movie_id, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    });
    return response.data;
  },
  // getDetail: async (movie_id) => {
  //   const response = await api.get(movie_id, {
  //     params: {
  //       api_key: import.meta.env.VITE_API_KEY,
  //     },
  //   });
  //   return response.data;
  // },
};

export default movieApi;
