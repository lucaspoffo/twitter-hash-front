import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";

const styles = {};

function TextFieldAdd(props) {
  const { onAdd } = props;

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
    <div>
      <Input
        onChange={onTextChange}
        onKeyPress={onKeyPress}
        value={text}
        placeholder="Placeholder"
        inputProps={{
          "aria-label": "Description"
        }}
      />
      <Fab onClick={handleAdd} color="primary" aria-label="Add" size="small">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default withStyles(styles)(TextFieldAdd);
