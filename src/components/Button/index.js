import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder19: "rounded-radius195" };
const variants = {
  OutlineBlack900:
    "bg-blue_200 border-black_900 border-bw3 border-solid text-black_900",
};
const sizes = { sm: "sm:p-[4px] md:p-[6px] p-[9px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder19"]),
  variant: PropTypes.oneOf(["OutlineBlack900"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder19",
  variant: "OutlineBlack900",
  size: "sm",
};

export { Button };
