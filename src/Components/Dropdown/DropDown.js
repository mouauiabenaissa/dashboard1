import React, { useState } from "react";
import {
  arrayOf,
  element,
  func,
  number,
  oneOfType,
  shape,
  string,
} from "prop-types";
import { Column } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
import IconArrowUp from "../../Assets/icons/icon-arrow-up";
const useStyles = createUseStyles((theme) => ({
  arrowContainer: {
    position: "absolute",
    top: -19,
    right: 15,
  },
  dropdownButton: {
    alignItems: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    padding: 0,
    outline: "none",
  },
  dropdownContainer: {
    position: "relative",
  },
  dropdownItemsContainer: {
    background: "white",
    border: `2px solid #DFE0EB`,
    borderRadius: 5,
    minWidth: 150,
    padding: 0,
    position: "absolute",
    width: "100%",
    zIndex: 99,
    top: ({ position }) => position.top,
    right: ({ position }) => position.right,
    bottom: ({ position }) => position.bottom,
    left: ({ position }) => position.left,
    "& button:first-of-type:hover div > svg > path": {
      fill: "#DDE2FF",
    },
  },
  dropdownItem: {
    cursor: "pointer",
    background: "transparent",
    border: "none",
    fontSize: 12,
    outline: "none",
    padding: "10px 10px",
    "&:hover": {
      background: "#DDE2FF",
    },
    "&:after": {
      content: '" "',
      display: "block",
      position: "relative",
      bottom: -10,
      width: "100%",
      height: 1,
      background: "#DDE2FF",
    },
    "&:last-child:after": {
      content: "",
      display: "none",
    },
  },
  dropdownItemDelete: {
    cursor: "pointer",
    background: "transparent",
    color: "red",
    fontWeight: "bold",
    border: "none",
    fontSize: 12,
    outline: "none",
    padding: "10px 10px",

    "&:hover": {
      background: "#DDE2FF",
    },
    "&:after": {
      content: '" "',
      display: "block",
      position: "relative",
      bottom: -10,
      width: "100%",
      height: 1,
      background: "#DDE2FF",
    },
    "&:last-child:after": {
      content: "",
      display: "none",
    },
  },
}));

function DropDown({ label, options, position }) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles({ theme, position });

  function onDropdownClick() {
    setUserMenuOpen((prev) => !prev);
  }

  function onItemClick(onClick) {
    setUserMenuOpen(false);
    onClick && onClick();
  }

  return (
    <Column className={classes.dropdownContainer}>
      <button className={classes.dropdownButton} onClick={onDropdownClick}>
        {label}
      </button>
      {userMenuOpen && (
        <Column className={classes.dropdownItemsContainer}>
          {options.map((option, index) => (
            <button
              key={`option-${index}`}
              className={
                option.label === "Delete"
                  ? classes.dropdownItemDelete
                  : classes.dropdownItem
              }
              onClick={() => onItemClick(option.onClick)}
            >
              {option.label}

              {index === 0 && (
                <div className={classes.arrowContainer}>
                  <IconArrowUp />
                </div>
              )}
            </button>
          ))}
        </Column>
      )}
    </Column>
  );
}

DropDown.propTypes = {
  label: oneOfType([string, element]),
  options: arrayOf(
    shape({
      label: oneOfType([string, arrayOf(element)]),
      onClick: func,
    })
  ),
  position: shape({
    top: number,
    right: number,
    bottom: number,
    left: number,
  }),
};

DropDown.defaultProps = {
  position: {
    top: 52,
    right: -6,
  },
};

export default DropDown;
