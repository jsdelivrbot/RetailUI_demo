import React ,{ Component } from 'react';
const statData = {
    "Total New Count": "27389",
    "Total Repeat Count" :"200",
    "Average Repeat Count" : "80",
    "Average Dwell Time" : "42.54"
}


class RowOne extends Component{

    render(){
        return(
            <div className='rowC'>
             dajasklsajdasljdasljd
            {statData["Total New Count"]}
            {statData["Total Repeat Count"]}
            </div>
        );
    }
}

export default RowOne;