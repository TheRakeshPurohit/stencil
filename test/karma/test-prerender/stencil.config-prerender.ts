import { Config } from '../../../internal';

export const config: Config = {
  namespace: 'TestPrerender',
  globalStyle: 'src/global/app.css',
  tsconfig: 'tsconfig-prerender.json',
  outputTargets: [
    {
      type: 'www',
      dir: '../test-www',
      baseUrl: 'https://karma.stenciljs.com/prerender',
      serviceWorker: null,
      empty: false,
      prerenderConfig: 'prerender.config.js',
    },
  ],
};
