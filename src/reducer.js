
export const initialState = {
    array: [],
  };
  
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_ARRAY":
            return {
                ...state,
                array:[...state.array,action.item]
            }
      default:
        return state;
    }
  };
  
  export default reducer;