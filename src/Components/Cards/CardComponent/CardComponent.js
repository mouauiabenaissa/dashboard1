import React from "react";
import { Column, Row } from "simple-flexbox";
import classes from "./CardComponent.module.css"

function CardComponent(props) {
  const { title, link, subtitle, subtitleTwo, items, containerStyles } = props;
  function renderItem(item, index) {
    return (
      <Column
        className={classes.itemContainer}
        key={`item-${index}`}
        breakpoints={{ 426: classes.itemContainerMobile }}
      >
        {item}
      </Column>
    );
  }

  return (
    <Column
      flexGrow={1}
      className={[classes.container, containerStyles].join(" ")}
      breakpoints={{ 426: classes.containerMobile }}
    >
      <Row horizontal="space-between">
        <Column>
          <span className={classes.title}>{title}</span>
          <Row style={{ marginTop: 8, marginBottom: 16 }}>
            <span className={classes.subtitle}>{subtitle}</span>
            {subtitleTwo && (
              <span className={[classes.subtitle, classes.subtitle2].join(" ")}>
                {subtitleTwo}
              </span>
            )}
          </Row>
        </Column>
        <span className={classes.link}>{link}</span>
      </Row>
      {items.map(renderItem)}
    </Column>
  );
}

export default CardComponent;
