class DataGenerator {
    // Método para generar una cadena de letras (de 1 a más de 255 caracteres)
    static generateLetters(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        return this.generateRandomString(characters, length);
    }

    // Método para generar un número aleatorio (de 1 a más de 10,000)
    static generateRandomNumber(length) {
        const characters = '0123456789';
        return parseInt(this.generateRandomString(characters, length), 10);
    }

    // Método para generar una cadena alfanumérica (de 1 a más de 255 caracteres)
    static generateAlphanumeric(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return this.generateRandomString(characters, length);
    }

    // Método para generar una cadena de caracteres especiales (de 1 a más de 255 caracteres)
    static generateSpecialCharacters(length) {
        const specialCharacters = '!@#$%^&*()_+{}:"<>?|[];\',./`~-=';
        return this.generateRandomString(specialCharacters, length);
    }

    // Método reutilizable para generar cualquier tipo de cadena aleatoria
    static generateRandomString(characters, length) {
        return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    }
}

module.exports = DataGenerator;