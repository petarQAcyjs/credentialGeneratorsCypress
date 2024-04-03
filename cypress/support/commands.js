import { registrationPage, loginPage } from './pom';
import { generateName, generateSurname, generateEmail, generatePhoneNumber } from "../fixtures/functions";

Cypress.Commands.add("registerUser", () => {
  cy.get(registrationPage.firstname).type(generateName());
  cy.get(registrationPage.lastname).type(generateSurname());
  cy.get(registrationPage.email).type(generateEmail());
  cy.get(registrationPage.telephone).type(generatePhoneNumber());
  cy.get(registrationPage.password).type("testing123");
  cy.get(registrationPage.confirmPassword).type("testing123");
  cy.get(registrationPage.subNo).click();
  cy.get(registrationPage.termsCheckbox).click();
  cy.get(registrationPage.continueButton).click();
});

Cypress.Commands.add("loginSession", (email, password) => {
  cy.session("login", () => {
    cy.visit("/index.php?route=account/login");
    cy.get(loginPage.email).type(email);
    cy.get(loginPage.password).type(password);
    cy.get(loginPage.loginButton).click();
  }).then((session) => {
    Cypress.session = session;
  });
});

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/index.php?route=account/login");
  cy.get(loginPage.email).type(email);
  cy.get(loginPage.password).type(password);
  cy.get(loginPage.loginButton).click();
});