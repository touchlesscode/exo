export const capitalize = (mySentence: string): string => {
    const words = mySentence.split(" ");
    return words.map((word) => { 
        if (!word.length) {
            return '';
        }
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
}
