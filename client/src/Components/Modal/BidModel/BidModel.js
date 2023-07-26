import React from 'react';

import Card from '../../Card/Card';
import Button from '../../Button/Button';
import classes from './BidModel.module.css';

const BidModel = () => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Hai</h2>
        </header>
        <div className={classes.content}>
          <p>Hai</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default BidModel;