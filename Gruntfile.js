/*
 * grunt-bump-wp-version
 * https://github.com/marconmartins/grunt-bump-wp-version
 *
 * Copyright (c) 2015 Marco Martins
 * Licensed under the GPL2 license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    bump_wp_version: {
      noversion: {
        options: {},
        files: {
          'tmp/style-noversion.css': 'test/fixtures/style-noversion.css'
        },
      },
      semversion: {
        options: {},
        files: {
          'tmp/style-semversion.css': 'test/fixtures/style-semversion.css'
        },
      },
      nonsemversion: {
        options: {},
        files: {
          'tmp/style-nonsemversion.css': 'test/fixtures/style-nonsemversion.css'
        },
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'bump_wp_version', 'nodeunit']);
  //grunt.registerTask('test', ['clean', 'bump_wp_version']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
