import { ref } from "vue";
import axios from "axios";

const API_URL = `https://storeup.amuz`;
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${process.env.STORE_BEARER_TOKEN}`,
  },
});

const useQuery = (url) => {
  const data = ref(null);
  const isLoading = ref(true);
  const error = ref(null);
  instance(url)
    .then((res) => (data.value = res.data))
    .then(() => (isLoading.value = false))
    .catch((err) => (error.value = err));
  return { data, error, isLoading };
};

export { useQuery, instance };
