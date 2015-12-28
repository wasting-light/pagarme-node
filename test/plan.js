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

	describe('#findAll', () => {
		it('should return an array of plans', (done) => {
			let plan = new Plan()

			plan
				.findAll()
				.then(plans => {
					console.log(plans);
					assert.ok(is.not.undefined(plans));
					assert.ok(is.array(plans));
					assert.ok(is.equal(plans[0].object, 'plan'));
					done();
				})
				.catch(err => done(err));
		});
	});
});

