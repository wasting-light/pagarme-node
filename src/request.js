import request from 'request-promise';
import is from 'check-types';
import Pagarme from './pagarme';

class Request {
	constructor() {
		if (is.undefined(Pagarme.getApiKey())) {
			throw new Error('You must set an api key');	
		}

		this.apiKey = Pagarme.getApiKey();
		this.apiUri = 'https://api.pagar.me/1/';

		this.request = request.defaults({
			auth: {
				user: this.apiKey,
				pass: 'x'
			},
			json: true
		});
	}

	get(path, query) {
		let options = {
			qs: query
		};

		return this.request.get(this.apiUri + path, options);
	}

	post(path, body, query) {
		let options = {
			body: body,
			qs: query
		};

		return this.request.post(this.apiUri + path, options);
	}

	put(path, body, query) {
		let options = {
			body: body,
			qs: query
		};

		return this.request.put(this.apiUri + path, options);
	}

	delete(path, query) {
		let options = {
			qs: query
		};

		return this.request.del(this.apiUri + path, options);
	}
}

export default Request;
