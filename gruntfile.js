module.exports = function(grunt) {
  grunt.initConfig({
    jasmine_nodejs: {
      options: {
        reporters: {
          console: {
            colors: true,
            cleanStack: 2,
            listStyle: "indent"
          }
        },
      },
      leagueRankingSpecs: {
        options: {
          useHelpers: true
        },
        specs: [
          "specs/**/*.specs.js",
        ]
      }
    },

    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      specs: {
        src: ["specs/**/*.js"]
      },
      leagueRanking: {
        src: ["leagueRanking/**/*.js"]
      }
    },

    watch: {
      all: {
        files: ["leagueRanking/**/*.js", "specs/**/*.js"],
        tasks: ["specs"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-jasmine-nodejs");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("specs", ["jshint", "jasmine_nodejs"]);
  grunt.registerTask("default", ["watch"]);
};
