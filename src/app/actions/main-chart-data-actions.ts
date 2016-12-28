import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { MainChartDataService } from '../services/main-chart-data-service';
export const LOAD_INIT_DATA = 'LOAD_INIT_DATA';


@Injectable()
export class MainChartActions {

  constructor(private ngRedux: NgRedux<any>, private _mainChartDataService: MainChartDataService) {}

  loadInitData = () => {
    this._mainChartDataService.getChartData()
          .subscribe(data => {
            this.ngRedux.dispatch({
              type: "LOAD_INIT_DATA",
              payload: {
                chartData: data
              }
            });
          }, error => console.log('Could not load main chart data.'));
 };

}
