import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, route, clickEvent }) => (
  <div className="custom-button">
    <a
      onClick={clickEvent}
      href={route}
      className="fancy-button pop-onhover bg-gradient3"
    >
      <span>{children}</span>
    </a>
  </div>
);

export default CustomButton;
