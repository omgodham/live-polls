
export const initialState = {
    array: {},
  };
  
  
  const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_ARRAY":{
          return {
                array:action.item
            }    
          }
 
      default:
        return state;
    }
  };
  
  export default reducer;