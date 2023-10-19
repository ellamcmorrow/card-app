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
   * Icon to display to the left of the button.
   */
  icon?: React.ReactNode;
  /**
   * Icon positioned left
   */
  iconLeft?: boolean;
  /**
   * Ref that is bound to the underlying button element.
   */
  buttonRef?: React.MutableRefObject<HTMLButtonElement> | undefined;
}

const IconLeftWrapper = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    margin: 0 4px 0 0;
  `}
`;

const IconRightWrapper = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    margin: 0 0 0 4px;
  `}
`;

// useButton doesn't support callback refs. This is why we use buttonRef instead
// of forward ref API to provide a way for a ref to be set (we can type it to
// something that useButton will accept.)
const _Button: FC<ButtonProps & AriaButtonProps> = ({
  buttonRef,
  children,
  className,
  icon,
  iconLeft,
  ...unhandledProps
}) => {
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
      {icon && iconLeft && <IconLeftWrapper>{icon}</IconLeftWrapper>}
      <span>{children}</span>
      {icon && !iconLeft && <IconRightWrapper>{icon}</IconRightWrapper>}
    </button>
  );
};

export const Button = styled(_Button)`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.primary};
  `}
`;
