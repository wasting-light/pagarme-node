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
		return request
			.get(this.api_uri + path)
			.json()
			.auth(this.api_key, 'x')
			.qs(query);
	
	}

	post(path, body, query) {
		return request
			.post(this.api_uri + path)
			.json()
			.auth(this.api_key, 'x')
			.qs(query)
			.body(body);	
	}

	put(path, body, query) {
		return request
			.put(this.api_uri + path)
			.json()
			.auth(this.api_key, 'x')
			.qs(query)
			.body(body);	
	}

	delete(path, query) {
		return request
			.delete(this.api_uri + path)
			.json()
			.auth(this.api_key, 'x')
			.qs(query);	
	}
}

export default Request;
