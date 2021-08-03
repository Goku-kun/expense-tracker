import { bindActionCreators, createStore } from "redux";
import {
  add_expense,
  delete_expense,
  ADD_EXPENSE,
  DELETE_EXPENSE,
} from "./actions";
import {
  retrieveFromLocalStorage,
  writeToLocalStorage,
} from "../utils/storage";

var initialState = retrieveFromLocalStorage() || {
  total: 0,
  income: 0,
  expense: 0,
  records: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE: {
      let records = [...state.records];
      let total = state.total;
      let income = state.income;
      let expense = state.expense;
      records.push({ ...action.payload, id: new Date().toISOString() });

      if (action.payload.amount > 0) {
        income += action.payload.amount;
      } else {
        expense += action.payload.amount;
      }
      total += action.payload.amount;
      writeToLocalStorage({ records, total, expense, income });
      return { records, total, expense, income };
    }

    case DELETE_EXPENSE: {
      let records = state.records;
      let recordToBeRemoved = records.find(
        (record) => record.id === action.payload
      );
      let total = state.total;
      let income = state.income;
      let expense = state.expense;

      records = records.filter((record) => record.id !== action.payload);
      total -= recordToBeRemoved.amount;
      if (recordToBeRemoved.amount > 0) {
        income -= recordToBeRemoved.amount;
      } else {
        expense -= recordToBeRemoved.amount;
      }
      writeToLocalStorage({ records, total, expense, income });
      return { ...state, records, total, income, expense };
    }

    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const actions = bindActionCreators(
  { add_expense, delete_expense },
  store.dispatch
);

var add_it = actions.add_expense;
var delete_it = actions.delete_expense;
export { store, add_it, delete_it };
