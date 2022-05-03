import { createHttpClient, fetcher } from "http-react-fetcher"

export const useApi = fetcher.extend({
  baseUrl: "",
})

export const client = createHttpClient(useApi.config.baseUrl)
