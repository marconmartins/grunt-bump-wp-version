'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.bump_wp_version = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  noversion: function(test) {
    test.expect(1);

    var actual   = grunt.file.exists('tmp/style-noversion.css');
    var expected = false;
    test.equal(actual, expected, 'Test file with no version.');

    test.done();
  },
  nonsemversion: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('tmp/style-nonsemversion.css');
    var expected = grunt.file.read('test/expected/style-nonsemversion.css');
    test.equal(actual, expected, 'Test file with a non semantic version number.');

    test.done();
  },
  semversion: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('tmp/style-semversion.css');
    var expected = grunt.file.read('test/expected/style-semversion.css');
    test.equal(actual, expected, 'Test file with semantic version number.');

    test.done();
  },

};
