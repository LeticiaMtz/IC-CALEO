const { getTags, getTag, postTag, putTag, deleteTag } = require('../server/routes/vehiculo');
const assert = require('assert');

describe('tags', function () {
    it('How many parameter wait getTags function', function () {
        assert.strictEqual(getTags.length, 1)
    });
    it('How many parameter wait getTags function', function () {
        assert.strictEqual(getTag.length, 1)
    });
    it('How many parameter wait getTags function', function () {
        assert.strictEqual(postTag.length, 7)
    });
    it('How many parameter wait getTags function', function () {
        assert.strictEqual(putTag.length, 8)
    });
    it('How many parameter wait getTags function', function () {
        assert.strictEqual(deleteTag.length, 2)
    });
})