import stub from 'rollup-plugin-stub';

export default {
  input: 'test.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    sourcemap: 'inline',
  },
  plugins: [
    //stub(),
  ],
};
