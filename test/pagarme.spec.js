import assert from 'power-assert';
import is from 'is_js';

import Pagarme from '../src/pagarme';

describe('Pagarme', () => {
	describe('#getApiKey()', () => {
		it('should throw an error when the api key is not passed', () => {
			assert.throws(() => {
				Pagarme.setApiKey();
			}, Error);		
		});

		it('should throw an error when the api key is not a string', () => {
			assert.throws(() => {
				Pagarme.setApiKey([20, 30]);
			}, Error);		
		});

		it('should throw an error when the api key is empty', () => {
			assert.throws(() => {
				Pagarme.setApiKey('');
			}, Error);		
		});
	});

	describe.only('#setApiKey()', () => {
		it('should throw an error when the api key is not existy', () => {
			process.env.PAGARME_AK = undefined;

			assert.throws(() => {
				Pagarme.getApiKey();	
			});
		});	

		it('should return an non empty string as the api key', () => {
			Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9');
			
			let api_key = Pagarme.getApiKey();

			assert.ok(() => {
				return is.string(api_key);
			});
		})
	});
});

