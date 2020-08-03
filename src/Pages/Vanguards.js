import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Theme from '../Theme/Theme';
import Header from '../Components/Header';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		vanguards:state.vanguards,
	}
}
const mapDispatchToProps = (dispatch) => {
	return { 
		submit: vanguards => dispatch({
			type: "SUBMITVANGUARDS",
			vanguards: vanguards
		})
	}
}

const styles = Theme => ({
	fullScreen:{
		width:'100%',
		height:'100%',
	},
	pad:{
		padding:10,
	},
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
	fullWidth:{
		'width':'100%'
	}
})

const ConnectedVanguards = (props) => {
	const { classes } = props;
	const [ state, setState ] = useState({
		location:"Vanguards",
		players:props.players,
		vanguards:props.vanguards,
	})
	const handleChange = (id, event) => {
		const tempPlayers = state.players;
		tempPlayers[id-1].vanguardID = event.target.value;
		setState({
			...state,
			players:tempPlayers
		})
	}
	return(
		<div className={classes.fullScreen + " " + classes.pad}>
			<Header loc={state.location}/>
			{props.players.map((el, index) => (
				<Card className={classes.playerCard} key={index}>
					<span>{el.name}</span>
					<FormControl variant="outlined">
						<InputLabel id={el.name + "-Vanguard-Label"}>Vanguard</InputLabel>
						<Select
          					labelId={el.name + "-Vanguard-Label"}
          					id={el.name+"-Vanguard"}
          					label="Vanguard"
							value={el.vanguardID === undefined ? '' : el.vanguardID}
							onChange={(event)=>handleChange(el.id,event)}
        				>
							{props.vanguards.map((vl, index) => (
								<MenuItem key={index} value={vl.id}>
									{vl.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Card>
			))}
			<Button color="primary" variant="contained" className={classes.fullWidth} onClick={()=>props.submit(state.players)}>
				Submit
			</Button>
		</div>
	)
}

const Vanguards = connect(mapStateToProps, mapDispatchToProps)(ConnectedVanguards);

export default withStyles(styles)(Vanguards);