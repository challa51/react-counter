import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import INC from './INC'

class Main extends Component {
    IncrementMet(i){
        this.props.IncrementMet(i)
    }
    DecrementMet(i){
        this.props.DecrementMet(i)
    }
    render(){
        return(
            <div>
            <div>
                
                <INC val={this.props.CounterVal} Inc={this.IncrementMet.bind(this)} Dec={this.DecrementMet.bind(this)}></INC>
            
            </div>
            <div>
            <button onClick={this.props.AddCounterMet}>add counter</button>
            <button onClick={this.props.DeleteCounterMet}>delete counter</button>
            </div>
            </div>
        );
    }
    
}
const mapStateToProps=(state)=>{
   return {CounterVal:state.Counter}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        IncrementMet:(index)=>{
            dispatch({
                type:'INC',index:index
            })
        },
        DecrementMet:(index)=>{
            dispatch({
                type:'DEC',index:index
            })
        },AddCounterMet:()=>{
            dispatch({
                type:'ADD_C'
            })
        },
        DeleteCounterMet:()=>{
            dispatch({
                type:'DEL_C'
            })
            
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)