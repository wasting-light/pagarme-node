import 'babel-register';
import is from 'check-types';
import test from 'ava';

import Pagarme from '../src/pagarme';
import Plan from '../src/plan';

test.beforeEach(t => Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9'));

test('create a plan', async t => {
    let plan = new Plan({
        amount: 1000,
        days: 30,
        name: 'test-api'
    });

    let p = await plan.create();

    t.ok(is.not.undefined(p));
    t.ok(is.object(p));
    t.is(p.object, 'plan');
    t.is(p.amount, 1000);
    t.is(p.days, 30);
    t.is(p.name, 'test-api');
});

test('create a plan without the mandatory fields', t => {
    let plan = new Plan();

    t.throws(plan.create());
});

test('create a plan with an id', t => {
    let plan = new Plan({
         amount: 1000,
        days: 30,
        name: 'test-api',
        id: 25000
    });

    t.throws(plan.create());
});

test('find all plans', async t => {
    let plan = new Plan();

    let plans = await plan.findAll();

    t.ok(is.not.undefined(plans));
    t.ok(is.array(plans));
    t.is(plans[0].object, 'plan');
});

test('find a plan with an id', async t => {
    let plan = new Plan({
        id: 25937
    });

    let p = await plan.find(); 

    t.ok(is.not.undefined('object'));
    t.ok(is.object(p));
    t.is(p.object, 'plan');
    t.is(p.id, 25937);
});

test('find a plan passing an id', async t => {
    let plan = new Plan();

    let p = await plan.find(25937); 

    t.ok(is.not.undefined('object'));
    t.ok(is.object(p));
    t.is(p.object, 'plan');
    t.is(p.id, 25937);
});

test.only('find a plan with no id', t => {
    let plan = new Plan();

    t.throws(plan.find());
});
