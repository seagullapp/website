import { encodeBase32LowerCaseNoPadding } from "@oslojs/encoding";

export default function generateSessionToken() : string {
    const bytes = new Uint8Array(20);
    crypto.getRandomValues(bytes);
    const token : string = encodeBase32LowerCaseNoPadding(bytes);
    return token;
}