import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import MatchLarge from '../Components/MatchLarge';
import MatchLargeV2 from '../Components/MatchLargeV2';
import Button from '@material-ui/core/Button';
import Theme from '../Theme/Theme';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		matches:state.matches,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		pairFinalsRound2:()=>dispatch({
			type:"PAIRFINALSROUND2",
		})
	}
}

const styles = (Theme) => ({
	fullScreen:{
		width:'100%',
		height:'100%',
		backgroundColor:'#052429',
		'text-align':'center',
		display:'flex',
		'flex-direction':'column',
	},
	largeMatches:{
		'flex-grow':1,
		display:'flex',
		fontSize:20,
		color:'white',
		[Theme.breakpoints.down('sm')]:{
			'flex-direction':'column',
		}
	},
	leftSide:{
		width:'50%',
		padding:5,
		[Theme.breakpoints.down('sm')]:{
			paddingBottom:0,
			width:'100%',
			'flex-grow':1,
		}
	},
	rightSide:{
		width:'50%',
		padding:5,
		[Theme.breakpoints.down('sm')]:{
			paddingTop:0,
			width:'100%',
			'flex-grow':1,
		}
	},
})

const ConnectedFinalRound1 = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"FinalRound1",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.largeMatches}>
				<div className={classes.leftSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.finalsRoundOne.Matches.map((el,index)=>
							index < 2 ?
								<MatchLargeV2 match={el} index={index} key={index} group="finalsRoundOne" /> : ''
						)
					}
				</div>
				<div className={classes.rightSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.finalsRoundOne.Matches.map((el,index)=>
							index > 1 ?
								<MatchLargeV2 match={el} index={index} key={index} group="finalsRoundOne" /> : ''
						)
					}
				</div>
			</div>
			<Button color="primary" variant="contained" className={classes.fullWidth} onClick={()=>props.pairFinalsRound2()}>
				Pair Finals Round 2
			</Button>
		</div>
	)
}

const FinalRound1 = connect(mapStateToProps, mapDispatchToProps)(ConnectedFinalRound1);

export default withStyles(styles)(FinalRound1);