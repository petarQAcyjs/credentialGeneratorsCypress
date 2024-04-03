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

export function generateName() {
    const names = ['Miloš', 'Nikola', 'Marko', 'Filip', 'Aleksa', 
      'Mihajlo', 'Luka', 'Stefan', 'Petar', 'Andrej', 
      'Jovan', 'Uroš', 'Mateja', 'Teodora', 'Tamara',
      'Jelena', 'Ana', 'Marija', 'Sofija', 'Natalija',
      'Aleksandra', 'Katarina', 'Milica', 'Anastasija', 'Dunja',
      'Una', 'Sara', 'Lena', 'Nina', 'Tijana',
      'Ivana', 'Isidora', 'Anđela', 'Viktorija', 'Valentina',
      'Magdalena', 'Kristina', 'Nevena', 'Jovana', 'Zorana',  
      'Danica', 'Jelisaveta', 'Vesna', 'Jovanka', 'Dragana'];
  
    const randomName = names[Math.floor(Math.random() * names.length)];
    return randomName;
  }

  export function generateSurname() {
    const names = ['Petrović', 'Jovanović', 'Nikolić', 'Marković', 'Đorđević',
      'Stojanović', 'Ilić', 'Stanković', 'Pavlović', 'Mitrović',
      'Kovačević', 'Živković', 'Stevanović', 'Lukić', 'Todorović',
      'Simić', 'Janković', 'Milić', 'Dimitrijević', 'Jovičić',
      'Ristić', 'Đurić', 'Petković', 'Mladenović', 'Jocić',
      'Stamenković', 'Vasić', 'Radojević', 'Milovanović', 'Lazarević',
      'Marić', 'Jelić', 'Jeremić', 'Dakić', 'Miljković', 
      'Radić', 'Luković', 'Marjanović', 'Mirković', 'Kostić'];
  
    const randomSurname = names[Math.floor(Math.random() * names.length)];
    return randomSurname;
  }

  export function generatePassword(noOfCharacters) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*.,?:';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < noOfCharacters) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}