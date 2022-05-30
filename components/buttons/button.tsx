import React from "react";
import { StyledButton } from "../../styles/common";
import { ButtonProps } from "../../types/interfaces";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton marginTop={0} color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);