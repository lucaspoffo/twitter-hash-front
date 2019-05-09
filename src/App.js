import React, { useState, useEffect } from "react";
import Table from "./containers/Table/Table";
import Typography from "@material-ui/core/Typography";
import TweetService from "./services/TweetService";
import TrackService from "./services/TrackService";
import "./App.css";
import Tag from "./components/Tag/Tag";
import TextFieldAdd from "./components/TextFieldAdd/TextFieldAdd";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  header: {
    "max-width": 900,
    margin: "auto",
    "text-align": "left",
    padding: 25
  }
};

function App(props) {
  const { classes } = props;

  const [hashtags, setHashtags] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    TrackService.getTracks().then(tracks => {
      setTracks(tracks);
    });
  }, []);

  function onTrackDelete(index) {
    let track = tracks[index];
    let t = [...tracks];
    t.splice(index, 1);
    setTracks(t);
    TrackService.deleteTrack(track.id);
  }

  async function onTrackAdd(text) {
    let track = await TrackService.addTrack(text);
    if (track) {
      setTracks([...tracks, track]);
    }
  }

  function onFilterTagAdd(text) {
    setHashtags([...hashtags, text]);
  }

  function onFilterTagDelete(index) {
    let h = [...hashtags];
    h.splice(index, 1);
    setHashtags(h);
  }

  return (
    <div className="App">
      <Typography variant="h3" gutterBottom className={classes.header}>
        Hashtags being tracked
      </Typography>
      <TextFieldAdd onAdd={onTrackAdd} color="secondary" />
      <Tag
        tags={tracks.map(t => t.text)}
        onDelete={onTrackDelete}
        color="secondary"
      />
      <Typography variant="h3" gutterBottom className={classes.header}>
        Tweet search, filter by hashtags
      </Typography>
      <TextFieldAdd onAdd={onFilterTagAdd} color="primary" />
      <Tag tags={hashtags} onDelete={onFilterTagDelete} color="primary" />
      <Table tweetService={TweetService} hashtags={hashtags} />
    </div>
  );
}

export default withStyles(styles)(App);
