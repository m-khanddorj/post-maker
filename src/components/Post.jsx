import React from 'react';
import border from '../images/border.png';

const Post = (props)=>{
    const {background, text} = props;

    return(<div style = {{position: 'relative',overflow: 'hidden',width:800,height:800}}> 
    
        <img src = {background.img} width = '800' style = {{position: 'absolute'}} />
        <img src = {border} width = '700' style = {{position: 'absolute',margin:50}} />
        <div
            style = {{
                zIndex: 99,
                color: 'white',
                position: 'absolute',
                top: text.y + 'px',
                left: text.x + 'px',
                fontSize: text.size + 'px',
            }}
        >
        {text.content}
    </div>
    </div>)
}

export default Post;