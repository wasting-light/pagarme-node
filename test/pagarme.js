import assert from 'power-assert';
import is from 'check-types';
import Pagarme from '../src/pagarme';

describe('Pagarme', () => {
	describe('#getApiKey', () => {
		it('should throw an error when the api key is not passed', () => {
			assert.throws(() =>	Pagarme.setApiKey(), Error);		
		});

		it('should throw an error when the api key is not a string', () => {
			assert.throws(() =>	Pagarme.setApiKey([20, 30]), Error);		
		});
	});

	describe('#setApiKey', () => {
		before(() => Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9'));

		it('should return an non empty string as the api key', () => {
			assert.ok(is.string(Pagarme.getApiKey()));
		});
	});

	describe('#unsetApiKey', () => {
		before(() => Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9'));

		it('should unset the api key', () => {
			Pagarme.unsetApiKey();		

			assert.ok(is.undefined(Pagarme.getApiKey()));
		});	
	});
});

