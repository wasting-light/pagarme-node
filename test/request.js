import 'babel-register';
import is from 'check-types';
import test from 'ava';

import Pagarme from '../src/pagarme';
import Request from '../src/request';

test.beforeEach(t => Pagarme.setApiKey('ak_test_TSgC3nvXtdYnDoGKgNLIOfk3TFfkl9'));

test('create a request with no api key', t => {
    Pagarme.unsetApiKey();

    t.throws(() => new Request());
});
