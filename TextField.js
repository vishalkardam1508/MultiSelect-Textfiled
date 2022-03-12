import { useState } from "react";
import {
  TextField,
  makeStyles,
  Chip,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";
import { KeyboardArrowDown, ExpandLess } from "@material-ui/icons";
import clsx from "clsx";
export default function MutiTextField(props) {
  const [state, setState] = useState();
  const [value, setValue] = useState(false);
  const classes = useStyles();

  const valueChange = (e) => {
    const { value, name } = e.target;
    setState((params) => ({
      ...params,
      [name]: value
    }));
  };

  const handleDelete = (chipToDelete) => () => {
    props.setData((chips) =>
      chips.filter((chip) => chip.label !== chipToDelete.label)
    );
  };

  function find(label) {
    return props.chipData.filter((item) => {
      return item.label === label;
    });
  }

  function Submit(event) {
    const repeat = find(state?.multiSelect);
    if (state?.multiSelect.length && !(state?.multiSelect === " ")) {
      if (event.key === "Enter") {
        if (!(repeat[0]?.label === state?.multiSelect)) {
          props.setData([
            ...props?.chipData,
            {
              key: props?.chipData.length,
              label: state?.multiSelect
            }
          ]);
          setState({
            multiSelect: ""
          });
        } else {
          setState({
            multiSelect: ""
          });
        }
      } else if (event.code === "Space") {
        event.preventDefault();
      }
    } else {
      setState({
        multiSelect: ""
      });
    }
  }

  return (
    <>
      <div className={clsx(classes.conatiner)}>
        {props?.chipData.map((data) => {
          return (
            <li className={classes.chipSet} key={data.key}>
              <Chip
                size={props?.chipSize || "medium"}
                icon={data?.icon}
                label={data.label}
                variant="filled"
                color={props?.chipColor || "primary"}
                onDelete={handleDelete(data)}
                className={classes.chip}
              />
            </li>
          );
        })}
        <TextField
          className={classes.Input}
          InputProps={
            props?.select
              ? {
                  endAdornment: props?.select ? (
                    <InputAdornment
                      onClick={() => {
                        setValue(!value);
                      }}
                      position="start"
                    >
                      {value ? (
                        <KeyboardArrowDown className={classes.TextFieldIcon} />
                      ) : (
                        <ExpandLess className={classes.TextFieldIcon} />
                      )}
                    </InputAdornment>
                  ) : (
                    <></>
                  )
                }
              : false
          }
          value={state?.multiSelect}
          onKeyPress={(event) => {
            Submit(event);
          }}
          name="multiSelect"
          onChange={(e) => {
            valueChange(e);
          }}
          size={props?.inputSize || "small"}
          label={props?.inputLabel || "select"}
          fullWidth={props?.inputFullWidth || false}
          variant={props?.inputContained || "filled"}
        />
        {value ? (
          <Paper elevation={6} className={classes.modalForm}>
            <List dense={true} component="nav">
              {props?.selectData?.length ? (
                props?.selectData?.map((data) => (
                  <>
                    <ListItem
                      key={data?.label}
                      button
                      onClick={() => {
                        const repeat = find(data?.label);
                        if (!(repeat[0]?.label === data?.label)) {
                          props.setData([
                            ...props?.chipData,
                            {
                              key: props?.chipData.length + 1,
                              label: data?.label
                            }
                          ]);
                          setState({
                            multiSelect: ""
                          });
                        } else {
                          setState({
                            multiSelect: ""
                          });
                        }
                      }}
                    >
                      <ListItemText primary={data?.label} />
                    </ListItem>
                    <Divider />
                  </>
                ))
              ) : (
                <ListItem button>
                  <ListItemText primary={"data not found..."} />
                </ListItem>
              )}
            </List>
          </Paper>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  conatiner: {
    minHeight: 40,
    width: "100%"
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    float: "left"
  },
  chip: {
    margin: 5
  },
  Input: {
    marginTop: 10
  },
  TextFieldIcon: {
    cursor: "pointer"
  },
  modalForm: {
    width: "100%",
    maxHeight: 120,
    marginTop: 10,
    overflowY: "scroll"
  }
}));
