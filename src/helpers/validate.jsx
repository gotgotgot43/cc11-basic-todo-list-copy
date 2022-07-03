function validateRegister(email, username, phoneNumber) {
    const newError = {};
    if (isRequire(email)) {
        newError.email = 'email is required';
    } else {
        newError.email = '';
    }

    if (isRequire(username)) {
        newError.username = 'username is required';
    } else {
        newError.username = '';
    }

    if (isRequire(phoneNumber)) {
        newError.phoneNumber = 'phone number is required';
    } else if (!len(phoneNumber, 10)) {
        newError.phoneNumber = 'Invalid phone number format';
    } else {
        newError.phoneNumber = '';
    }

    return newError;
}

function isRequire(value) {
    return !!!value;
}

function len(value, length) {
    return value.length === length;
}
export { validateRegister };
