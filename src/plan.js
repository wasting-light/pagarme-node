import is from 'check-types';

import Pagarme from './pagarme';
import Request from './request';

let request;

class Plan {
	constructor(plan) {
		if (is.undefined(Pagarme.getApiKey())) {
			throw new Error();
		}

		Object.assign(this, plan);
		request = new Request();
	}

	save() {

	}

	findAll(query) {
		return request
			.get('plans', query);	
	}

	find(id) {
	}

	update() {
	
	}
}

export default Plan;
