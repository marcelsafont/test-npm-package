import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import{ terser } from 'rollup-plugin-terser';

export default [
  {
    input: './src/index.js',
    output: [
      { file: 'dist/index.js', format: 'es', exports: 'named'}
    ],
    plugins: [
      babel(),
      peerDepsExternal(),
      nodeResolve(),
    ]
  }
]