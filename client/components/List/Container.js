import React, { memo, useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onSelect } from './../../reducers/content'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableFooter from '@material-ui/core/TableFooter'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'

const Container = memo(( { initPage, initRowsPerPage } )=>{
	const list = useSelector(( state )=>( state.content.list ), []);
	const maxLength = useSelector(( state )=>( state.content.maxLength ), []);

	const [ page, setPage ] = useState( initPage );
	const [ rowsPerPage, setRowsPerPage ] = useState( initRowsPerPage );

	const dispatch = useDispatch();
	const getList = useCallback(( reqOption )=>{
		dispatch( onSelect( reqOption ) );
	}, [ dispatch ]);

	const columns = [
		{ 'id': 'no', 'name': 'no', 'label': '번호', 'link': (linkPage)=>( '/list/'+linkPage ), 'handler': null },
		{ 'id': 'title', 'name': 'title', 'label': '제목', 'link': null, 'handler': null },
		{ 'id': 'article', 'name': 'article', 'label': '내용', 'link': null, 'handler': null }
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
	
	// For List
	useEffect(()=>{
		console.log('[loaded_data]', list);
	}, [ list ]);

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
		<>
			<Table>
				<TableHead>
					<TableRow>
					{ columns.map(( col )=>(<TableCell key={col.id}>{col.label}</TableCell>)) }
					</TableRow>
				</TableHead>
				<TableBody>
				{ 
					list.map(( data, row )=>(
						<TableRow key={ data.no }>
						{
							columns.map((col)=>(
								<TableCell key={col.id+String(row)}>
									<span>{data[col.id]}</span>
								</TableCell>
							))
						}
						</TableRow>
					))
				}
				</TableBody>
				<TableFooter>
				</TableFooter>
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
		</>
	)
});

export default Container;