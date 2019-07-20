import typescript from 'rollup-plugin-typescript2';
import angular from 'rollup-plugin-angular';

export default {
    input: 'src/feature/feature.entry.ts',
    output: {
        format: 'cjs',
        file: 'dist/feature.js',
    },
    plugins: [
        angular(),
        typescript(),
    ],
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated'
    ]
}