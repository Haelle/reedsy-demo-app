module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [{
                    expand: true,
                    src: [
                        'app/**/*.js', 
                        '!**/*.spec.js', 
                        '!**/*.annotated.js',
                        '!app/app.concat.js',
                        '!app/app.min.js',
                        '!**/bower_components/**/*.js',
                        '!**/node_modules/**/*.js'
                    ],
                    ext: '.annotated.js',
                    extDot: 'last'
                }]
            }
        },
        concat: {
            js: {
                src: [
                    './app/bower_components/jquery/dist/jquery.js',
                    './app/bower_components/angular/angular.js',
                    './app/bower_components/angular-animate/angular-animate.js',
                    './app/bower_components/angular-resource/angular-resource.js',
                    './app/bower_components/angular-route/angular-route.js',
                    './app/bower_components/angular-sanitize/angular-sanitize.js',
                    './app/bower_components/angular-translate/angular-translate.js',
                    './app/bower_components/moment/moment.js',
                    './app/bower_components/angular-moment/angular-moment.js',
                    './app/bower_components/angularUtils-pagination/dirPagination.js',
                    './app/scripts/app.annotated.js',
                    './app/scripts/config.annotated.js',
                    './app/**/*.module.annotated.js',
                    './app/**/*.component.annotated.js',
                    './app/**/*.annotated.js'
                ],
                dest: './app/app.concat.js'
            },
            css: {
                src: [
                    './app/styles/*.css'
                ],
                dest: './app/app.concat.css'
            }
        },
        uglify: {
            js: {
                src: './app/app.concat.js',
                dest: './app/app.min.js'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'app/app.min.css': [
                        'app/bower_components/bootstrap/dist/css/bootstrap.css',
                        'app/bower_components/components-font-awesome/css/font-awesome.css',
                        'app/styles/css/**/*.css', 
                        '!**/*.min.css'
                    ]
                }
            }
        },
        shell: {
            target: {
                options: {
                    stdout: true
                },
                command: [
                    "cp app/bower_components/bootstrap/fonts/* app/fonts/",
                    "cp app/bower_components/components-font-awesome/fonts/* app/fonts/",
                    "find -type f -name '*.annotated.js' -delete",
                    'rm app/app.concat.js',
                    'rm app/app.concat.css'
                    ].join('&&')
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', [
        'ngAnnotate',
        'concat',
        'uglify',
        'cssmin',
        'shell'
    ]);
};
