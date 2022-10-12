import { isRef, ref, unref, watchEffect } from "vue";
import axios from "axios";

const API_URL = `https://storeup.amuz/api`;
const instance = axios.create({
  method: "get",
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${process.env.STORE_BEARER_TOKEN}`,
    "Content-Type": `application/json`,
  },
  // withCredentials: true,
});

function usGetFetch(url) {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(true);

  async function doAxios() {
    // reset state before fetching..
    data.value = null;
    error.value = null;
    // unref() unwraps potential refs
    try {
      const response = await instance(unref(`/groups`));
      data.value = await response;
      isLoading.value = false;
    } catch (err) {
      error.value = err;
    }
  }

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doAxios);
  } else {
    // otherwise, just fetch once
    // and avoid the overhead of a watcher
    doAxios().then((r) => console.log(r));
  }

  return { data, error, isLoading };
}

export { usGetFetch };
