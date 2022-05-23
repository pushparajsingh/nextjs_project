import { actionTypes } from "./Blogs.constant"; 

export const blogsList=(payload)=>{
    return{
        type:actionTypes.BLOGS_LIST,
        payload
    };
};
export const blogsError=(payload)=>{
    return{
        type:actionTypes.ERROR,
        payload
    };
};
export const blogsSuccess=(payload)=>{
    return{
        type:actionTypes.SUCCESS,
        payload
    };
};
export const blogsDelete=(payload)=>{
    return{
        type:actionTypes.BLOGS_DELETE,
        payload
    };
};
export const blogsCreate=(payload)=>{
    return{
        type:actionTypes.BLOGS_CREATE,
        payload
    };
};
export const blogsReset=(payload)=>{
    return{
        type:actionTypes.BLOGS_RESET,
        payload
    };
};
export const blogsUpdate=(payload)=>{
    return{
        type:actionTypes.BLOGS_UPDATE,
        payload
    };
};
export const blogsDetails=(payload)=>{
    return{
        type:actionTypes.BLOGS_DETAILS,
        payload
    };
};
export const blogsPage=(payload)=>{
    return{
        type:actionTypes.BLOGS_PAGE,
        payload
    };
};

