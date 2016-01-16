import 'babel-register';
import test from 'ava';

import Pagarme from '../src/pagarme';

test.beforeEach(() => Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9'));

test('set an api key', t => {
	t.doesNotThrow(() => Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9'));
});

test('set an empty api key', t => {
	t.throws(() => Pagarme.setApiKey());
});

test('set a non-string api key', t => {
	t.throws(() => Pagarme.setApiKey([2, 3]));
});

test('get an api key', t => {
	t.is(Pagarme.getApiKey(), 'ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9');
});
