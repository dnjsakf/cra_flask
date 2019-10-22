import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'

export const Item = memo(( { link, text } )=>{
	return (
		<TableCell>
		{
			link
				? ( <Button><Link to={{ pathname: link }}>{ text }</Link></Button> )
				: ( <span>{ text }</span> )
		}
		</TableCell>
	);
});

export const ItemWrapper = memo(({ columns, data, isHeader })=>{
    return (
        <TableRow>
        { 
            columns.map(( col )=>( 
                isHeader 
                ? <TableCell key={ 'col-'+col.id }>{ col.label }</TableCell>
                : <Item key={ 'col-'+col.id+data } link={ col.link && col.link( data.no ) } text={ data[col.id] }/> 
            ))
        }
        </TableRow>
    );
});


export const NumPaigination = memo(( props )=>{
	const { page, rowsPerPage, maxLength } = useSelector(({ content })=>( content ), [ ]);

	const pages = parseInt( maxLength / rowsPerPage ) + ( maxLength % rowsPerPage > 0 ? 1 : 0 );
	const startPageNum = (parseInt( pages / rowsPerPage ) * rowsPerPage)+1;
	const endPageNum = startPageNum + rowsPerPage - 1;

	console.log( startPageNum, page, endPageNum );

	return (
		Array( pages ).fill( startPageNum ).map(( el, idx )=>(
			<a key={idx}>{ el + idx }</a>
		))
	)
});