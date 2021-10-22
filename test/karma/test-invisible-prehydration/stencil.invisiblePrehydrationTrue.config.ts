import { Config } from '../../../dist/declarations';

export const config: Config = {
  namespace: 'TestInvisibleTruePrehydration',
  tsconfig: 'tsconfig.json',
  invisiblePrehydration: true,
  outputTargets: [
    {
      type: 'www',
      dir: '../test-www',
      empty: false,
      indexHtml: 'prehydrated-styles.html',
      serviceWorker: null,
    },
  ],
};
