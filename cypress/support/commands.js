import { registrationPage } from './pom';
import { generateName, generateSurname, generateEmail, generatePhoneNumber } from "../fixtures/functions";
let firstname = generateName()
let lastaname = generateSurname()
let email = generateEmail()
let telephone = generatePhoneNumber()

Cypress.Commands.add('registerUser', () => {
    firstname = generateName()
    cy.get(registrationPage.firstname).type(generateName()).as('firstname');
    lastaname = generateSurname()
    cy.get(registrationPage.lastname).type(generateSurname()).as('lastname');
    email = generateEmail()
    cy.get(registrationPage.email).type(generateEmail()).as('email');
    telephone = generatePhoneNumber()
    cy.get(registrationPage.telephone).type(generatePhoneNumber()).as('telephone');
    cy.get(registrationPage.password).type('testing123');
    cy.get(registrationPage.confirmPassword).type('testing123');
    cy.get(registrationPage.subNo).click();
    cy.get(registrationPage.termsCheckbox).click();
    cy.get(registrationPage.continueButton).click();
  })