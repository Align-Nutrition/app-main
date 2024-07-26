import Test from "./test";

describe("<Test />", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the Home page
    cy.mount(<Test />);

    // The new page should contain an h1 with "Home"
    cy.get("h1").should("have.text", "test");
  });
});
