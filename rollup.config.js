export default {
    input: 'build/index.js',
    output: {
        name: 'module',
        file: 'dist/app.js',
        format: 'cjs',
        globals: {
            '@angular/core': 'ng.core',
            '@angular/common': 'ng.common'
        }
    }
}