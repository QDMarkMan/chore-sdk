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
        tsconfig: "tsconfig.json"
      }),
      buble()
    ]
  }
]