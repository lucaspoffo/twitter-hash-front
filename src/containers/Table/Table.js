import React, { useState, useEffect } from "react";
import TweetTable from "../../components/TweetTable/TweetTable";
import PaginationActions from "../../components/TweetTable/PaginationActions";
import TablePagination from "@material-ui/core/TablePagination";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  pagination: {
    maxWidth: 900,
    margin: "auto"
  }
};

function Table(props) {
  const { classes, tweetService, hashtags } = props;
  const [page, setPage] = useState(1);
  const [tweets, setTweets] = useState([]);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(20);

  async function handleChangePage(event, page) {
    // 0 based in component 1 based in api
    page += 1;
    let resp = await tweetService.getTweets({
      page: page,
      hashtags: hashtags
    });
    setTweets(resp.data || []);
    setPage(page);
    setPerPage(resp.perPage);
  }

  useEffect(() => {
    tweetService
      .getTweets({
        page: 1,
        hashtags: hashtags
      })
      .then(resp => {
        setTweets(resp.data);
        setTotal(resp.total);
        setPerPage(resp.perPage);
      });
  }, [hashtags, tweetService]);

  return (
    <div>
      <TweetTable tweets={tweets} total={total} />
      <TablePagination
        className={classes.pagination}
        rowsPerPageOptions={[]}
        component="div"
        count={total}
        rowsPerPage={perPage}
        page={page - 1}
        backIconButtonProps={{
          "aria-label": "Previous Page"
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page"
        }}
        onChangePage={handleChangePage}
        ActionsComponent={PaginationActions}
      />
    </div>
  );
}

export default withStyles(styles)(Table);
