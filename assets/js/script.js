// Assignment Code

//prompt user for password criteria

//length of password has to be at least 8 character
//no more than 128 characters

//password needs to include lc,uc,numeric or special characters

function getPasswordOptions() {
  const length = parseInt(
    prompt("How many characters would you like in your password?")
  );
  console.log(length);

  //makes sure user puts in numeric value
  if (Number.isNaN(length)) {
    alert("password must be betwen 8 and 128 characters");
    return null;
  }

  //conditional to keep it between 8-128 characters
  if (length < 8 || length > 128) {
    alert("Please keep your password from 8 and 128 characters");
    return null;
  }
  //conditional statement to check what characters wants user to have, confirm takes in true/false
  const hasLowerCase = confirm("Do you want to incorporate lowecase letter?");
  const hasUpperCase = confirm("Do you want to incorporate uppercase letters?");
  const hasSpecChar = confirm("Do you want to use special characters?");
  const hasNumbers = confirm("Do you want to use numbers?");

  //create conditional for one character type
  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasSpecChar === false &&
    hasNumbers === false
  ) {
    alert("Must choose one char type");
    return null;
  }

  //keys
  const passwordOptions = {
    userLength: length,
    wantLowerCase: hasLowerCase,
    wantUpperCase: hasUpperCase,
    wantSpecChar: hasSpecChar,
    wantNumbers: hasNumbers,
  };
  return passwordOptions;
}

function getPasswordValue(passwordOptions) {
  const uppercase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(
    ","
  );
  const lowercase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(
    ","
  );
  const specChar = "!,@,#,$,%,^,&,*".split(",");
  const numbers = "0,1,2,3,4,5,6,7,8,9".split(",");
  const choices = [];

  // if we do not have any options, return
  if (!passwordOptions) return null;

  //conditional for addition of lowercase/uppercase to possibilities
  if (passwordOptions.wantLowerCase) {
    choices.push(lowercase);
  }
  if (passwordOptions.wantUpperCase) {
    choices.push(uppercase);
  }
  if (passwordOptions.wantSpecChar) {
    choices.push(specChar);
  }
  if (passwordOptions.wantNumbers) {
    choices.push(numbers);
  }

  //Loop through our array of choices and get random characters from each
  let password = "";
  for (let i = 0; i < passwordOptions.userLength; i++) {
    const c = i % choices.length;
    const choice = choices[c];
    const character = getRandomInt(choice.length);
    password += choice[character];
  }
  return password;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

///make a function that randomizes characters
function generatePassword() {
  const options = getPasswordOptions();
  console.log(options);
  if (options) {
    return getPasswordValue(options);
  }
}

const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  if (password) {
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
