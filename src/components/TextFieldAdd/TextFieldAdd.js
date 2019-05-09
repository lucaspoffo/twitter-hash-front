import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const styles = {
  root: {
    "max-width": 900,
    margin: "auto",
    "text-align": "left"
  }
};

function TextFieldAdd(props) {
  const { onAdd, classes, color, placeholder } = props;

  const [text, setText] = useState([]);

  function handleAdd() {
    if (!text) return;
    onAdd(text);
    setText("");
  }

  function onTextChange(event) {
    setText(event.target.value);
  }

  function onKeyPress(event) {
    if (event.key === "Enter") {
      handleAdd();
      event.preventDefault();
    }
  }

  return (
    <div className={classes.root}>
      <Input
        onChange={onTextChange}
        onKeyPress={onKeyPress}
        color={color}
        value={text}
        placeholder={placeholder}
        inputProps={{
          "aria-label": "Description"
        }}
      />
      <Fab color={color} onClick={handleAdd} aria-label="Add" size="small">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default withStyles(styles)(TextFieldAdd);
