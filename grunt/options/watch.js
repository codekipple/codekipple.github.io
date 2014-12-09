var files = {
    sass: 'sass/**/*.scss',
}

module.exports = {
    options: {
        livereload: true,
    },
    sass: {
        files: [files.sass],
        tasks: ['sass', 'autoprefixer', 'cssmin']
    }
};