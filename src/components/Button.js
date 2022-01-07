import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class Button extends Component {

//     static contextType = LanguageContext;
// // We should always use the same name contextType
//     render() {
//         const text = this.context === 'english' ? 'Submit' : 'ಸಲ್ಲಿಸು';
//         return ( 
//             <button className="ui button primary">
//                 {text}
//             </button>
//         )
//     }


    render() {
        return ( 
            <ColorContext.Consumer>
            {(color)=>(
                <button className={`ui button ${color==='red'? 'red':'primary'}`}>
                    <LanguageContext.Consumer>
                        {({language}) => language === 'english' ? 'Submit' : 'ಸಲ್ಲಿಸು'}
                    </LanguageContext.Consumer>
                </button>
            )}  
            </ColorContext.Consumer>
        )
    }
}

export default Button
