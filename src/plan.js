import is from 'check-types';

import Pagarme from './pagarme';
import Request from './request';

class Plan {
	constructor(plan) {
		if (is.undefined(Pagarme.getApiKey())) {
			throw new Error();
		}

		this.plan = plan;
		this.request = new Request();	
	}

	save() {
	
	}

	findAll(query) {

	}

	find(id) {
	}

	update() {
	
	}
}

export default Plan;
