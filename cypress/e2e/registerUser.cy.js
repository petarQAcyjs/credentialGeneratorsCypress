describe("Register User", () => {
  beforeEach("Visit the page", () => {
    cy.visit("/index.php?route=account/register");
  });

  it("Registers new user with unique credentials", () => {
    cy.registerUser();
    cy.url().should("include", "/success");
  });
});