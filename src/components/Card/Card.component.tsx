import React, { FC } from "react";
import styled from "styled-components";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

interface CardStaticProps {
  Heading: typeof Heading;
  SubHeading: typeof SubHeading;
  Image: typeof Image;
  Footer: typeof Footer;
}

export const Card: FC<CardProps> & CardStaticProps = ({
  children,
  className,
}) => {
  return <CardWrapper className={className}>{children}</CardWrapper>;
};

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 100%;
  border-radius: ${(props) => props.theme.spacingXs};
`;

const Heading = styled.div`
  flex-direction: row;
  align-items: center;
  background-color: orange;
  padding: ${(props) => props.theme.spacingXs};
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.charcoal};
`;
Card.Heading = Heading;

const SubHeading = styled.div`
  flex-direction: row;
  padding: ${(props) => props.theme.spacingXs};
  font-size: ${(props) => props.theme.fontSizeSmall};
  background-color: ${(props) => props.theme.white};
`;
Card.SubHeading = SubHeading;

interface ImageProps {
  children?: React.ReactNode;
  className?: string;
  src?: string;
  alt?: string;
}

const Image = styled.img<ImageProps>`
  flex-direction: row;
  background-color: papayawhip;
  height: 100px;
  width: 100%;
  height: auto;
  border-radius: ${(props) => props.theme.spacingXs};
  object-fit: cover;
`;

Card.Image = Image;

const Footer = styled.div`
  flex-direction: row;
  background-color: seagreen;
  margin: ${(props) => props.theme.spacingXxs};
  background-color: ${(props) => props.theme.white};
  width: 100%;
  align-items: center;
`;

Card.Footer = Footer;

export default Card;
