import React from "react";
import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <button disabled={isDisabled} type={type} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.prototype = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
