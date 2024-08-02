import * as assert from 'assert';
import * as index from '../index';

suite('Exports', function () {
    test('version ', function () {
        assert.ok(index.version && index.version.length > 0);
    });
});