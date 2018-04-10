import React, { Component } from 'react';
import Header from './header';
import SideBar from './side_bar';
import SimpleMap from './google_map';
import Pie3D from 'react-pie3d';
import SampleLineChart from './sample-line-chart';
import NewBarChart from './new-barchart';
import SampleRadialChart from './radial-chart';
import SamplePieChart from './sample-pie-chart';
import MixBarChart from './mix-bar-chart';
import CustomBarGraph from './custom-bar-chart';
import HighLightLineChart from './highlight-zoom-line-chart';
import Widget from './checkbox-tree';
import RowOne from './firstRow'

import SimpleBarGraph from './bar-graph';
//import BarChart from 'react-d3-components';


export default class App extends Component {
   
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <div className="rowC">
        <RowOne/>
        </div>
        <div className="rowC">
        <SimpleMap />
        <Widget />
        </div>
        <div className ="rowC">
        
        <SampleLineChart />
        <NewBarChart />
        <MixBarChart />
        </div>
        <div className="rowC">
        <SampleRadialChart />
        <CustomBarGraph />
        <Pie3D data={[
  {
    value: 10,
    color: 'red',
    label: 'No'
  },
  {
    value: 20,
    color: 'green',
    label: 'Yes'
  },
  {
    value: 5,
    color: 'silver',
    label: 'Others'
  }
]}/>
        
        </div>
        <div className="rowC">
        <SamplePieChart />
        <HighLightLineChart />
        <SimpleBarGraph />
        </div>
        
        
    
       
        </div>
    );
  }
}
