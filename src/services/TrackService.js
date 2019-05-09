import axios from "../axios";

class TrackService {
  static async getTracks() {
    try {
      let response = await axios.get("/hashtag_filters");
      return response.data;
    } catch (e) {
      console.error("Failed to load tracks", e);
      return [];
    }
  }

  static async deleteTrack(id) {
    try {
      let response = await axios.delete("/hashtag_filters/" + id);
      console.log("Successfuly deleted track");
    } catch (e) {
      console.error("Failed to delete tracks", e);
      return [];
    }
  }

  static async addTrack(text) {
    try {
      let response = await axios.post("/hashtag_filters", {
        text
      });
      console.log("Successfuly added track");
      return response.data;
    } catch (e) {
      console.error("Failed to add track", e);
      return false;
    }
  }
}

export default TrackService;
