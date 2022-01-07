import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class Button extends Component {

    static contextType = LanguageContext;
// We should always use the same name contextType
    render() {
        console.log(this.context);
        return ( 
            <button className="ui button primary">
                Submit
            </button>
        )
    }
}

export default Button
