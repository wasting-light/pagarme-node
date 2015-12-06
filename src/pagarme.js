import is from 'is_js'; 

class Pagarme {
	static setApiKey(key) {
		if (is.undefined(key) || is.not.string(key) || is.empty(key)) {
			throw new Error();
		}

		process.env.PAGARME_AK = key;
	}

	static getApiKey() {
		return process.env.PAGARME_AK;
	}
}

export default Pagarme;
