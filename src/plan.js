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

	create() {
        if (is.undefined(this.amount)) {
            throw new Error();
        }

        if (is.undefined(this.days)) {
            throw new Error(); 
        }

        if (is.undefined(this.name)) {
            throw new Error();
        }

        if (is.not.undefined(this.id)) {
            throw new Error();
        }

        return request
            .post('plans', this)
            .then(plan => {
                Object.assign(this, plan)
                return plan;
            });
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
