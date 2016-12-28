import { combineReducers } from 'redux';
import mainChartData from './main-chart-data-reducer';
export const rootReducer =  combineReducers({
  mainChartData : mainChartData
});
