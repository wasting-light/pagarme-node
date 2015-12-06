import is from 'check-types'; 

class Pagarme {
	static setApiKey(key) {
		if (is.not.assigned(key) || is.not.string(key)) {
			throw new Error();
		}

		process.env.PAGARME_AK = key;
	}

	static getApiKey() {
		return process.env.PAGARME_AK;
	}

	static unsetApiKey() {
		// if (process.env.PAGARME_AK) process.env.PAGARME_AK = undefined;
		delete process.env.PAGARME_AK;
	}
}

export default Pagarme;
