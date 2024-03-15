import { apiSlice } from "@/appstore/api-slice";
import { MenuType, NavigationItem } from "../lib/definitions";

interface LocationItem {
  id: number;
  name: string;
  navigationId: Pick<MenuType, "id">;
}

type GetAllNavigationsResponse = Omit<
  MenuType,
  "categories" | "tags" | "link"
>[];

type GetAllLocationsResponse = LocationItem[];

type GetSingleNavigationResponse = Omit<
  MenuType,
  "categories" | "tags" | "link"
>;

interface NavigationItemProps extends NavigationItem {
  children: Array<NavigationItem>;
}

interface UpdateNavigationArgs {
  name: string;
  items: Array<NavigationItemProps>;
}

interface CreateNavigationLocationArgs {
  name: string;
}

type CreateNavigationLocationResponse = LocationItem;

interface AssignLocationResponse {
  id: number;
  name: string;
  navigationId: number;
}

export const NavigationApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllNavigations: build.query<GetAllNavigationsResponse, void>({
      query: () => `/navigations`,
      providesTags: ["navigation"],
    }),

    getAllLocation: build.query<GetAllLocationsResponse, void>({
      query: () => `/navigations/locations`,
      providesTags: ["navigation"],
    }),

    createNavigation: build.mutation<LocationItem, { name: string }>({
      query: (data) => ({
        url: `/navigations`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["navigation"],
    }),

    createNavigationLocation: build.mutation<
      CreateNavigationLocationResponse,
      CreateNavigationLocationArgs
    >({
      query: (data) => ({
        url: `/navigations/location`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["navigation"],
    }),

    assignLocation: build.mutation<
      AssignLocationResponse,
      { navigationId: number; locationId: number }
    >({
      query: (data) => ({
        url: `/navigations/location/assign`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["navigation"],
    }),

    getSingleNavigation: build.query<
      GetSingleNavigationResponse,
      { id: number }
    >({
      query: ({ id }) => `/navigations/${id}`,
    }),

    updateNavigation: build.mutation<
      any,
      { data: UpdateNavigationArgs; navigationId: number }
    >({
      query: ({ data, navigationId }) => ({
        url: `/navigations/${navigationId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["navigation"],
    }),

    deleteNavigation: build.mutation<void, { navigationId: number }>({
      query: ({ navigationId }) => ({
        url: `/navigations/${navigationId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["navigation"],
    }),
  }),
});

export const {
  useGetAllNavigationsQuery,
  useGetAllLocationQuery,
  useCreateNavigationMutation,
  useCreateNavigationLocationMutation,
  useAssignLocationMutation,
  useGetSingleNavigationQuery,
  useUpdateNavigationMutation,
  useDeleteNavigationMutation,
} = NavigationApi;
