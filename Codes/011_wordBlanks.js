function wordBlanks(Noun, Adjective, Verb, Adverb)
{
     var result=" ";
     result+="The " + Adjective + " " + Noun + " " + Verb +" to the store " + Adverb + ".";

     return result;
}

console.log(wordBlanks("bike", "slow", "flew", "slowly"));