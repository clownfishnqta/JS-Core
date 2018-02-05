function emailValidation(email) {
    email = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/.test(email)
        ? console.log('Valid')
        : console.log('Invalid');
}
emailValidation('valid@email.bg');
emailValidation('invalid@emai1.bg');