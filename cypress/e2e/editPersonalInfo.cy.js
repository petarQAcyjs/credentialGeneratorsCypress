import { generateName, generatePhoneNumber, generateSurname } from "../fixtures/functions";
import { accountPage, accountEditPage, navigationBar } from "../support/pom";

const name = generateName();
const surname = generateSurname();
const phone = generatePhoneNumber();

describe("Check personal info", () => {
  beforeEach("Log in", () => {
    cy.loginSession('bobanrajovic@001.rs', 'usnebojevina123');
  });

  it("Changes name successfully", () => {
    cy.visit("/index.php?route=account/account");
    cy.get(accountPage.editAccount).click();
    cy.get(accountEditPage.firstname).clear().type(generateName()).as("name");
    cy.get(accountEditPage.continueButton).click();
    cy.get(accountEditPage.successMessage)
      .should("be.visible")
      .and("contain", "Success: Your account has been successfully updated.");
  });
  it("Changes surname successfully", () => {
    cy.visit("/index.php?route=account/account");
    cy.get(accountPage.editAccount).click();
    cy.get(accountEditPage.lastname)
      .clear()
      .type(generateSurname())
      .as("surname");
    cy.get(accountEditPage.continueButton).click();
    cy.get(accountEditPage.successMessage)
      .should("be.visible")
      .and("contain", "Success: Your account has been successfully updated.");
  });
  it("Changes telephone successfully", () => {
    cy.visit("/index.php?route=account/account");
    cy.get(accountPage.editAccount).click();
    cy.get(accountEditPage.telephone)
      .clear()
      .type(generatePhoneNumber())
      .as("phone");
    cy.get(accountEditPage.continueButton).click();
    cy.get(accountEditPage.successMessage)
      .should("be.visible")
      .and("contain", "Success: Your account has been successfully updated.");
  });
});