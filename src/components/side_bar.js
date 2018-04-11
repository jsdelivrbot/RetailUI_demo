import React, { Component } from 'react';

class SideBar extends Component{
    render(){
        return(
            <div className="col-md-2 fillSideBar"> 
             <div className="row addheight">
            <img className="setimg" src="../img/icon.png" />
            <p><b>PRESENCE</b></p> 
            </div>
            <hr />
            <div className="row addheight ">
            <img className="setimg" src="../img/icon.png" />
            <p><b>WEB</b></p>
            </div>
            <hr />
            <div className="row addheight">
            <img className="setimg" src="../img/icon.png" />
            <p><b> ANALYTICS</b></p>
            </div>
            <hr />
            <div className="row addheight">
            <img className="setimg" src="../img/icon.png" />
            <p><b> STORE</b></p></div>
            </div>
        )
    }
}

export default SideBar;