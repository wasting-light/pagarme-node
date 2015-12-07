import request from 'request-promise';
import is from 'check-types';
import Pagarme from './pagarme';

class Request {
	constructor() {
		if (is.undefined(Pagarme.getApiKey())) {
			throw new Error();	
		}

		this.api_key = Pagarme.getApiKey();
		this.api_uri = 'https://api.pagar.me/1/';
	}

	get(path, query) {
	
	}

	post(path, body, query) {
	
	}

	put(path, body, query) {
	
	}

	delete(path, query) {
	
	}
}

export default Request;
