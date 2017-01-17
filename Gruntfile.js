module.exports = function(grunt) {
  var npm_tasks

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      public: {
        files: ['public/**', '!public/index.html'],
        tasks: ['import:index_html']
      },
    },

    import: {
      index_html: {
        src: 'public/index_import.html',
        dest: 'public/index.html'
      }
    },

    jsdoc : {
        dist : {
                src:['*.js'],
                jsdoc: './node_modules/jsdoc',
                options: {
                        destination: 'doc',
                        configure: './jsdoc.json',
                        template: './node_modules/minami'
                }
        }
    }
  })

  npm_tasks = ['grunt-import', 'grunt-contrib-watch',
    'grunt-jsdoc']

  npm_tasks.forEach(function(e){grunt.loadNpmTasks(e)})


  grunt.registerTask('index', ['import:index_html', 'watch:public'])
  grunt.registerTask('doc', 'jsdoc')

  // grunt.registerTask('default', 'import')
}
