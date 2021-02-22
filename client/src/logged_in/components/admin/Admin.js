import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import UsersArea from "./UsersArea";
import UserDataArea from "./AdminUserDataArea";
import AccountInformationArea from "../dashboard/AccountInformationArea";
import StatisticsArea from "../dashboard/StatisticsArea";

function Admin(props) {
  const {
    selectAdmin,
    CardChart,
    statistics,
    toggleAccountActivation,
    pushMessageToSnackbar,
    targets,
    setTargets,
    isAccountActivated,
  } = props;

  useEffect(selectAdmin, [selectAdmin]);

  return (
    <Fragment>
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Administrator Portal
        </Typography>
      </Box>
      <UsersArea pushMessageToSnackbar={pushMessageToSnackbar} />
      <UserDataArea
        pushMessageToSnackbar={pushMessageToSnackbar}
        targets={targets}
        setTargets={setTargets}
      />
    </Fragment>
  );
}

Admin.propTypes = {
  CardChart: PropTypes.elementType,
  statistics: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
};

export default Admin;