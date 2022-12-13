import { ADD_T0_CART,REMOVE_T0_CART} from "../constants";
const initialState = {
  cardData: [],
};
export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_T0_CART:
      // console.log("reducer",action)
      return [
        ...state,
        {cardData: action.data}
      ];
      case REMOVE_T0_CART:
        // console.log("reducer",action)
        state.pop();
        return [
          ...state,
            ];
    default:
      return state;
  }
}
