import is from 'check-types';

import Pagarme from './pagarme';
import Request from './request';

let request;

class Plan {
    constructor(plan) {
        Object.assign(this, plan);
        request = new Request();
    }

    create() {
        if (is.undefined(this.amount)) {
            throw new Error('The plan must have the property amount');
        }

        if (is.undefined(this.days)) {
            throw new Error('The plan must have the property days'); 
        }

        if (is.undefined(this.name)) {
            throw new Error('The plan must have the property name');
        }

        if (is.not.undefined(this.id)) {
            throw new Error('The plan can\'t have the property id');
        }

        return request.post('plans', this)
            .then(plan => {
                Object.assign(this, plan)
                return plan;
            });
    }

    findAll(query) {
        return request.get('plans', query);	
    }

    find(id) {
        id = id || this.id;

        if (is.undefined(id)) {
            throw new Error('You must provide an id');
        }

        return request.get('plans/' + id, this)
            .then(plan => {
                Object.assign(this, plan)
                return plan;
            });

    }

    update(properties) {
        return request.put('plans/' + this.id, properties);    
    }
}

export default Plan;
