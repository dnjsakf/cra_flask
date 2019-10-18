import React, { memo, useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onSelect } from './../../reducers/content'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'

import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'

const List = memo(( { initPage, initRowsPerPage } )=>{
	const { list, status, maxLength } = useSelector(( state )=>( state.content ), []);	

	const [ page, setPage ] = useState( initPage );
	const [ rowsPerPage, setRowsPerPage ] = useState( initRowsPerPage );

	const dispatch = useDispatch();
	const getList = useCallback(( reqOption )=>{
		dispatch( onSelect( reqOption ) );
	}, [ dispatch ]);

	const columns = [
		{ 'id': 'no', 'name': 'no', 'label': '번호', 'handler': null },
		{ 'id': 'title', 'name': 'title', 'label': '제목', 'link': ( linkPage )=>( '/list/'+linkPage ) },
		{ 'id': 'article', 'name': 'article', 'label': '내용', 'handler': ( e )=>{ alert( 'hi' );} }
	];
	
	const handleChangePage = useCallback(( e, nextPage )=>{
		e.preventDefault();

		setPage(nextPage);
	}, [ page ]);

	const handleChangeRowsPerPage = useCallback(( e )=>{
		e.preventDefault();

		setRowsPerPage( +e.target.value )
	}, [ rowsPerPage ]);

	// For RowsPerPage
	useEffect(()=>{
		console.log('[rowsPerPage]',rowsPerPage );
	}, [ rowsPerPage ]);
	
	// For Status
	useEffect(()=>{
		console.log('[loaded status]', status);
	}, [ status ]);

	// For Page
	useEffect(()=>{
		console.log( '[loadding...]' );
		getList({
			method: 'get'
			, url: 'http://localhost:3000/data/list'
			, params: {
				'page': page
				, 'rowsPerPage': rowsPerPage
			} 
		});
	}, [ page ]);
	
	return (
		<Paper>
			<Table>
				<TableHead>
					<TableRow>
					{ columns.map(( col )=>(<TableCell key={col.id}>{col.label}</TableCell>)) }
					</TableRow>
				</TableHead>
				<TableBody>
				{
					status === 0 
					? <TableRow><TableCell><span>Loadding...</span></TableCell></TableRow>	// HOC로 구현하기
					: list.map(( data, row )=>(
						<TableRow key={ data.no }>
						{
							columns.map((col)=>(
								<TableCell key={col.id+String(row)}>
								{
									col.link
										? <Link to={{ pathname: col.link(data.no) }}>{data[col.id]}</Link>
										: col.handler
											? <span><Button onClick={ col.handler }>{data[col.id]}</Button></span>
											: <span>{data[col.id]}</span>
								}
								</TableCell>
							))
						}
						</TableRow>
					))
				}
				</TableBody>
			</Table>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={maxLength}
				rowsPerPage={rowsPerPage}
				page={page}
				backIconButtonProps={{
					'aria-label': 'previous page',
				}}
				nextIconButtonProps={{
					'aria-label': 'next page',
				}}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
		</Paper>
	)
});

export default List;