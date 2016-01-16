import 'babel-register';
import is from 'check-types';
import test from 'ava';

import Pagarme from '../src/pagarme';
import Plan from '../src/plan';

test.beforeEach(() => Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9'));

test('create a plan', async t => {
	const plan = new Plan({
		amount: 1000,
		days: 30,
		name: 'test-api'
	});

	const p = await plan.create();

	t.ok(is.not.undefined(p));
	t.ok(is.object(p));
	t.is(p.object, 'plan');
	t.is(p.amount, 1000);
	t.is(p.days, 30);
	t.is(p.name, 'test-api');
});

test('create a plan without the amount property', t => {
	const plan = new Plan({
		days: 30,
		name: 'test-api'
	});

	t.throws(() => plan.create());
});

test('create a plan without the days property', t => {
	const plan = new Plan({
		amount: 1000,
		name: 'test-api'
	});

	t.throws(() => plan.create());
});

test('create a plan without the name property', t => {
	const plan = new Plan({
		amount: 1000,
		days: 30
	});

	t.throws(() => plan.create());
});

test('create a plan with an id', t => {
	const plan = new Plan({
		amount: 1000,
		days: 30,
		name: 'test-api',
		id: 25000
	});

	t.throws(() => plan.create());
});

test('find all plans', async t => {
	const plan = new Plan();

	const plans = await plan.findAll();

	t.ok(is.not.undefined(plans));
	t.ok(is.array(plans));
	t.is(plans[0].object, 'plan');
});

test('find a plan with an id', async t => {
	const plan = new Plan({
		id: 25937
	});

	const p = await plan.find();

	t.ok(is.not.undefined('object'));
	t.ok(is.object(p));
	t.is(p.object, 'plan');
	t.is(p.id, 25937);
});

test('find a plan passing an id', async t => {
	const plan = new Plan();

	const p = await plan.find(25937);

	t.ok(is.not.undefined('object'));
	t.ok(is.object(p));
	t.is(p.object, 'plan');
	t.is(p.id, 25937);
});

test('find a plan with no id', t => {
	const plan = new Plan();

	t.throws(() => plan.find());
});
