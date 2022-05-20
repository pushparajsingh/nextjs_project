import { actionTypes } from "./categories.constant";

export const categoriesSuccess=(payload)=>{
    return{
        type:actionTypes.SUCCESS,
        payload
    };
};
export const categoriesError = (payload) => {
    return {
      type: actionTypes.ERROR,
      payload,
    };
  };  
export const categoriesList=(payload)=>{
   
    return{
        type:actionTypes.CATEGORIES_LIST,
        payload
    };
};
export const categoriesReset=(payload)=>{
    return{
        type:actionTypes.CATEGORIES_RESET,
        payload
    };
};
export const categoriesCreate=(payload)=>{
    return{
        type:actionTypes.CATEGORIES_CREATE,
         payload
    };
};
export const categoriesPage=(payload)=>{
    return{
        type:actionTypes.CATEGORIES_PAGE,
        payload
    };
};
export const categoriesUpdate=(payload)=>{
    return{
        type:actionTypes.CATEGORIES_UPDATE,
        payload
    };
};
export const categoriesDelete=(payload)=>{
    return{
        type:actionTypes.CATEGORIES_DELETE,
        payload
    };
};
export const categoriesDetails=(payload)=>{
   return{
       type:actionTypes.CATEGORIES_DETAILS,
       payload
   }
}
