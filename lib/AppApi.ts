import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const AppApi = createApi({
  reducerPath: "AppApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5173/',
  }),
  tagTypes: ["files", "collections", "chats"],
  endpoints: () => ({}),
});

export default AppApi;
