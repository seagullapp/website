// import bcrypt from 'bcrypt';

// export default async function hash(text: string): Promise<string> {
//     const saltRounds = parseInt(process.env.SALT_ROUNDS || "10");
//     return bcrypt.hash(text, saltRounds);
// }

import argon2 from "argon2"

export default async function hash(text: string): Promise<string> {
    try {
        // Hash the text using argon2 with a default settings
        const hash = await argon2.hash(text);
        return hash;
    } catch (error) {
        console.error('Error hashing text:', error);
        throw new Error('Hashing failed');
    }
}
