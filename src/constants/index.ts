export const QUERY_CLIENT_CONFIG = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
      retry: false,
    },
  },
};

export enum ALIGN {
  left = 'left',
  center = 'center',
  right = 'right',
}
