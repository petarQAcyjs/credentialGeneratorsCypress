import { registrationPage } from "../support/pom";
import { generateEmail, generatePhoneNumber } from "../fixtures/functions";

describe("Register User", () => {
  beforeEach("Visit the page", () => {
    cy.visit("/index.php?route=account/register");
  });

  it("Registers new user with unique credentials", () => {
    cy.get(registrationPage.firstname).type("Tester");
    cy.get(registrationPage.lastname).type("Cypressovski");
    cy.get(registrationPage.email).type(generateEmail());
    cy.get(registrationPage.telephone).type(generatePhoneNumber());
    cy.get(registrationPage.password).type('testing123');
    cy.get(registrationPage.confirmPassword).type('testing123');
    cy.get(registrationPage.subNo).click();
    cy.get(registrationPage.termsCheckbox).click();
    cy.get(registrationPage.continueButton).click();
    cy.url().should("include", "/success");
  });
});
