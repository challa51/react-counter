import React, { Component } from 'react';

class INC extends Component{
    Inc(i){
        this.props.Inc(i);
    }
    Dec(i){
        this.props.Dec(i)
    }
    render(){
        let values=this.props.val.map((x,i,val)=>{
            return (<div key={i}>{x}
            <button onClick={this.Inc.bind(this,i)}>+</button>
        <button onClick={this.Dec.bind(this,i)}>-</button>
            </div> ) ;
        }
    );
        return(<div>
            {values}
            
            </div>
        );
    }
}

export default INC