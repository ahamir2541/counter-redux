import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterOutPut from '../../Components/CounterOutPut/CounterOutPut'
import CounterControl from '../../Components/CounterControl/CounterControl'
import * as actionType from '../../store/actions'

class Counter extends Component {
    state = {
        counter : 10
    }

    counterHandler = (action, value) => {
        switch(action){
            case 'inc' : 
                this.setState( preveState => {
                    return {
                        counter : preveState.counter + 1
                    }
                } )
                break
            case 'dec' :
                this.setState( preveState => {
                    return {
                        counter : preveState.counter - 1
                    }
                } )
                break
            case 'sum' :
                this.setState( preveState => {
                    return {
                        counter : preveState.counter + value
                    }
                } )
                break
            case 'sub' :
                this.setState( preveState => {
                    return {
                        counter : preveState.counter - value
                    }
                } )
        }
    }

    render() {
        return (
            <div>
                <CounterOutPut value={this.props.ctr} />
                
                <CounterControl label="increment" 
                clicked={ this.props.onIncrementCounter } />
                <CounterControl label="DECREMENT" 
                clicked={ this.props.onDecrementCounter } /><CounterControl label="ADD" 
                clicked={ this.props.AddCounter } /><CounterControl label="SUB" 
                clicked={ this.props.SubCounter } />
                <hr/>
                <button onClick={ () => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResult.map(strResult => (
                        <li 
                        key={strResult.id} 
                        onClick={ () => this.props.onDeleteResult(strResult.id) }>
                            {strResult.value}
                        </li>
                    ))}                 
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr : state.ctr.counter,
        storeResult : state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({ type : actionType.INCREMENT }),
        onDecrementCounter : () => dispatch({ type : actionType.DECREMENT }),
        AddCounter : () => dispatch({ type : actionType.ADD, val: 10 }),
        SubCounter : () => dispatch({ type : actionType.SUBTRACT, val: 10 }),
        onStoreResult : (result) => dispatch({ type : actionType.STORE_RESULT, result : result }),
        onDeleteResult : (id) => dispatch({ type : actionType.DELETE_RESULT, resultELId: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);