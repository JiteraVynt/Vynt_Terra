
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { TerrariumModel } from "@models/terrarium";
import { UserModel } from "@models/user";


    
    export const DefaultFilterTerrariumQueryKey:[string, string, string] = ["Terrarium", "filter", "/api/terrariums"];    
    

  export type FilterTerrariumRequestBody = {
    pagination_page?: number;
pagination_limit?: number;
terraria: {
        name?: string;
created_user_id?: number;

      };
  };

  export type FilterTerrariumResponseBody = {
    total_pages: number;
terraria: (TerrariumModel & { user: Omit<UserModel, 'encrypted_password' | 'email' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at'>;
 })[];
message: any;
  };

    
    
    export const filterTerrariumApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterTerrariumRequestBody> | undefined>>      
    ): Promise<FilterTerrariumResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/terrariums", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowTerrariumQueryKey:[string, string, string] = ["Terrarium", "show", "/api/terrariums/:id"];    
    

  export type ShowTerrariumRequestBody = {
    id: string;
  };

  export type ShowTerrariumResponseBody = {
    terrarium: TerrariumModel & { user: Omit<UserModel, 'encrypted_password' | 'email' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at'>;
 };
message: any;
  };

    
    
    export const showTerrariumApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowTerrariumRequestBody | undefined>>      
    ): Promise<ShowTerrariumResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/terrariums/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
