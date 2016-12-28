import { LOAD_INIT_DATA } from '../actions/main-chart-data-actions';

export default function mainChartData(state = [], action) {

  switch (action.type) {
    case LOAD_INIT_DATA:
      return action.payload.chartData;
    default:
      return state;
  }
}
