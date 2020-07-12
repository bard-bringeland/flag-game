import React, { Component }  from 'react';

class FlagAnswer extends Component {

    render() {
        return(
            <button 
                onClick={() => this.props.handleClick(this.props.optionLabel)}
                disabled = {this.props.disabled}
                style = {{
                    backgroundColor: this.props.color,
                    width: '100px',
                    height: '20px'
                }}
            >{this.props.optionLabel}</button>
        )
    }
}

export default FlagAnswer;