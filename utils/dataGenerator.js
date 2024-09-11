class DataGenerator {

    static generateLetters(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        return this.generateRandomString(characters, length);
    }

    static generateRandomNumber(length) {
        const characters = '123456789';
        return parseInt(this.generateRandomString(characters, length), 10);
    }

    static generateAlphanumeric(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return this.generateRandomString(characters, length);
    }

    static generateSpecialCharacters(length) {
        const specialCharacters = '!@#$%^&*()_+{}:"<>?|[];\',./`~-=';
        return this.generateRandomString(specialCharacters, length);
    }

    static generateRandomString(characters, length) {
        return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    }

    static generateRandomEmail() {
        const localPartLength = 10;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const localPart = this.generateRandomString(characters, localPartLength);
        return `${localPart}@gmail.com`;
    }
}

module.exports = DataGenerator;