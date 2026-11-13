const getUpperCase = (str) => {return str.toUpperCase();}
const getLowerCase = (str) => {return str.toLowerCase();}
function getSentenceCase(str){
    const trimmed = str.trim(); 
    if (!trimmed){return ""}
    const lower = getLowerCase(trimmed);
    return getUpperCase(lower[0]) + lower.slice(1); 
}
function getProperCase(str){
    const splitArray = str.split(" "); 
    for (let i=0; i<splitArray.length; i++){
        splitArray[i] = getSentenceCase(splitArray[i]); 
    }
    return splitArray.join(" "); 
}
console.log(getProperCase("helli world")); 
module.exports = {
    getLowerCase, 
    getUpperCase, 
    getProperCase,
    getSentenceCase,
}