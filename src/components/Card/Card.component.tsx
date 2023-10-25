import React, { FC } from "react";
import styled, { css } from "styled-components";

interface CardProps {
  /**
   * Children for card element
   */
  children?: React.ReactNode;
  /**
   * Class name applied to the native button element.
   */
  className?: string;
  /**
   * animate card
   */
  animate?: boolean;
}

interface CardStaticProps {
  Heading: typeof Heading;
  Body: typeof Body;
  Image: typeof Image;
  Footer: typeof Footer;
}

export const Card: FC<CardProps> & CardStaticProps = ({
  children,
  className,
  ...props
}) => {
  return (
    <CardWrapper className={className} {...props}>
      {children}
    </CardWrapper>
  );
};

export const CardWrapper = styled.div<CardProps>`
  ${({ animate, theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100%;
    border-radius: ${theme.spacingXs};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: ${theme.white};
    border: ${theme.spacingXxs} solid ${theme.midGrey};
    border-radius: ${(props) => props.theme.spacingXxs};
  `}
`;

const Heading = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: ${(props) => props.theme.spacingBase}
    ${(props) => props.theme.spacingBase} 0
    ${(props) => props.theme.spacingBase};
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.textGrey};
  font-weight: ${(props) => props.theme.fontWeightBold};
`;
Card.Heading = Heading;

const Body = styled.div`
  flex-direction: row;
  padding: ${(props) => props.theme.spacingXs};
  font-size: ${(props) => props.theme.fontSizeSmall};
  background-color: ${(props) => props.theme.white};
  padding: ${(props) => props.theme.spacingBase}
    ${(props) => props.theme.spacingBase} 0
    ${(props) => props.theme.spacingBase};
  color: ${(props) => props.theme.textGrey};
  justify-content: center;
`;
Card.Body = Body;

interface ImageProps {
  children?: React.ReactNode;
  className?: string;
  src?: string;
  alt?: string;
}

const Image = styled.img<ImageProps>`
  flex-direction: row;
  width: 100%;
  height: auto;
  border-top-left-radius: ${(props) => props.theme.spacingXs};
  border-top-right-radius: ${(props) => props.theme.spacingXs};
  object-fit: cover;
`;
Card.Image = Image;

const Footer = styled.div`
  flex-direction: row;
  justify-content: flex-end;
  padding: ${(props) => props.theme.spacingBase};
  width: 100%;
  align-items: center;
  max-width: 100%;
  margin-top: auto;
`;

Card.Footer = Footer;

export default Card;
