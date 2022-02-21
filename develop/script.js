// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

    // Add event listener to generate button

    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
      
      }

      generateBtn.addEventListener("click", writePassword);








    
    // Getting character length

    var setLength = function() {
    var input = "";
    while (input === "" || input === null) {
        input = prompt("Type a password length between 8 and 128 characters.");
    }
    
    if (input >= 8 && input <= 128) {
        window.alert("Your password will be " + input + " characters long.");
        console.log("Length = " + input + " characters");
        return input;
        }
    else {
        window.alert("Please enter a valid option. Try again.");
        setLength();
        }
        return input;
    };

    setLength();

    // Do we want capitals?
    var passwordCriteria = function() {
        var capital = window.confirm("Do you want capital letters to be in your password?");
        if (capital === true) {
            console.log("Yes capital");
        }
        else {
            console.log("No capital");
        }

    //Do we want lowercase?

        var lower = window.confirm("Do you want lowercase letters to be in your password?");
        if (lower === true) {
            console.log("Yes lowercase");
        }
        else {
            console.log("No lowercase");
        }

    // Do we want numbers?

        var num = window.confirm("Do you want numbers to be in your password?");
        if (num === true) {
            console.log("Yes numbers");
        }
        else {
            console.log("No numbers");
        }

    // Do we want special characters?

        var special = window.confirm("Do you want special characters to be in your password?");
        if (special === true) {
            console.log("Yes special characters");
        }
        else {
            console.log("No special characters");
        }

        if (capital === false && lower === false && num === false && special === false) {
            window.alert("You must choose at least one of the criteria to generate a password. Try again.");
            return passwordCriteria();
        }
    };

    console.log(passwordCriteria());

    // Random character generator

    var characterPool = {
    specialArray: "!@#$%^&*()-_=+[]{}<>.,/?",
    capsArray: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerArray: "abcdefghijklmnopqrstuvwxyz",
    numberArray: "0123456789"
    }

    var characterRandomizer = [

    function randomSpecial() {
        var value = characterPool.specialArray[Math.floor(Math.random() * specialArray.length)];
        return value;
    },

    function randomCaps() {
        var value = characterPool.capsArray[Math.floor(Math.random() * capsArray.length)];
        return value;
    },

    function randomLower() {
        var value = characterPool.lowerArray[Math.floor(Math.random() * lowerArray.length)];
        return value;
    },
    
    function randomNumber() {
        var value = characterPool.numberArray[Math.floor(Math.random() * numberArray.length)];
        return value;
    }
    ];

    
    // Variables that will be determined by the input of the user

    function generatePassword() {
        var getLength = setLength();
        var password = "";
        while (getLength > password.length) {
            var finalProduct = characterRandomizer[Math.floor(Math.random() * characterRandomizer.length)];
        }

    }