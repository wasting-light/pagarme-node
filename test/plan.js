import assert from 'power-assert';
import is from 'check-types'

import Pagarme from '../src/pagarme';
import Plan from '../src/plan';

describe.only('Plan', () => {
	beforeEach(() => Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9'));

	// describe('#constructor', () => {
	// 	it('should throw an error when no api key is found', () => {
	// 		Pagarme.unsetApiKey();
    //
	// 		assert.throws(() =>	new Plan(), Error);
	// 	});
    //
	// 	it('should create a plan object', () => {
	// 		let plan = new Plan({
	// 			amount: 1000,
	// 			days: 30,
	// 			name: 'test-api'
	// 		});	
    //
	// 		assert.equal(plan.amount, 1000);
	// 		assert.equal(plan.days, 30);
	// 		assert.equal(plan.name, 'test-api');
	// 	});
	// });
    //
    // describe('#create', () => {
    //     it('should create a plan and return a plan object', (done) => {
	// 		let plan = new Plan({
	// 			amount: 1000,
	// 			days: 30,
	// 			name: 'test-api'
	// 		});	
    //
    //         plan.create()
    //             .then(plan => {
    //                 assert.ok(is.not.undefined(plan));
    //                 assert.ok(is.object(plan));
    //                 assert.equal(plan.object, 'plan');
    //                 assert.equal(plan.amount, 1000);
    //                 assert.equal(plan.days, 30);
    //                 assert.equal(plan.name, 'test-api');
    //                 done();
    //             })
    //             .catch(err => done(err));
    //     });
    //
    //     it('should throw an error when the mandatory fields are undefined', () => {
    //         let plan = new Plan({});
    //
    //         assert.throws(() => plan.create());
    //     });
    //
    //     it('should throw an error when the plan id is not undefined', () => {
    //         let plan = new Plan({
    //             amount: 1000,
    //             days: 30,
    //             name: 'test-api',
    //             id: 25000
    //         });
    //
    //         assert.throws(() => plan.create());
    //     });
    // });
    //
	// describe('#findAll', () => {
	// 	it('should return an array of plans', (done) => {
	// 		let plan = new Plan()
    //
	// 		plan
	// 		.findAll()
	// 		.then(plans => {
	// 			assert.ok(is.not.undefined(plans));
	// 			assert.ok(is.array(plans));
	// 			assert.equal(plans[0].object, 'plan');
	// 			done();
	// 		})
	// 		.catch(err => done(err));
	// 	});
	// });

    describe('#find', () => {
        it('should return a specific plan when the plan id is not undefined', (done) => {
            let plan = new Plan({
                amount: 1000,
                days: 30,
                name: 'test-api',
                id: 25937
            });

            plan.find()
                .then(plan => {
                    assert.ok(is.not.undefined(plan));
                    assert.ok(is.object(plan));
                    assert.equal(plan.object, 'plan');
                    assert.equal(plan.id, 25937);
                    assert.equal(plan.amount, 1000);
                    assert.equal(plan.days, 30);
                    assert.equal(plan.name, 'test-api');
                    done();
                })
                .catch(err => done(err));
        });

        it('should return a specific plan when the id is passed as an argument', (done) => {
            let plan = new Plan({
                amount: 1000,
                days: 30,
                name: 'test-api'
            });

            plan.find(25937)
                .then(plan => {
                    assert.ok(is.not.undefined(plan));
                    assert.ok(is.object(plan));
                    assert.equal(plan.object, 'plan');
                    assert.equal(plan.id, 25937);
                    assert.equal(plan.amount, 1000);
                    assert.equal(plan.days, 30);
                    assert.equal(plan.name, 'test-api');
                    done();
                })
                .catch(err => done(err));
        });

        it('should throw an error when the id is undefined', () => {
            let plan = new Plan({
                amount: 1000,
                days: 30,
                name: 'test-api'
            });

            assert.throws(() => plan.find());
        });
    });
});

