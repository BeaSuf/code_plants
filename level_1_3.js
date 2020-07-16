/**
 * Converts a message into Plant-Latin.
 * @param {string} message - The message to be translated.
 * @return {string} - Translated Plant-Latin message.
 */
  
const translatePlantLatin = (message) => {
    /* Enter your solution here! */
    const chars = [...message.toLowerCase()];
    return chars.map(char => translator[char] ? `${char}${translator[char]}` : `${char}`).join(''); 
}

const translator = {
    "a": "tiva",
    "e": "llia", 
    "i": "mus",
    "o": "phylum",
    "u": "rea"
}

module.exports = {
    translatePlantLatin
}