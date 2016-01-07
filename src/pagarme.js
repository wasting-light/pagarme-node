import is from 'check-types'; 

class Pagarme {
	static setApiKey(key) {
		if (is.not.assigned(key) || is.not.string(key)) {
			throw new Error('You must provide an api key');
		}

		process.env.PAGARME_AK = key;
	}

	static getApiKey() {
		return process.env.PAGARME_AK;
	}

	static unsetApiKey() {
		delete process.env.PAGARME_AK;
	}
}

export default Pagarme;
