import React, { memo, useState, useCallback, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { onSelect } from './../../reducers/content'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableFooter from '@material-ui/core/TableFooter'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import Button from '@material-ui/core/Button'

import { ItemHeader, ItemWrapper, NumPaigination } from './Item'

const useStyles = makeStyles(( theme )=>({
	buttonWrraper: {
		width: '100%'
		, backgroundColor: theme.palette.background.paper,
	}
}));

const List = memo(( { initPage, initRowsPerPage, history } )=>{

	const { list, status, maxLength, navPage } = useSelector(( state )=>( state.content ), []);	
	const [ page, setPage ] = useState( initPage );
	const [ rowsPerPage, setRowsPerPage ] = useState( initRowsPerPage );

	const classes = useStyles();
	const columns = [
		{ 'id': 'no', 'name': 'no', 'label': '번호', 'handler': null },
		{ 'id': 'title', 'name': 'title', 'label': '제목', 'link': ( linkPage )=>( '/list/'+linkPage ) },
		{ 'id': 'article', 'name': 'article', 'label': '내용', 'handler': ( e )=>{ alert( 'hi' );} }
	];

	const dispatch = useDispatch();
	const getList = useCallback(( reqOption )=>{
		dispatch( onSelect( reqOption ) );
	}, [ dispatch ]);

	const handleChangePage = useCallback(( e, nextPage )=>{
		e.preventDefault();

		history.push('/list/' + (nextPage + 1));

		setPage( nextPage + 1 );
	}, [ page ]);

	const handleChangeRowsPerPage = useCallback(( e )=>{
		e.preventDefault();

		setRowsPerPage( +e.target.value )
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
			, url: 'http://localhost:3000/data/list/'+page
			, params: {
				'page': page
				, 'rowsPerPage': rowsPerPage
			} 
		});
	}, [ page, rowsPerPage ]);
	
	return (
		<Paper>
			<Table>
				<TableHead>
					<ItemWrapper columns={ columns } isHeader={ true }/>
				</TableHead>
				<TableBody>
				{ 
					list.map(( data )=>( 
						<ItemWrapper key={ 'row-'+data.no } columns={ columns } data={ data } /> 
					))
				}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan='3' padding='none' align='right'>
							<Button>Insert</Button>
							<NumPaigination />
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
			<TablePagination
				rowsPerPageOptions={ [5, 10, 25] }
				component="div"
				count={ maxLength }
				rowsPerPage={ rowsPerPage }
				page={ navPage }
				backIconButtonProps={{
					'aria-label': 'previous page',
				}}
				nextIconButtonProps={{
					'aria-label': 'next page',
				}}
				onChangePage={ handleChangePage }
				onChangeRowsPerPage={ handleChangeRowsPerPage }
				/>
		</Paper>
	)
});

export default withRouter(List);