import { configureStore } from "@reduxjs/toolkit";
import PlayerReducer from "./Reducers/PlayerReducer";
import MatchReducer from "./Reducers/MatchReducer";
import StepsReducer from "./Reducers/StepsReducer";
import VanguardReducer from "./Reducers/VanguardReducer";

import PairMatch1 from "./Middleware/PairMatch1";

const middleware = [
	PairMatch1
];

const Store = configureStore({
	reducer:{
		players:PlayerReducer,
		match:MatchReducer,
		steps:StepsReducer,
		vanguards:VanguardReducer,
	},
	middleware,
})

export default Store;