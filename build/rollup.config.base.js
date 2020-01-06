/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Des [rollup base config].
 *-------------------------------------------------------------------------------------------- */
const path = require('path')
const buble = require('rollup-plugin-buble')
const typescript = require('rollup-plugin-typescript2')
const tslint = require('rollup-plugin-tslint')

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}
const name = 'chore-sdk'
// target config
const configs = {
  'esm-bundler': {
    file: resolveFile(`dist/${name}.esm-bundler.js`),
    format: `es`
  },
  cjs: {
    file: resolveFile(`dist/${name}.cjs.js`),
    format: `cjs`
  },
  global: {
    file: resolveFile(`dist/${name}.global.js`),
    format: `iife`
  },
  esm: {
    file: resolveFile(`dist/${name}.esm.js`),
    format: `es`
  }
}

module.exports = [
  {
    input: resolveFile('src/index.ts'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'iife',
      sourceMap: process.env.NODE_ENV === 'development' ? 'inline' : false
    }, 
    plugins: [
      tslint({}),
      typescript({
        tsconfig: path.resolve(__dirname, '../tsconfig.json')
      }),
      buble()
    ]
  }
]