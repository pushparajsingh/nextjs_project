import { actionTypes } from "./company.constant";

export const companyDetails=(payload)=>{
    return{
        type:actionTypes.COMPANY_EVENTS_DETAILS,
        payload
    };
};
export const companyList=(payload)=>{
  
    return{
        type:actionTypes.COMPANY_EVENTS_LIST,
        payload
    };
};
export const companyCreate=(payload)=>{
    return{
        type:actionTypes.COMPANY_EVENTS_CREATE,
        payload
    };
};
export const companyUpdate=(payload)=>{
    return{
        type:actionTypes.COMPANY_EVENTS_UPDATE,
        payload
    };
};
export const companyDelete=(payload)=>{
    return{
        type:actionTypes.COMPANY_EVENTS_DELETE,
        payload
    };
};
export const companyPage=(payload)=>{
    return{
        type:actionTypes.COMPANY_EVENTS_PAGE,
        payload
    };
};
export const companyReset=(payload)=>{
    return{
        type:actionTypes.COMPANY_EVENTS_RESET,
        payload
    };
};
export const companySuccess=(payload)=>{
    return{
        type:actionTypes.SUCCESS,
        payload
    };
};
export const companyError=(payload)=>{
    return{
        type:actionTypes.ERROR,
        payload
    }
}
