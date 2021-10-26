import React, {
  useState,
  useEffect,
  useContext
} from "react";
import { Link } from "react-router-dom";
import {
  Button
} from "@material-ui/core";

function Form(props) {
  const handleChange = event => {
    props.setChecked({
      ...props.checked,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          name="buttonA"
          checked={props.checked.buttonA}
          onChange={handleChange}
        />
        <label for="buttonA">Button A</label>
        <input
          type="checkbox"
          name="buttonB"
          checked={props.checked.buttonB}
          onChange={handleChange}
        />
        <label for="buttonB">Button B</label>
        <input
          type="checkbox"
          name="buttonC"
          checked={props.checked.buttonC}
          onChange={handleChange}
        />
        <label for="buttonC">Button C</label>
        <input
          type="checkbox"
          name="buttonD"
          checked={props.checked.buttonD}
          onChange={handleChange}
        />
        <label for="buttonD">Button D</label>
      </div>
      <div className="checkbox">
        <Link to="/results">
          <Button
            type="submit"
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Form;
