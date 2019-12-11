import {FETCH_PIC} from '../actions/index'
export default function (state=[],action){
  switch (action.type) {
    case FETCH_PIC:
      return [action.payload,...state];
  }
  return state
}
