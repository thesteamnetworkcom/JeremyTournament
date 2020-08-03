import { PAIRMATCHONE } from '../Actions/MatchActions';

const PairMatch1 = (store) => (next) => (action) => {
	switch(action.type){
		case PAIRMATCHONE:
			next(action);
		default:
			console.log("MIDDLEWARE");
			next(action);
	}
}
			
export default PairMatch1;