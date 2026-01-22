function maskEmail(email){
  const atIndex = email.indexOf("@"); //indexOf("@") → finds where the domain starts
  const username = email.slice(0, atIndex); //slice() → separates username and domain
  const domain = email.slice(atIndex); 
  const maskedUsername = 
  username[0]+ "*".repeat(username.length -2) + username[username.length -1]; ////repeat() → creates the correct number of *

  return maskedUsername + domain;
}
const email = "ankita@google.com";
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));