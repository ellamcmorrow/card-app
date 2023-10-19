import React, { FC } from "react";
import { Card } from "../Card";
import { Button } from "../Button";

type CardListProps = {
  children?: React.ReactNode;
  className?: string;
};
const cardData = [
  {
    heading: "Header1",
    subHeading: "SubHeader1",
    imageContent: "Loremipsum1",
  },
  {
    heading: "Header2",
    subHeading: "SubHeader2",
    imageContent: "Loremipsum2",
  },
  {
    heading: "Header1",
    subHeading: "SubHeader1",
    imageContent: "Loremipsum1",
  },
  {
    heading: "Header2",
    subHeading: "SubHeader2",
    imageContent: "Loremipsum2",
  },
  // ... add more card data as needed
];
export const CardList: FC<CardListProps> = ({ children, className }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          TITLE
          <Card>
            <Card.Heading>Deetz!</Card.Heading>
            <Card.Image></Card.Image>
            <Card.Footer></Card.Footer>
          </Card>
          <Button onPress={() => console.log("clicked on card")}>
            Buy Me!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardList;
