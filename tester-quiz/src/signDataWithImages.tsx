import signData from "./signData.tsx";

/**
 * Will format the string by removing spaces and uppercasing the string provided.
 * @param title string
 * @returns string
 */
const getFormattedTitle = (title:string) => {            
    return title.replace(/\s/g, "").toLocaleUpperCase();
}

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

interface SignTitleAndImagePath {
    title: string;
    imagePath: string;
}

/**
 * Will take the title and match it to a image path.
 * Purpose is to avoid importing a hundred plus images. 
 * @param cacheOfTitlesAlreadyUsed : any object
 * @param title string
 * @returns SignTitleAndImagePath
 * @interface SignTitleAndImagePath 
 * @property title string
 * @property imagePath string 
 */
const findImageTitleAndPath = (cacheOfTitlesAlreadyUsed: any, title: string) => {
    const titleToCheck: string = title.concat("");
    const formattedTitle:string = getFormattedTitle(titleToCheck);
    let isTitleAlreadyIncluded = Object.hasOwn(cacheOfTitlesAlreadyUsed, titleToCheck);
    let increment: number = 1; 
    let finalTitle: string = ""; 
    while (isTitleAlreadyIncluded) {
        finalTitle = formattedTitle.concat(increment.toString());
        isTitleAlreadyIncluded = Object.hasOwn(cacheOfTitlesAlreadyUsed, finalTitle);
        increment = increment + 1; 
        finalTitle = ""; 
    }
    // no useless escape character
    return {title:finalTitle, imagePath: `src\\SignPictures\${finalTitle}.jpg`}
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
    const titleCache = {};//collects titles in reference to a capitalized no spaces format stored as .jpg files

    signData.forEach((sign) => {
        const newTitleCard: SignDataWithImages = {title: sign.title,  answer : sign.answer , imagePath: "", explanation: sign.answer, isImage: true, number: 0};
        const imageTitleAndPath: SignTitleAndImagePath = findImageTitleAndPath(titleCache, sign.title);
        titleCache[imageTitleAndPath.title] = imageTitleAndPath.title;
        newTitleCard.imagePath = imageTitleAndPath.imagePath;
        signs.push(newTitleCard);
    });

    return signs; 
}

const signDataWithImages = completeSignDataAddImages(); 
export default signDataWithImages;