import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: theme.palette.secondary.light,
    '& .MuiButton-lable': {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    '& .MuiButton-lable': {
      color: theme.palette.primary.main,
    },
  },
}));

export default function CrossButton(props) {
  const { color, children, onClick } = props;
  const classes = useStyles();

  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
}
