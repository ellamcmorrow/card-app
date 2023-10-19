import { screen, cleanup, render } from "@testing-library/react";
import { Card } from "./Card.component";


describe("card test", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("it renders", () => {
    render(<Card>My basic card test</Card>);
    expect(screen.getByText("My basic card test")).toBeInTheDocument();
  });

  // test("it renders with a header, subheader and icon", () => {
  //   render(
  //     <Card
  //       header={<Heading level="h3">Test Header</Heading>}
  //       subheader={<Heading level="h6">Test Sub Header</Heading>}
  //       icon={<p>icon</p>}
  //     >
  //       My basic card test
  //     </Card>
  //   );
  //   expect(screen.getByText("My basic card test")).toBeInTheDocument();
  //   expect(screen.getByText("Test Header")).toBeInTheDocument();
  //   expect(screen.getByText("Test Sub Header")).toBeInTheDocument();
  //   expect(screen.getByText("icon")).toBeInTheDocument();
  // });

  // test("it renders with a header, subheader, icon img", () => {
  //   render(
  //     <Card media={{ img: <img src={image} alt="test-demo" /> }}>
  //       My basic card test
  //     </Card>
  //   );
  //   expect(screen.getByAltText("test-demo")).toBeInTheDocument();
  // });

  // test("it renders with media object", () => {
  //   const media = {
  //     video: {
  //       src: demoVideo,
  //       transcript: "TranscriptPlaceHolder",
  //       tracks: [
  //         {
  //           src: "",
  //           kind: "caption",
  //           label: "caption",
  //         },
  //       ],
  //     },
  //   };
  //   render(
  //     <Card
  //       header={<Heading level="h3">Test Header</Heading>}
  //       subheader={<Heading level="h6">Test Sub Header</Heading>}
  //       media={media}
  //     />
  //   );
  //   expect(screen.getByRole("button")).toHaveTextContent("Download transcript");
  // });

  // test("it renders with media object with custom text", () => {
  //   const media = {
  //     video: {
  //       src: demoVideo,
  //       transcript: "TranscriptPlaceHolder",
  //       transcriptButtonText: "Custom Download Transcript",
  //       tracks: [
  //         {
  //           src: "",
  //           kind: "caption",
  //           label: "caption",
  //         },
  //       ],
  //     },
  //   };
  //   render(
  //     <Card
  //       header={<Heading level="h3">Test Header</Heading>}
  //       subheader={<Heading level="h6">Test Sub Header</Heading>}
  //       media={media}
  //     />
  //   );
  //   expect(screen.getByRole("button")).toHaveTextContent(
  //     "Custom Download Transcript"
  //   );
  // });
});
