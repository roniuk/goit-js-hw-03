function slugify(title) {
       
slug = title.toLowerCase().replace(/[^a-zA-Z0-9 -]/, " ").replace(/\s/g, "-");
     return console.log(`"${slug}"`);  
}  
    
slugify("Arrays for begginers"); // "arrays-for-begginers"
slugify("English for developer"); // "english-for-developer"
slugify("Ten secrets of JavaScript"); // "ten-secrets-of-javascript"
slugify("How to become a JUNIOR developer in TWO WEEKS"); // "how-to-become-a-junior-developer-in-two-weeks"

