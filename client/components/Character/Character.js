import React, { memo } from 'react'
import image from './../../static/character.png'

const Character = memo(( { pos, move } ) =>{

    const width = 24;
    const height = 32;

    const posX = -width*move;
    const posY= -pos*height;

    return (
        <img style={{ 
            width: width+'px'
            , height: height+'px'
            , backgroundImage: 'url('+image+')'
            , backgroundPosition: posX+'px '+posY+'px'
            , backgroundRepeat: 'no-repeat'
            , margin: 0
            , padding: 0
            , border: 0
        }}/>
    )
});

export default Character;