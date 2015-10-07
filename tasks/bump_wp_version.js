/*
 * grunt-bump-wp-version
 * https://github.com/marconmartins/grunt-bump-wp-version
 *
 * Copyright (c) 2015 Marco Martins
 * Licensed under the GPL2 license.
 */

'use strict';

module.exports = function( grunt ) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask( 'bump_wp_version', 'Bump the theme version.', function() {

		this.files.forEach( function( f ) {

			// Concat specified files.
			var src = f.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function(filepath) {
				// Read file source.
				return grunt.file.read(filepath);
			});

			var re = /^Version: (.*?)$/gm;

			var matches;
			matches = re.exec( src[0] );

			if ( ! matches || matches.length === 0 ) {
				grunt.log.warn('Source file " does not have the theme version in the header.');
				return false;
			}

			// Get the first match.
			var version      = matches[0];
			var versionSplit = version.split('.');
			var versionPatch = versionSplit.pop(); // Version patch is the latest part of the version.

			var newVersionPatch = '';

			// 2.3.5 => 2.3.6
			// 2.3.5a => 2.3.5a.1
			if ( isNaN( versionPatch ) ) {
				newVersionPatch = versionPatch + "." + 1;

			} else {
				newVersionPatch = ( versionPatch * 1 ) + 1;
			}

			versionSplit.push( newVersionPatch );

			var newVersion = versionSplit.join('.');

			var newSrc = src[0];

			//function newVersionFun(match) {
			//	grunt.log.writeln( match + ' => ' + newVersion );
			//	return match.toLowerCase();
			//}

			newSrc = newSrc.replace( re, newVersion );

			grunt.file.write( f.dest, newSrc );

			grunt.log.writeln( f.dest + ' version bumped.');

			return true;

		});

	});

};
