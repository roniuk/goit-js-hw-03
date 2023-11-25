function makeArray(firstArray, secondArray, maxLength) {
    let newArray = firstArray.concat(secondArray);
    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength);     
    } else return newArray;
    }
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3); // ["Mango", "Poly", "Ajax"]
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4); // ["Mango", "Poly", "Houston", "Ajax"]
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3); // ["Mango", "Ajax", "Chelsea"]
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2); // ["Earth", "Jupiter"]
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4); // ["Earth", "Jupiter", "Neptune", "Uranus"]
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0); // []
