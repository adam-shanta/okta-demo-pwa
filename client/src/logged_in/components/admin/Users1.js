import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  Button,
  Accordion,
  AccordionSummary,
  Typography,
  ListItemText,
  OutlinedInput,
  AccordionDetails,
  MenuItem,
  FormControl,
  Select,
  Box,
  withStyles,
  TextField,
  Grid
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import withWidth from "@material-ui/core/withWidth";
import Bordered from "../../../shared/components/Bordered";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";

const styles = (theme) => ({
  numberInput: {
    width: 110,
  },
  numberInputInput: {
    padding: "9px 34px 9px 14.5px",
  },
  dBlock: { display: "block" },
  listItemLeftPadding: {
    paddingRight: theme.spacing(3),
  },
  accordionDetails: {
    paddintTop: theme.spacing(0),
    justifyContent: "flex-end",
  },
});
const inputOptions = ["None", "Slow", "Normal", "Fast"];

function Users1(props) {
  const { classes, pushMessageToSnackbar } = props;
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isDefaultLoading, setIsDefaultLoading] = useState(false);
  const [option1, setOption1] = useState("None");
  const [option2, setOption2] = useState("None");
  const [option3, setOption3] = useState("None");
  const [option4, setOption4] = useState("None");
  const [option5, setOption5] = useState("2 Days");
  const [option6, setOption6] = useState(7500);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      if (name === "option6") {
        if (value > 7500 || value < 1000) {
          return;
        }
      }
      switch (name) {
        case "option1": {
          setOption1(value);
          break;
        }
        case "option2": {
          setOption2(value);
          break;
        }
        case "option3": {
          setOption3(value);
          break;
        }
        case "option4": {
          setOption4(value);
          break;
        }
        case "option5": {
          setOption5(value);
          break;
        }
        case "option6": {
          setOption6(value);
          break;
        }
        default:
          throw new Error("No branch selected in switch statement.");
      }
    },
    [setOption1, setOption2, setOption3, setOption4, setOption5, setOption6]
  );

  const resetState = useCallback(() => {
    setIsSaveLoading(false);
    setIsDefaultLoading(false);
    setOption1("None");
    setOption2("None");
    setOption3("None");
    setOption4("None");
    setOption5("2 Days");
    setOption6(7500);
  }, [
    setIsSaveLoading,
    setIsDefaultLoading,
    setOption1,
    setOption2,
    setOption3,
    setOption4,
    setOption5,
    setOption6,
  ]);

  const onSetDefault = useCallback(() => {
    setIsDefaultLoading(true);
    setTimeout(() => {
      pushMessageToSnackbar({
        text: "Your settings have been cleared",
      });
      resetState();
    }, 1500);
  }, [pushMessageToSnackbar, resetState]);

  const onSubmit = useCallback(() => {
    setIsSaveLoading(true);
    setTimeout(() => {
      pushMessageToSnackbar({
        text: "Your settings have been saved",
      });
      setIsSaveLoading(false);
    }, 1500);
  }, [setIsSaveLoading, pushMessageToSnackbar]);

  const inputs = [
    {
      state: option1,
      label: "First Name",
      placeholder: '',
      stateName: "option1",
    },
    {
      state: option2,
      label: "Last Name",
      placeholder: '',
      stateName: "option2",
    },
    {
      state: option3,
      label: "Username",
      placeholder: 'Must be an email',
      stateName: "option3",
    },
  ];

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Create User</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.dBlock}>
        <List disablePadding>
          <Bordered disableVerticalPadding disableBorderRadius>
            {inputs.map((element, index) => (
              <ListItem
                className="listItemLeftPadding"
                disableGutters
                divider
                key={index}
              >
                <ListItemText>
                <Typography variant="body2">{element.label}</Typography>
                </ListItemText>

                <Grid direction='column' alignItems='stretch' item xs={7} md={0} lg={0}>
                    <form>
                          <TextField
                            variant="outlined"
                            multiline
                            placeholder={element.placeholder}
                            inputProps={{ "aria-label": "Get in Touch" }}
                            InputProps={{
                              className: classes.whiteBg
                            }}
                            rows={0}
                            fullWidth
                            required
                            size='small'
                          />
                      </form>
                      </Grid>
                  <ListItemSecondaryAction
                    className={classes.ListItemSecondaryAction}
                  >
                  </ListItemSecondaryAction>

              </ListItem>
            ))}
            <ListItem className="listItemLeftPadding" disableGutters divider>
              <ListItemText>
                <Typography variant="body2">Admin</Typography>
              </ListItemText>

                <ListItemSecondaryAction
                  className={classes.ListItemSecondaryAction}
                >
                  
                  <Select
                    value={option5}
                    onChange={handleChange}
                    input={
                      <OutlinedInput
                        name="option5"
                        labelWidth={2}
                        className={classes.numberInput}
                        classes={{ input: classes.numberInputInput }}
                      />
                    }
                    MenuProps={{ disableScrollLock: true }}
                  >
                    {[
                      "Yes",
                      "No"
                    ].map((element) => (
                      <MenuItem value={element} key={element}>
                        {element}
                      </MenuItem>
                    ))}
                  </Select>
                </ListItemSecondaryAction>

            </ListItem>
          </Bordered>
        </List>
      </AccordionDetails>
      <AccordionDetails className={classes.accordionDetails}>
        <Box mr={1}>
          <Button
            onClick={onSetDefault}
            disabled={isSaveLoading || isDefaultLoading}
          >
            Clear {isDefaultLoading && <ButtonCircularProgress />}
          </Button>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          disabled={isSaveLoading || isDefaultLoading}
          onClick={onSubmit}
        >
          Create {isSaveLoading && <ButtonCircularProgress />}
        </Button>
      </AccordionDetails>
    </Accordion>
  );
}

Users1.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withWidth()(withStyles(styles, { withTheme: true })(Users1));
