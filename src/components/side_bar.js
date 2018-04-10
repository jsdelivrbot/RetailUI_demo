import React, { Component } from 'react';

class SideBar extends Component{
    render(){
        return(
            <div className="col-md-2 fillSideBar"> 
             <div className="row">Presence </div>
            <hr />
            <div className="row">Web </div>
            <hr />
            <div className="row"> Analytics</div>
            <hr />
            </div>
        )
    }
}

export default SideBar;