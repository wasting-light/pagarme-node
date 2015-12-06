import is from 'is_js'; 

export default class Pagarme {
	static setApiKey(key) {
		if (is.undefined(key) || is.not.string(key) || is.empty(key)) {
			throw new Error();
		}

		process.env.PAGARME_AK = key;
	}

	static getApiKey() {
		if (is.not.existy(process.env.PAGARME_AK)) {
			throw new Error();
		}

		return process.env.PAGARME_AK;
	}
}
