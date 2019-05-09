import axios from "../axios";
import parseLinkHeader from "parse-link-header";

class TweetService {
  static async getTweets(params = {}) {
    let response = await axios.get("/tweets", {
      params
    });
    return {
      data: response.data,
      link: parseLinkHeader(response.headers.link),
      total: parseInt(response.headers.total),
      perPage: parseInt(response.headers["per-page"])
    };
  }
}

export default TweetService;
