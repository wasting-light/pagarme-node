import assert from 'power-assert';
import is from 'check-types'

import Pagarme from '../src/pagarme';
import Plan from '../src/plan';

describe('Plan', () => {
	beforeEach(() => Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9'));

	describe('#constructor', () => {
		it('should throw an error when no api key is found', () => {
			Pagarme.unsetApiKey();

			assert.throws(() =>	new Plan(), Error);
		});

		it('should create a plan object', () => {
			let plan = new Plan({
				amount: 1000,
				days: 30,
				name: 'test-api'
			});	

			assert.ok(is.equal(plan.amount, 1000));
			assert.ok(is.equal(plan.days, 30));
			assert.ok(is.equal(plan.name, 'test-api'));
		});
	});

	describe('#findAll', () => {
		it('should return an array of plans', (done) => {
			let plan = new Plan()

			plan
			.findAll()
			.then(plans => {
				assert.ok(is.not.undefined(plans));
				assert.ok(is.array(plans));
				assert.ok(is.equal(plans[0].object, 'plan'));
				done();
			})
			.catch(err => done(err));
		});
	});
});

