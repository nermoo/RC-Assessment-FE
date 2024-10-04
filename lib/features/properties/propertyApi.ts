import AppApi from "@/lib/AppApi";

interface PaymentStatus {
  statusCode: number;
}

export const PropertyApi = AppApi.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentInfo: builder.mutation<PaymentStatus, string>({
      query: () => ({
        url: "/property",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

// fetch property list, add properties, invalidations

export const { useGetPaymentInfoMutation } = PropertyApi;
