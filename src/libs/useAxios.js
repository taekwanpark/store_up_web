import axiosData from "@/libs/axiosData";

export async function getData(url) {
  const response = await axiosData(url);
  return await response.data;
}
