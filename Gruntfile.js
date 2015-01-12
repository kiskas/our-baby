/**
 * Grunt compile project
 * @author polax
 * @date: 14.09.13
 *
 * For lunch task need run cmd in folder of the project
 * Install Node js
 * npm install -g grunt-cli
 * npm install grunt-contrib-jshint --save-dev
 * npm install grunt-contrib-uglify --save-dev
 * npm install grunt-contrib-concat --save-dev
 * npm install grunt-contrib-cssmin --save-dev
 * npm install grunt-assets-versioning --save-dev
 */
module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'scripts/src/*.js']
        },
        concat: {
            options: {
                separator: ';'
            },
            basic: {
                src: ['scripts/user/config.js', 'scripts/user/calculator.js', 'scripts/user/main.js'],
                dest: 'build/release.min.js'
            },
            extras: {
                src: ['scripts/lib/jquery-1.8.3.min.js', 'scripts/lib/bootstrap.min.js', 'scripts/lib/holder.js'],
                dest: 'build/libs.min.js'
            }
        },
        uglify: {
            options: {
            },
            dist: {
                files: {
                    'build/libs.min.js': ['build/libs.min.js'],
                    'build/release.min.js': ['build/release.min.js']
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'build/',
                ext: '.min.css'
            }
        }
        /*assets_versioning: {
         dist: {
         options: {
         multitask: 'uglify'
         }
         }
         }*/
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);
};