import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Theme from '../Theme/Theme';
import Header from '../Components/Header';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => {
  return { 
	  players:state.players, 
	  steps:state.steps,
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		submit: names => dispatch({
			type: "SUBMITNAMES",
			names: names
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
const ConnectedNames = (props) => {
	const { classes } = props;
	const [ state, setState ] = useState({
		location:"Names",
		players:props.players,
	})
	const handleChange = (id, event) => {
		const tempPlayers = state.players;
		if(tempPlayers[id-1].charName === undefined){
			tempPlayers[id-1].charName = '';
		};
		tempPlayers[id-1].charName = event.target.value;
		setState({
			...state,
			players:tempPlayers
		});
	}
	return(
		<div className={classes.fullScreen + " " + classes.pad}>
			<Header loc={state.location}/>
			{state.players.map((el,index) => (
				<Card className={classes.playerCard} key={index}>
					<span>{el.name}</span>
					<TextField 
						label="Character Name" 
						variant="outlined" 
						value={
							el.charName != undefined ? el.charName : ''
						}
						onChange={(event)=>handleChange(el.id, event)}
					/>
				</Card>
			))}
			<Button color="primary" variant="contained" className={classes.fullWidth} onClick={() => props.submit(state.players)}>
				Submit
			</Button>

		</div>
	)
}

const Names = connect(mapStateToProps, mapDispatchToProps)(ConnectedNames);

export default withStyles(styles)(Names);
