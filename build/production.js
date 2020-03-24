import baseConfig from './base';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactToggle'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    antd: 'antd'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
