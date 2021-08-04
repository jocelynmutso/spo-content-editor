import React from 'react';
import { makeStyles, createStyles, Theme, TextField, Typography, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { API } from '../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: 0,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
      fontWeight: 'bold',
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
        fontWeight: 'bold'
      }
    },
    formControl: {
      backgroundColor: theme.palette.background.paper,
      margin: theme.spacing(1),
      width: '45%'
    },
    typography: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(1),
      backgroundColor: theme.palette.info.light,
      border: '1px solid',
      fontWeight: 'bold',

    }
  }),
);


interface RenameArticleProps {
  site: API.CMS.Site;
  article: API.CMS.Article;
}


const RenameArticle: React.FC<RenameArticleProps> = ({ site, article }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" className={classes.button} onClick={handleClickOpen}>
        Rename
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{"Rename this article?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Renaming this article will only change its technical name. This action has no consequences for the end-user experience.
          </DialogContentText>
          <Typography className={classes.typography} variant="body1">Old order: {" "} {article.body.order} <Divider /> Old name: {" "} {article.body.name}</Typography>
          <TextField placeholder="Example: 100" label="New order" variant="outlined" className={classes.formControl} />
          <TextField label="New name" variant="outlined" className={classes.formControl} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Continue and rename
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export { RenameArticle }
