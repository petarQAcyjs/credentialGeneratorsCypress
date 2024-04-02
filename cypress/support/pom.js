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

const navigationBar = {
    myAccount: '#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link',
    logout: '.mz-sub-menu-96 > :nth-child(6) > .icon-left'
}

export { registrationPage, navigationBar };