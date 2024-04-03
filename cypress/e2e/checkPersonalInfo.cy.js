import { registrationPage, accountPage, accountEditPage, navigationBar } from "../support/pom";
import { generateName, generateSurname, generateEmail, generatePhoneNumber } from "../fixtures/functions";

const name = generateName();
const email = generateEmail();
const telephone = generatePhoneNumber();
const surname = generateSurname();

describe("Check personal info", () => {
  before("Visit the page and register user", () => {
    cy.log('close all sessions')
    Cypress.session.clearAllSavedSessions()
    cy.visit("/index.php?route=account/register");
    cy.get(registrationPage.firstname).type(name).as("name");
    cy.get(registrationPage.lastname).type(surname).as("surname");
    cy.get(registrationPage.email).type(email).as("email");
    cy.get(registrationPage.telephone).type(telephone).as("telephone");
    cy.get(registrationPage.password).type("testing123");
    cy.get(registrationPage.confirmPassword).type("testing123");
    cy.get(registrationPage.subNo).click();
    cy.get(registrationPage.termsCheckbox).click();
    cy.get(registrationPage.continueButton).click();
    cy.get(navigationBar.myAccount).trigger("mouseover");
    cy.get(navigationBar.logout).click();
  });

  beforeEach("login", () => {
    cy.login(email, "testing123");
  });

  it("Checks if the name is the same as in the form", () => {
    cy.visit("/index.php?route=account/account");
    cy.get(accountPage.editAccount).click();
    cy.get(accountEditPage.firstname).should("have.value", name);
  });

  it("Checks if the surname is the same as in the form", () => {
    cy.visit("/index.php?route=account/account");
    cy.get(accountPage.editAccount).click();
    cy.get(accountEditPage.lastname).should("have.value", surname);
  });

  it("Checks if the email is the same as in the form", () => {
    cy.visit("/index.php?route=account/account");
    cy.get(accountPage.editAccount).click();
    cy.get(accountEditPage.email).should("have.value", email);
  });

  it("Checks if the phone number is the same as in the form", () => {
    cy.visit("/index.php?route=account/account");
    cy.get(accountPage.editAccount).click();
    cy.get(accountEditPage.telephone).should("have.value", telephone);
  });

});