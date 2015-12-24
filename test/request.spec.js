import assert from 'power-assert';
import is from 'check-types'

import Request from '../src/request';
import Pagarme from '../src/pagarme';

describe.only('Request', () => {
	beforeEach(() => Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9'));

	describe('#constructor', () => {
		it('should throw an error when no api key is found', () => {
			Pagarme.unsetApiKey();

			assert.throws(() => {
				let request = new Request();
			}, Error);
		});
	});
});
