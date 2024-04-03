const registrationPage = {
    firstname: '#input-firstname',
    lastname: '#input-lastname',
    email: '#input-email',
    telephone: '#input-telephone',
    password: '#input-password',
    confirmPassword: '#input-confirm',
    subYes: 'label[for="input-newsletter-yes"]',
    subNo: 'label[for="input-newsletter-no"]',
    termsCheckbox: 'label[for="input-agree"]',
    continueButton: 'input[value="Continue"]'
}

const loginPage = {
    email: '#input-email',
    password: '#input-password',
    loginButton: 'form > .btn'
}

const navigationBar = {
    myAccount: '#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link',
    logout: '.mz-sub-menu-96 > :nth-child(6) > .icon-left'
}

const accountPage = {
    editAccount: ':nth-child(1) > .card-body > .row > :nth-child(1) > .d-inline-flex',
    changePassword: ':nth-child(1) > .card-body > .row > :nth-child(2)',
    modifyAddress: ':nth-child(1) > .card-body > .row > :nth-child(3) > .d-inline-flex',
    modifyWushlist: ':nth-child(1) > .card-body > .row > :nth-child(4) > .d-inline-flex',
    subscribeUnsubcribe: ':nth-child(1) > .card-body > .row > :nth-child(5) > .d-inline-flex'
}

const accountEditPage = {
    firstname: '#input-firstname',
    lastname: '#input-lastname',
    email: '#input-email',
    telephone: '#input-telephone',
    newsletter: '#input-newsletter',
    continueButton: 'input[value="Continue"]',
    backButton: '.float-left > .btn',
    successMessage: '#account-account > .alert'
}

export { registrationPage, loginPage, navigationBar, accountPage, accountEditPage };