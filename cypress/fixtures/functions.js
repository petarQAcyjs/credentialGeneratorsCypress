export function generateString(noOfCharacters) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < noOfCharacters) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export function generateEmail() {
    let prefix = "newUser";
    let body = generateString(5);
    let suffix = "@cypress.com";
    return prefix + body + suffix;
}

export function generateNumber(noOfCharacters) {
    let result = '';
    const firstCharacter = '123456789';
    const remainingCharacters = '0123456789';
    const remainingCharactersLength = remainingCharacters.length;
    let counter = 0;
    result += firstCharacter.charAt(Math.floor(Math.random() * firstCharacter.length));
    counter += 1;
    while (counter < noOfCharacters) {
        result += remainingCharacters.charAt(Math.floor(Math.random() * remainingCharactersLength));
        counter += 1;
    }
    return result;
}

export function generatePhoneNumber() {
    let prefix = "+38160";
    let body = generateNumber(7);
    return prefix + body;
}