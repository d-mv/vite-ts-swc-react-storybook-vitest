import { logger } from '@mv-d/toolbelt';

import classes from './App.module.scss';

export function App() {
  logger.info('App rendered');
  return (
    <div className={classes.container}>
      <h1>Hello</h1>
    </div>
  );
}
