import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

const entries = ['lib/index.js'];

const plugins = [
    alias({
        entries: [{ find: /^node:(.+)$/, replacement: '$1' }],
    }),
    resolve({
        preferBuiltins: true,
    }),
    json(),
    commonjs(),
    esbuild({
        target: 'node16',
        minify: true,
    }),
];

export default [
    ...entries.map((input) => ({
        input,
        output: [
            {
                file: input.replace('lib/', 'dist/').replace('.js', '.esm.js'),
                format: 'esm',
                sourcemap: true,
            },
            {
                file: input.replace('lib/', 'dist/').replace('.js', '.cjs'),
                format: 'cjs',
                sourcemap: true,
                exports: 'default',
            },
        ],
        external: [],
        plugins,
    })),
];
