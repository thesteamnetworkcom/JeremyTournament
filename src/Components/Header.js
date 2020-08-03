import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Theme from '../Theme/Theme';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
	return {
		steps:state.steps,
	}
};

const styles = Theme => ({
	headerWrapper:{
		display:'flex',
		'& > *':{
			'flex-grow':1,
			'text-align':'center',
		},
	}
});

const ConnectedHeader = (props) => {
	const { classes } = props;
	return(
		<div className={classes.headerWrapper}>
			<Link to={"/"+
				props.steps[props.steps[props.loc].prev].name}>
				<h2>Back</h2>
				<h5>({props.steps[props.steps[props.loc].prev].displayName})</h5>
			</Link>
			<Link to="/">Round Menu</Link>
			<Link to={"/"+
				props.steps[props.steps[props.loc].forward].name}>
				<h2>Advance</h2>
				<h5>({props.steps[props.steps[props.loc].forward].displayName})</h5>
			</Link>
		</div>
	)
}

const Header = connect(mapStateToProps)(ConnectedHeader);

export default withStyles(styles)(Header);