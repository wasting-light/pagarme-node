import assert from 'power-assert';
import is from 'check-types'

import Pagarme from '../src/pagarme';
import Plan from '../src/plan';

describe.only('Plan', () => {
	beforeEach(() => Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9'));

	describe('#constructor', () => {
		it('should throw an error when no api key is found', () => {
			Pagarme.unsetApiKey();

			assert.throws(() =>	new Plan(), Error);
		});
	});
});

