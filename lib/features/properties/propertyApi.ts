import AppApi from "@/lib/AppApi";
import { Location, PropertyStatus, PropertyType } from "@/constants/Enums";

export interface Property {
  id: string;
  title: string;
  imageUrl: string;
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
    getAllProperties: builder.mutation<Property,void>({
      query: () => ({
        url: "/property",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

// fetch property list, add properties, invalidations

export const { useGetAllPropertiesMutation } = PropertyApi;
