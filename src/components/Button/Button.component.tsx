import React, { FC, useRef } from "react";
import styled, { css } from "styled-components";
import { useButton } from "@react-aria/button";
import { AriaButtonProps } from "@react-types/button";
import { PressEvent } from "@react-types/shared";

export interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "ref"> {
  onPress?: (e: PressEvent) => void;
  /**
   * Class name applied to the native button element.
   */
  className?: string;
  /**
   * Ref that is bound to the underlying button element.
   */
  buttonRef?: React.MutableRefObject<HTMLButtonElement> | undefined;
  /**
   * Class name applied to the native button element.
   */
  fullWidth?: boolean;
}

// useButton doesn't support callback refs. This is why we use buttonRef instead
// of forward ref API to provide a way for a ref to be set (we can type it to
// something that useButton will accept.)
const _Button: FC<ButtonProps & AriaButtonProps> = ({
  buttonRef,
  children,
  className,
  ...unhandledProps
}) => {
  //TODO Fix type errors
  const internalRef = useRef();
  const ref = buttonRef || internalRef;
  const { buttonProps } = useButton(
    { ...unhandledProps },
    //@ts-ignore
    ref
  );

  return (
    <button
      className={className}
      //@ts-ignore
      ref={ref}
      {...buttonProps}
    >
      <span>{children}</span>
    </button>
  );
};
const fillWidthStyles = css`
  width: 100%;
`;

export const Button = styled(_Button)`
  ${({ fullWidth, theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.spacingXs};
    background-color: ${theme.darkPink};
    border: ${theme.spacingXs};
    color: ${theme.white};
    padding: ${theme.spacingS};
    text-align: center;
    min-height: 48px;
    width: 50%;
    font-weight: ${theme.fontWeightBold};
    &:hover {
      background-color: ${theme.pink};
    }

    ${fullWidth && fillWidthStyles}
  `}
`;
