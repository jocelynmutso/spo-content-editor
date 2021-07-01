import React from 'react';
import { makeStyles, Typography, IconButton, Theme, createStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';

import { API, Layout } from '../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    iconButton: {
      padding: 2,
      color: theme.palette.primary.dark,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
    bold: {
      fontWeight: 'bold'
    }
  }));



interface ReleasesTableProps {
  site: API.CMS.Site,
  releases: API.CMS.Releases;

}

const ReleasesTable: React.FC<ReleasesTableProps> = ({ site, releases }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold} align="left">Tag</TableCell>
            <TableCell className={classes.bold} align="left">Note</TableCell>
            <TableCell className={classes.bold} align="left">Created</TableCell>
            <TableCell className={classes.bold} align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {releases.map((release, index) => (
            <TableRow key={index}>
              <TableCell align="left">{release.name}</TableCell>
              <TableCell align="left">{release.note}</TableCell>
              <TableCell align="left">{release.created}</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="right">
                <IconButton className={classes.iconButton}>
                  {release.name === "LATEST" ? <EditIcon/> : <VisibilityIcon />}
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { ReleasesTable }




