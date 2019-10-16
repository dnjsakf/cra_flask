import React, { memo, setState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const Item = memo(({ no, title, artilce })=>{
	return (
		<li><Link to={'/data/article/'+no}>{ title }</Link></li>
	)
});

export default Item;