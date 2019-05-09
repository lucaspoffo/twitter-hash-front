import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

function Tag(props) {
  const { tags, onDelete } = props;

  return (
    <div>
      {tags.map((tag, index) => (
        <Chip
          key={index}
          color="primary"
          variant="outlined"
          label={tag}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default Tag;
