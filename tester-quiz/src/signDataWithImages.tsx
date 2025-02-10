import signData from "./signData.tsx";

/**
 * Used to display sign pictures with title and  answer .
 * @param cacheOfTitlesAlreadyUsed any/object
 * @param title string
 * @returns string
 */

interface SignDataWithImages {
    title: string;
    answer : string;
    imagePath: string;
    explanation: string;
    number: number;
    isImage: boolean; 
}

/**
 * 
 * @returns Array<SignDataWithImages
 * @interface SignDataWithImages => 
 * @property title string 
 * @property  answer  string
 * @property imagePath string
 */
const completeSignDataAddImages = () => {
    const signs: Array<SignDataWithImages> = [];

    signData.forEach((sign) => {
        const newTitleCard: SignDataWithImages = {title: sign.title,  answer : sign.answer , imagePath: sign.imagePath, explanation: sign.answer, isImage: true, number: 0};
        signs.push(newTitleCard);
    });

    return signs; 
}

const signDataWithImages = completeSignDataAddImages(); 
export default signDataWithImages;