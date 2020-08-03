import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import Theme from '../Theme/Theme';
import Image from '../Assets/BackgroundImages/Red_Background.jpg';

import { Link } from 'react-router-dom';

const mapStateToProps = state => {
	return { 
		players:state.players,
		steps:state.steps,
	};
}

const styles = Theme => ({
	fullScreen:{
		width:'100%',
		height:'100%',
		backgroundImage:`url(${Image})`,
		backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
		backgroundSize: "cover",
			backgroundAttachment: "fixed",
		display:'flex',
		'flex-direction':'column',
		'justify-content':'center',
		'align-items':'center',
	},
	pad:{
		padding:10,
	},
	title:{
		color:'white',
		'text-align':'center',
	},
	dividerColor:{
		backgroundColor:'rgba(200,200,200,.3)',
		height:5,
	},
	marginTop:{
		'margin-top':10,
	}
})

const ConnectedHome = (props) => {
	const { classes } = props;
	const [ state, setState ] = useState({
		location:"Home",
	})
	return(
		<div className={classes.fullScreen + " " + classes.pad}>
			<div className={classes.title}>
				<div>
					<h2>Jeremy's Bachelor Party</h2>
				</div>
				<Divider classes={{root: classes.dividerColor}} variant="middle" />
				<div>
					<h1>
						The Tournament to End All Tournaments
					</h1>
				</div>
				<Divider classes={{root: classes.dividerColor}} variant="middle" />
				<div>
					<h3>
						FEATURING:
					</h3>
				</div>
				<div>
					{props.players.map((el,index) => (
						<div key={index}>
							<span>{el.name}</span>
						</div>
					))}
				</div>
				<Button className={classes.marginTop} variant="contained">
					<Link to={"/"+props.steps[props.steps[state.location].forward].name}>Let's Go</Link>
				</Button>
			</div>
		</div>
	)
}

const Home = connect(mapStateToProps)(ConnectedHome);

export default withStyles(styles)(Home);