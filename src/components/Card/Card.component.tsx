import React, { FC } from "react";
import styled, { css } from "styled-components";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
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
  animate = "false",
}) => {
  return (
    <CardWrapper className={className} animate={animate}>
      {children}
    </CardWrapper>
  );
};

const animateStyles = css`
  width: 100%;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 ${(props) => props.theme.spacingXxs}
      ${(props) => props.theme.spacingS} rgba(0, 0, 0, 0.2);
  }
`;

export const CardWrapper = styled.div<CardProps>`
  ${({ animate, theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    min-height: 100%;
    border-radius: ${theme.spacingXs};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 ${theme.spacingXs} 0;
    background-color: ${theme.white};
    border: ${theme.spacingXxs} solid ${theme.midGrey};
    border-radius: ${(props) => props.theme.spacingXxs};
    ${animate && animateStyles};
  `}
`;

const Heading = styled.div`
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.spacingS};
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
  color: ${(props) => props.theme.textGrey};
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
  margin: ${(props) => props.theme.spacingXxs};
  width: 100%;
  align-items: center;
  max-width: 100%;
`;

Card.Footer = Footer;

export default Card;
