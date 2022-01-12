import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: "./dist/cjs/index.js",
            format: 'cjs',
        },
        {
            file: "./dist/esm/index.js",
            format: 'es',
        },
    ],
    external: [
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),
    ],
};