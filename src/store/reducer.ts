import { IAppState } from 'components/App/AppContext';
import { ActionType, IAction } from './actions';

const reducer = (state: IAppState, action: IAction) => {
  switch (action.type) {
    case ActionType.UPDATE_BACKGROUND:
      return { ...state, background: action.payload };
    case ActionType.UPDATE_COLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export default reducer;
