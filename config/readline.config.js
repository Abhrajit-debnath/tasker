import readline from 'readline';
import process from 'process';

export const rn = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

