import configReducer from './config';

export default ({ config }, action) => ({
  config: configReducer(config, action)
})