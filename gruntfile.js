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

    eslint: {
      options: {
        configFile: "./eslint.json"
      },
      specs: ["specs/**/*.js"],
      leagueRanking: ["leagueRanking/**/*.js"]
    },

    watch: {
      all: {
        files: ["leagueRanking/**/*.js", "specs/**/*.js"],
        tasks: ["specs"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-jasmine-nodejs");
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("specs", ["eslint", "jasmine_nodejs"]);
  grunt.registerTask("default", ["watch"]);
};
