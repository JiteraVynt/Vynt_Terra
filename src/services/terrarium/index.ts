
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterTerrariumRequestBody, FilterTerrariumResponseBody, filterTerrariumApi, DefaultFilterTerrariumQueryKey, ShowTerrariumRequestBody, ShowTerrariumResponseBody, showTerrariumApi, DefaultShowTerrariumQueryKey, CreateTerrariumRequestBody, CreateTerrariumResponseBody, createTerrariumApi, UpdateTerrariumRequestBody, UpdateTerrariumResponseBody, updateTerrariumApi, DeleteTerrariumRequestBody, DeleteTerrariumResponseBody, deleteTerrariumApi } from "./request";



  
    
    
    export const useFilterTerrariumQuery = (
      params?: Partial<FilterTerrariumRequestBody>,
      options: UseQueryOptions<
        FilterTerrariumResponseBody,
        unknown,
        FilterTerrariumResponseBody,
        DefaultQueryKey<Partial<FilterTerrariumRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterTerrariumQueryKey, params], filterTerrariumApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterTerrarium = async (
      queryClient: QueryClient,
      params?: Partial<FilterTerrariumRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterTerrariumQueryKey, params],
        queryFn: filterTerrariumApi,
      });
    };
  

  
    
    
    export const useShowTerrariumQuery = (
      params: ShowTerrariumRequestBody,
      options: UseQueryOptions<
        ShowTerrariumResponseBody,
        unknown,
        ShowTerrariumResponseBody,
        DefaultQueryKey<ShowTerrariumRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowTerrariumQueryKey, params], showTerrariumApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowTerrarium = async (
      queryClient: QueryClient,
      params: ShowTerrariumRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowTerrariumQueryKey, params],
        queryFn: showTerrariumApi,
      });
    };
  

  
    export const useCreateTerrariumMutation = (
      options: MutateOptions<
        CreateTerrariumResponseBody,
        unknown,
        CreateTerrariumRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createTerrariumApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Terrarium");
        },
      });
    };
  

  
    export const useUpdateTerrariumMutation = (
      options: MutateOptions<
        UpdateTerrariumResponseBody,
        unknown,
        UpdateTerrariumRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateTerrariumApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Terrarium");
        },
      });
    };
  

  
    export const useDeleteTerrariumMutation = (
      options: MutateOptions<
        DeleteTerrariumResponseBody,
        unknown,
        DeleteTerrariumRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteTerrariumApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Terrarium");
        },
      });
    };
  


export * from './request';
