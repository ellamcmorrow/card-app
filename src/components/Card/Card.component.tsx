import React, { FC } from "react";
import styled from "styled-components";

export type Variant = "default" | "neutral" | "primary" | "gray";

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
  return <div className={className}>{children}</div>;
};

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Heading = styled.div`
  flex-direction: row;
  align-items: center;
  background-color: orange;
  height: 100px;
`;
Card.Heading = Heading;

const SubHeading = styled.div`
  flex-direction: row;
  background-color: pink;
  height: 100px;
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
`;

Card.Image = Image;

const Footer = styled.div`
  flex-direction: row;
  background-color: seagreen;
  height: 100px;
  width: 100%;
`;

Card.Footer = Footer;

export default Card;
