const cleanIndex = require("./linksIndex");


function findLanguage(message){
    if(message.includes('!js')){
        return 'js';
    }

    else if(message.includes('!CSS')){
        return 'CSS';
    }

    else if(message.includes('!HTML')){
        return 'HTML';
    }
    
    return false;
}

//Function checks similarity of the provided string using jaro-winkler algorithim(close to 1 is similir and close to 0 is diffrent).
function checksimilarity(message,language){
    var distance = require('jaro-winkler');
    var similarity = 0;
    var index = undefined;

    var n = undefined;
    var lastWord = undefined;

    for(let i = 0;i < cleanIndex.length;i++){
        n = cleanIndex[i].lastIndexOf('/');
        lastWord = cleanIndex[i].substring(n+1);
        if(cleanIndex[i].includes(language) && distance(lastWord,message) > similarity){
            similarity = distance(lastWord,message); //getting similarity between to strings 
            index = i;
        }
    }
    

    return index;

}

//getting the link index to the documintation.
function getLinkIndex(message){
    var index = undefined;
    if(findLanguage(message) === 'js'){
        index = checksimilarity(message.slice(4),'JavaScript');
        return index;
    }
    if(findLanguage(message) === 'CSS'){
        index = checksimilarity(message.slice(5),'CSS');
        return index;
    }
    if(findLanguage(message)=== 'HTML'){
        index = checksimilarity(message.slice(6),'HTML');
        return index;
    }
    return checksimilarity(message,'h');//checking for 'h' as it will always be the start of the link(checking the entire links index).
}

module.exports = getLinkIndex, findLanguage;
