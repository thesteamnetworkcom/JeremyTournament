import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Theme from '../Theme/Theme';
import Header from '../Components/Header';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
	}
}

const styles = Theme => ({
	fullScreen:{
		width:'100%',
		height:'100%',
	},
	pad:{
		padding:10,
	}
})

const ConnectedMatchThree = (props) => {
	const { classes } = props;
	const [ state, setState ] = useState({
		location:"MatchThree",
	})
	return(
		<div className={classes.fullScreen + " " + classes.pad}>
			<Header loc={state.location}/>
		</div>
	)
}

const MatchThree = connect(mapStateToProps)(ConnectedMatchThree);

export default withStyles(styles)(MatchThree);