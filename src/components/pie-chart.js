import React, { Component } from 'react';
import Pie3D from 'react-pie3d'

class PieChart extends Component {
    
    render(){
        return(
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
        );
    }
}

export default PieChart;