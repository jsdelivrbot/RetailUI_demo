import React, { Component } from 'react';
import { DateRange } from 'react-date-range';
 
class DatePickerComponent extends Component {
    handleSelect(range){
        console.log(range);
    }
 
   render(){
        return (
            <div>
                <DateRange
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                />
            </div>
        );
    };
}

export default DatePickerComponent;