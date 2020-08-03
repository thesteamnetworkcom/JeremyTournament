import Players from '../../Assets/Players';
import { SUBMITNAMES } from '../Actions/PlayerActions';
import { SUBMITVANGUARDS } from '../Actions/PlayerActions';

const initialState = Players.Players;

function PlayerReducer(state = initialState, action){
	switch(action.type){
		case SUBMITNAMES:
			var tempPlayers = Object.assign([],state);
			for(const el of action.names){
				tempPlayers[el.id-1].charName = el.charName
			};
			return tempPlayers;
		case SUBMITVANGUARDS:
			var tempPlayers = Object.assign([], state);
			for(const el of action.vanguards){
				tempPlayers[el.id-1].vanguardID = el.vanguardID
			};
			return tempPlayers;
		default:
			return state;
	}
}

export default PlayerReducer;