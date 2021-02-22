import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Users1 from "./Users1";
import Users2 from "./Users2";

function UsersArea(props) {
  const { pushMessageToSnackbar } = props;
  return (
    <Fragment>
      <Users1 pushMessageToSnackbar={pushMessageToSnackbar} />
    </Fragment>
  );
}

UsersArea.propTypes = {
  pushMessageToSnackbar: PropTypes.func
};

export default UsersArea;