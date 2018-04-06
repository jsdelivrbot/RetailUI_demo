import React,{ Component } from 'react';



class Header extends Component{
    render(){
        return(
            <div className="row">
            <div className="col-md-1">
            <img className="imageprop" src="../img/Capture.png" />
            </div>
            <div className="col-md-11 fillcolor"> 
            
            <p className="headerTitle "> Presence Analytics </p>
            
            </div>
             
            
            </div>
        );
    }
}

export default Header;