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
        {cardData.map((data, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <Card>
              <Card.Heading>{data.heading}</Card.Heading>
              <Card.SubHeading>{data.subHeading}</Card.SubHeading>
              <Card.Image>{data.imageContent}</Card.Image>
              <Card.Footer>
                <Button onPress={() => console.log("clicked on card", index)}>
                  Click Me!
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
