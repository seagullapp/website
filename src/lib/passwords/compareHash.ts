// import bcrypt from "bcrypt"

// Bcrypt (node.js)
// export async function compareHash(text: string, hashed: string): Promise<boolean> {
    //     return await bcrypt.compare(text, hashed);
    // }
    
import argon2 from "argon2";

export async function compareHash(text: string, hashed: string): Promise<boolean> {
    try {
        // Compare the plain text with the hashed value using argon2
        return await argon2.verify(hashed, text);
    } catch (error) {
        // Handle any errors that might occur during comparison
        console.error('Error comparing hashes:', error);
        return false;
    }
}
