import React, { FC } from "react";
import styled, { css } from "styled-components";

export type Variant = "default" | "neutral" | "primary" | "gray";

type CardProps = {
  children?: React.ReactNode;
  className?: string; 
};

interface CardStaticProps {
  Heading: typeof Heading;
  SubHeading: typeof SubHeading;
  Text: typeof Text;
  Footer: typeof Footer;
}

export const Card: FC<CardProps> & CardStaticProps = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  `}
`;

const Heading = styled.div`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    background-color: orange;
    height: 100px;
  `}
`;
Card.Heading = Heading;

const SubHeading = styled.div`
  ${({ theme }) => css`
    flex-direction: row;
    background-color: pink;
    height: 100px;
  `}
`;
Card.SubHeading = SubHeading;

const Text = styled.div`
  ${({ theme }) => css`
    flex-direction: row;
    color: green;
    background-color: papayawhip;
    height: 100px;
    width: 100%;
  `}
`;
Card.Text = Text;

const Footer = styled.div`
  ${({ theme }) => css`
    flex-direction: row;
    background-color: seagreen;
    height: 100px;
    width: 100%;
  `}
`;

Card.Footer = Footer;

export default Card;
