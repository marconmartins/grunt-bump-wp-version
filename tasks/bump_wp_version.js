/*
 * grunt-bump-wp-version
 * https://github.com/marconmartins/grunt-bump-wp-version
 *
 * Copyright (c) 2015 Marco Martins
 * Licensed under the GPL2 license.
 */

'use strict';

module.exports = function( grunt ) {


	grunt.registerMultiTask( 'bump_wp_version', 'Bump the theme version.', function() {

		this.files.forEach( function( f ) {

			var src = f.src.filter( function( filepath ) {

				// Warn on invalid source files.
				if ( ! grunt.file.exists( filepath ) ) {
					grunt.log.warn( 'Source file "' + filepath + '" not found.' );
					return false;
				} else {
					return true;
				}

			}).map(function(filepath) {
				// Read the contents of the source file.
				return grunt.file.read(filepath);
			});

			var re = /^Version: (.*?)$/m;

			var matches;
			matches = re.exec( src[0] );

			if ( ! matches || matches.length === 0 ) {
				grunt.log.warn('The source file does not have the theme version in the header.');
				return false;
			}

			// Get the first match because the version line is on top of the list.
			var version      = matches[0];
			var versionSplit = version.split('.');
			var versionPatch = versionSplit.pop(); // Version patch is the latest part of the version.

			var newVersionPatch = '';

			// 2.3.5 => 2.3.6
			// 2.3.5a => 2.3.5a.1
			if ( isNaN( versionPatch ) ) {
				newVersionPatch = versionPatch + '.' + 1;
			} else {
				newVersionPatch = ( versionPatch * 1 ) + 1;
			}

			versionSplit.push( newVersionPatch );

			var newVersion = versionSplit.join('.');

			var newSrc = src[0];

			newSrc = newSrc.replace( re, newVersion );

			grunt.file.write( f.dest, newSrc );

			grunt.log.writeln( f.dest + ' version bumped.');

			return true;

		});

	});

};
