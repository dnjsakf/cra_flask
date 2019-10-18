import React, { useState, useCallback, useEffect, memo } from 'react'
import { withRouter } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import List from './List'

function TabPanel({ children, value, index, ...other }) {
  return (
    <Typography
		component="div"
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${ index }`}
		aria-labelledby={`simple-tab-${ index }`}
		{...other}
    >
		<Box p={1}>{children}</Box>
    </Typography>
  );
}

function setProps( tabId ) {
  return {
    id: `simple-tab-${ tabId }`,
    'aria-controls': `simple-tabpanel-${ tabId }`,
  };
}

const useStyles = makeStyles( ( theme )=>({
	tabMenu: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	}
}));

const Container = memo(({ history })=>{
	const classes = useStyles();
	const [ tabId, setTabId ] = useState( 0 );

	const handleSelectTab = useCallback( ( e, nextTab )=>{
		setTabId( nextTab );
	}, []);
	
	useEffect(()=>{
		console.log( '[change tab]', tabId );
	},[ tabId ]);
	
	return (
		<div className={classes.tabMenu}>
			<AppBar position="static">
				<Tabs value={ tabId } onChange={ handleSelectTab }>
					<Tab label="Article" {...setProps( 0 )} />
					<Tab label="Board" {...setProps( 1 )} />
					<Tab label="Notice" {...setProps( 2 )} />
				</Tabs>
			</AppBar>
			<TabPanel value={ tabId } index={ 0 }>
				<List initPage={ 1 } initRowsPerPage={ 5 } />
			</TabPanel>
			<TabPanel value={ tabId } index={ 1 }>
				Board
			</TabPanel>
			<TabPanel value={ tabId } index={ 2 }>
				Notice
			</TabPanel>
		</div>	
	)
});

export default withRouter(Container);