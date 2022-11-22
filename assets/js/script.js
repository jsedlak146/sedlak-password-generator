// Assignment Code


//prompt user for password criteria

//length of password has to be at least 8 character
//no more than 128 characters

//password needs to include lc,uc,numeric or special characters

//var uppercase = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'].split(' , ')
//var lowercase = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'].split(' , ')
//var specChar = ['!,@,#,$,%,^,&,*'].split(' , ')
//var numbers = ['1,2,3,4,5,6,7,8,9'].split(' , ')

function passEnter () {
    var length = parseInt (
      prompt('How many characters would you like in your password?')
    );
    console.log(length)
//makes sure user puts in numeric value

    if (Number.isNaN(length)) {
    alert('password must be betwen 8 and 128 characters');
    return null;
}
passEnter()

//conditional to keep it between 8-128 characters

if (length < 8) {
  alert('Please keep your password from 8 and 128 characters');
  return null;
}

//conditional to keep it below 128 charcters

if (length > 128) {
  alert('Please keep your password from 8 and 128 characters');
  return null;
}

//conditional statement to check what characters wants user to have

var haslowerCase = confirm('Do you want to incorporate lowecase letter?');
var hasUppercase = confirm('Do you want to incorporate uppercase letters?');
var hasspecChar = confirm('Do you want to use special characters?');
var hasNumbers = confirm('Do you want to use numbers?');

//create conditional for one character type

if (
haslowerCase === false &&
hasUppercase === false &&
hasspecChar === false &&
hasNumbers === false 
) {
  alert('Must choose one char type')
  return null;
}

//keys

var passwordOptions = {
  length: length,
  haslowerCase: haslowerCase,
  hasUppercase: hasUppercase,
  hasspecChar: hasspecChar,
  hasNumbers: hasNumbers,

};

console.log(passwordOptions)
return passwordOptions


}
passEnter()






var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

