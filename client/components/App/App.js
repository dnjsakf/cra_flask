import React, { memo, useState, useEffect, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import Counter from './../Counter/Counter';
import Counter2 from './../Counter/Counter2';
import Character from './../Character/Character';

const App = memo(() => {
	
	const [ pos, setPos ] = useState( 0 );
	const [ move, setMove ] = useState( 0 );
	
	useEffect( () => {
		console.log( '[pos]', pos ); 
	}, [ pos ]);
	useEffect( () => {
		console.log( '[move]', move ); 
	}, [ move ]);

	const setPosition = ( nextPos )=>( e )=>{
		e.preventDefault();

		if( pos === nextPos ){
			setMove( move >= 2 ? 0 : move + 1 );
		} else {
			setMove( 0 );
			setPos( nextPos );
		}
	};
	
	return (
		<div id="test" style={{dispaly:'block', width:'100%', height:'100%'}}>
			<div><span>{ pos }{ move }</span></div>
			<div>
				<Character pos={pos} move={move} />
				<table border='0'>
					<tbody>
						<tr>
							<td></td>
							<td><button className="ctl-btn" onClick={setPosition(0)}>W</button></td>
							<td></td>
						</tr>
						<tr>
							<td><button className="ctl-btn" onClick={setPosition(3)}>A</button></td>
							<td><button className="ctl-btn" onClick={setPosition(2)}>S</button></td>
							<td><button className="ctl-btn" onClick={setPosition(1)}>D</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
});

export default App