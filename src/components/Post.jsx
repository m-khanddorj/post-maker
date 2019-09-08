import React from 'react';
import border from '../images/border.png';

const Post = (props)=>{
    const {background, text} = props;

    // font name to path dictionary
    const fontDict = {
        'Oswald':'oswald',
        'Comfortaa':'comfortaa',
        'Lobster':'lobster',
        'LobsterTwo':'lobsterTwo',
        'Philosopher':'philosopher',
    };
    // type dict
    const typeDict = {
        0:{
            width: 800
        },
        1:{
            height: 800
        }
    }

    return(
            <div style = {{position: 'relative',overflow: 'hidden',width:800,height:800,display: 'inline-block'}} id = 'post'> 
                {/* Background image */}
                <img 
                    src = {background.img} 
                    {...typeDict[text.type]} 
                    style = {{
                        position: 'absolute',
                        top: background.y + 'px',
                        left: background.x + 'px',
                    }} 
                    alt = 'Please select a img'
                />
                {/* Border */}
                <img src = {border} width = '700' style = {{position: 'absolute',margin:50,marginBottom:0}} alt = '' />
                {/* text */}
                <div
                    style = {{
                        zIndex: 99,
                        color: text.color,
                        position: 'absolute',
                        top: text.y + 'px',
                        left: text.x + 'px',
                        fontSize: text.size + 'px',
                        whiteSpace: 'pre-line',

                        padding: '10px',
                        background: text.backgroundColor + parseInt(text.backgroundOpacity).toString(16),
                    }}

                    className = {fontDict[text.font]}
                >
                {text.content}
                </div>
            </div>
    )
}

export default Post;