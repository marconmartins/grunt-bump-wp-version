# grunt-bump-wp-version

grunt-bump-wp-version is a grunt task to bump the WordPress theme version. The WordPress theme version is included in the `style.css` file inside the theme folder.

*2.3.5* => *2.3.6*
*2.3.5-test* => *2.3.5-test.1*


## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bump-wp-version --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bump-wp-version');
```

## The "bump_wp_version" task

### Overview
In your project's Gruntfile, add a section named `bump_wp_version` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bump_wp_version: {
    dev: {
      options: {},
      files: {
        '../../style.css': '../../style.css',
      },
    }
  }
});
```

### Usage Examples

In this example, if the source file (style-source.css) has the version tag: `Version: 1.0.1`, then the output file (style-output.css) will have `Version: 1.0.2`.


```js
grunt.initConfig({
  bump_wp_version: {
    dev: {
      options: {},
      files: {
        '../../style-output.css': '../../style-source.css',
      },
    }
  }
});
```



## Release History
_(Nothing yet)_
