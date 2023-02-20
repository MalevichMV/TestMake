function textField() {
    const input = document.querySelector('.UI__textField-input');
    const error = document.querySelector('.UI__textField-errorMessage');
    
    const validateEmail = (email) => {
        return email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) !== null;
      };

    input.addEventListener('blur', (e) => {
        if (e.target.value !== '' && validateEmail(e.target.value) === false)
        {
            input.classList.add('input_error')
            error.classList.add('show_errorMessage')
        }
    });

    input.addEventListener('focus', () => {
        input.classList.remove('input_error')
        error.classList.remove('show_errorMessage')
    });
}

export default textField;