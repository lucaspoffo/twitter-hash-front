import React from "react";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    "max-width": 900,
    margin: "auto",
    "text-align": "left"
  }
};

function Tag(props) {
  const { tags, onDelete, classes, color } = props;

  return (
    <div className={classes.root}>
      {tags.map((tag, index) => (
        <Chip
          key={index}
          color={color}
          variant="outlined"
          label={tag}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default withStyles(styles)(Tag);
