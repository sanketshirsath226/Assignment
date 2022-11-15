/* Problem Statement : write a js fn to find the extension of the given filename, in the absence  */

function extnExtractor(a){
    filterFile = a.split(".")
    filterFileLength = filterFile.length;
    if(filterFileLength==1){
        return false
    }
    else{
        return filterFile.at(-1);
    }
}