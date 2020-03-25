import configReducer from './config';
import authReducer from './auth';

export default ({ config, auth }, action) => ({
  config: configReducer(config, action),
  auth: authReducer(auth, action)
})