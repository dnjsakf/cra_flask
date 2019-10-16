import React, { memo, useState, useCallback, useEffect } from 'react'
import Item from './Item'
import axios from 'axios'

const Container = memo(( { page } )=>{

	const [ data, setData ] = useState( [] );
	
	useEffect(()=>{
		console.log( '[loadding...]' );
		
		axios.get('http://localhost:3000/data/list/'+page)
			.then( (res)=>{
				setData( res.data.list );
			}).catch( (err)=>{
				console.error( err );
			});
	}, [ page ]);
	
	useEffect(()=>{
		console.log('[loaded_data]', data);		
	}, [ data ]);
	
	return (
		<>
			<span>{ data.length }</span>
			<ul>
			{ 
				data.map((el)=>(<Item key={el.no} no={el.no} title={el.title} article={ el.article } />))
			}
			</ul>
		</>
	)
});

export default Container;