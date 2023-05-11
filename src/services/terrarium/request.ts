import { serviceFetch } from '@utils/service';
import { getRoute } from '@utils/route';
import { QueryFunctionContext } from 'react-query';
import { DefaultQueryKey } from '@interfaces/query';
import { TerrariumModel } from '@models/terrarium';

export const DefaultFilterTerrariumQueryKey: [string, string, string] = [
  'Terrarium',
  'filter',
  '/api/terrariums',
];

export type FilterTerrariumRequestBody = {
  pagination_page?: number;
  pagination_limit?: number;
  terraria: {
    name?: string;
    price?: number;
    discription?: string;
  };
};

export type FilterTerrariumResponseBody = {
  total_pages: number;
  terraria: TerrariumModel[];
  message: any;
};

export const filterTerrariumApi = async (
  context: QueryFunctionContext<DefaultQueryKey<Partial<FilterTerrariumRequestBody> | undefined>>,
): Promise<FilterTerrariumResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/terrariums', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export const DefaultShowTerrariumQueryKey: [string, string, string] = [
  'Terrarium',
  'show',
  '/api/terrariums/:id',
];

export type ShowTerrariumRequestBody = {
  id: string;
};

export type ShowTerrariumResponseBody = {
  terrarium: TerrariumModel;
  message: any;
};

export const showTerrariumApi = async (
  context: QueryFunctionContext<DefaultQueryKey<ShowTerrariumRequestBody | undefined>>,
): Promise<ShowTerrariumResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/terrariums/:id', context.queryKey[3]),
    params: context.queryKey[3] || {},
    method: 'GET',
  });
};

export type CreateTerrariumRequestBody = {
  terraria: {
    name?: string;
    price?: number;
    discription?: string;
  };
};

export type CreateTerrariumResponseBody = {
  terrarium: TerrariumModel;
  error_object: any;
};

export const createTerrariumApi = async (
  body: CreateTerrariumRequestBody,
): Promise<CreateTerrariumResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/terrariums', body),
    method: 'POST',
    data: body,
  });
};

export type UpdateTerrariumRequestBody = {
  id: string;
  terraria: {
    name?: string;
    price?: number;
    discription?: string;
  };
};

export type UpdateTerrariumResponseBody = {
  terrarium: TerrariumModel;
  error_object: any;
};

export const updateTerrariumApi = async (
  body: UpdateTerrariumRequestBody,
): Promise<UpdateTerrariumResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/terrariums/:id', body),
    method: 'PUT',
    data: body,
  });
};

export type DeleteTerrariumRequestBody = {
  id: string;
};

export type DeleteTerrariumResponseBody = {
  message: any;
};

export const deleteTerrariumApi = async (
  body: DeleteTerrariumRequestBody,
): Promise<DeleteTerrariumResponseBody> => {
  return serviceFetch({
    url: getRoute('/api/terrariums/:id', body),
    method: 'DELETE',
    data: body,
  });
};
