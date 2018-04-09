import React from 'react';
import { LineChart } from 'react-d3-basic';

class SimpleLineChart extends React.Component{
    
    constructor(props){
        super(props);
        x(d) {
      return d.index;
    }
        
        var data = [
          {
              "age": 39,
              "index": 0
          },
          {
              "age": 38,
              "index": 1
          },
          {
              "age": 34,
              "index": 2
          },
          {
              "age": 12,
              "index": 3
          }
      ];

      var chartSeries = [
          {
            field: 'age',
            name: 'Age',
            color: '#ff7f0e',
            style: {
              "stroke-width": 2,
              "stroke-opacity": .2,
              "fill-opacity": .2
            }
          }
        ]
      
      
    }
    
    
    
    
    render(){
        return(
            <LineChart
      width= {600}
      height= {300}
      data= {[
          {
              "age": 39,
              "index": 0
          },
          {
              "age": 38,
              "index": 1
          },
          {
              "age": 34,
              "index": 2
          },
          {
              "age": 12,
              "index": 3
          }
      ]}
      chartSeries= {[
          {
            field: 'age',
            name: 'Age',
            color: '#ff7f0e',
            style: {
              "stroke-width": 2,
              "stroke-opacity": .2,
              "fill-opacity": .2
            }
          }
        ]}
            x= {x}
      
    />
        );
    }
}

export default SimpleLineChart;