function passValidator(pass) {

    function isValidLength(pass) {
        let isValidPass = true;
        if (pass.length >= 6 && pass.length <= 10) {
            isValidPass = true;
        } else {
            isValidPass = false
        }
        return isValidPass ? true : 'Password must be between 6 and 10 characters'
    }
    function isValidChar(pass) {
        let isValidPass = true;
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();

            if (code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57) {
                isValidPass = true
            } else {
                isValidPass = false;
                break;
            }
        }
        return isValidPass ? true : 'Password must consist only of letters and digits'
    }
    function isValidNum(pass) {
        let isValidPass = true;
        let charNum = 0;
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if (code >= 48 && code <= 57) {
                charNum++;
            }
        }
        if (charNum >= 2) {
            isValidPass = true;
        } else {
            isValidPass = false;
        }

        return isValidPass ? true : 'Password must have at least 2 digits'
    }
    if (isValidLength(pass) !== true) {
        console.log(isValidLength(pass));
    }
    if (isValidChar(pass) !== true) {
        console.log(isValidChar(pass));
    }
    if (isValidNum(pass) !== true) {
        console.log(isValidNum(pass));
    }
    if (isValidLength(pass) === true && isValidChar(pass) === true && isValidNum(pass) === true) {
        console.log('Password is valid');
    }
}
passValidator('MPa#s')