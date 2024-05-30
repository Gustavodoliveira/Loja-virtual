import {v4} from "uuid";


const createId = () =>  {
		const IdCreate = v4();
		return  IdCreate
	}

	export default createId