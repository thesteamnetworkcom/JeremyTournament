import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Theme from '../Theme/Theme';
import Header from '../Components/Header';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		pair: () => dispatch({
			type: "PAIRMATCHONE",
		})
	}
	
}
const styles = Theme => ({
	playerCard:{
		'margin-bottom':10,
		padding:10,
		display:'flex',
		'&> div':{
			'flex-grow':1
		},
		'&> span':{
			'width':80,
		}
	},
	fullScreen:{
		width:'100%',
		height:'100%',
	},
	pad:{
		padding:10,
	},
	fullWidth:{
		'width':'100%'
	}
})

const ConnectedJumpstartDraft = (props) => {
	const { classes } = props;
	const [ state, setState ] = useState({
		location:"JumpstartDraft",
		players:props.players,
	})
	return(
		<div className={classes.fullScreen + " " + classes.pad}>
			<Header loc={state.location}/>
			<div>3x Jumpstart Packs</div>
			<div>
				Select your favorite 2 packs and shuffle them together to create your draft deck.
			</div>
			<div>
				No substituting. No sideboards.
			</div>
			<Button color="primary" variant="contained" className={classes.fullWidth}>
				Pair Match 1
			</Button>
		</div>
	)
}

const JumpstartDraft = connect(mapStateToProps, mapDispatchToProps)(ConnectedJumpstartDraft);

export default withStyles(styles)(JumpstartDraft);