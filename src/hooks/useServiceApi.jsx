import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../services/axios";

export function useFetchData({ key, url, action, dispatch }) {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await api.get(url);
      if (action) {
        dispatch(action(data?.data));
      }
      return data;
    },
  });
}
export function usePostData({ key, url }) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const response = await api.post(url, data);
      return response.data;
    },
  });
}
