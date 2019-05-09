import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    maxWidth: 900,
    margin: "auto"
  },
  userScreenName: {
    color: "gray"
  },
  pagination: {
    maxWidth: 900,
    margin: "auto"
  }
});

function renderTweet(tweet, classes) {
  return (
    <TableRow key={tweet.id}>
      <TableCell align="left">
        <Avatar alt={tweet.user.name} src={tweet.user.profile_image_url} />
      </TableCell>
      <TableCell component="th" scope="row">
        <div>{tweet.user.name}</div>
        <small className={classes.userScreenName}>
          {"@" + tweet.user.screen_name}
        </small>
      </TableCell>
      <TableCell align="left">{tweet.text}</TableCell>
      <TableCell align="left">{tweet.updated_at}</TableCell>
    </TableRow>
  );
}

function TweetTable(props) {
  const { classes, tweets } = props;

  return (
    <div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="left">Username</TableCell>
            <TableCell align="left">Text</TableCell>
            <TableCell align="left">Created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tweets.map(tweet => renderTweet(tweet, classes))}
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(styles)(TweetTable);
