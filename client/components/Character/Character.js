import React, { useState, memo } from 'react'
import image from './../../../static/character.png'


const Character = memo(( { pos, move } ) =>{

    const width = 24;
    const height = 32;

    const posX = -width*move;
    const posY= -pos*height;

    console.log( posX, posY );

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

    // return (
    //     Array(4).fill(0).map((el,idx)=>{
    //         let posX = -(idx*width);
    //         let posY = -(idx*height);

    //         posX = 0;

    //         let setStyle = { 
    //             width: width+'px'
    //             , height: height+'px'
    //             , backgroundImage: 'url('+image+')'
    //             , backgroundPosition: posX+'px '+posY+'px'
    //             , backgroundRepeat: 'no-repeat'
    //             , margin: 0
    //             , padding: 0
    //             , border: 0
    //         }

    //         return <img key={idx+'px'} style={setStyle}/>
    //     })
    // )
});

export default Character;