import React from "react";
import { Column } from "simple-flexbox";
import classes from "./MiniCardComponent.module.css"

function MiniCardComponent({ className = "", instancetitle, value, onClick, checked }) {

  return (
    <Column
      flexGrow={1}
      className={instancetitle === checked ? [classes.container, classes.conatinerChecked].join(" ") : [classes.container, className].join(" ")}
      horizontal="center"
      vertical="center"
      onClick={onClick}
    >
      <span className={instancetitle === checked ? classes.spanChecked : classes.instancetitle}>{instancetitle}</span>
      {value ? <span className={instancetitle === checked ? classes.spanChecked : classes.instancetitle}>{value}</span> : null}

    </Column>
  );
}

export default MiniCardComponent;
