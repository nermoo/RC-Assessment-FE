import AppApi from "@/lib/AppApi";
import { Location, PropertyStatus, PropertyType } from "@/constants/Enums";

export interface Property {
  id: string;
  title: string;
  image: string;
  slug: boolean;
  location: Location;
  price: number;
  propertyType: PropertyType;
  status: PropertyStatus;
  area: number;
}

export interface CreateProperty {
  title: string;
  description: string;
  price: number;
  area: number;
  type: PropertyType;
  status: PropertyStatus;
  location: Location;
  slug: boolean; 
  propertyImg: File | null;        
}

export const PropertyApi = AppApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProperties: builder.query<Property[],void>({
      query: () => ({
        url: "/property",
        method: "GET",
      }),
      providesTags: ['property'],
    }),
    createProperty: builder.mutation<Property, FormData>({
      query: (newProperty) => ({
        url: "/property",
        method: "POST",
        body: newProperty,
      }),
      invalidatesTags: ['property'],
    }),
  }),
  overrideExisting: false,
});

// fetch property list, add properties, invalidations

export const { useGetAllPropertiesQuery, useCreatePropertyMutation } = PropertyApi;
