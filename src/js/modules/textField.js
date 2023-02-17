function textField() {
    let input = document.querySelector('.UI__textField-input',),
        error = document.querySelector('.UI__textField-errorMessage');
    
    const validateEmail = (email) => {
        return email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    input.addEventListener('input', (e) => {
        if (validateEmail(e.target.value) === null)
        {
            input.classList.add('input_error');
            input.classList.remove('input_correct');
            input.classList.remove('input_focus');
            input.classList.remove('input_hover');
            error.style.display = 'block';
        }
            else 
        {
            input.classList.add('input_correct');
            input.classList.remove('input_error');
            input.classList.remove('input_focus');
            input.classList.remove('input_hover');
            error.style.display = 'none';
        }
            
        if (e.target.value === '')
        {
            input.classList.add('input_focus');
            input.classList.remove('input_correct');
            input.classList.remove('input_error');
            error.style.display = 'none';
        }
    });

    input.addEventListener('focus', () => {
        if (!input.classList.contains("input_error") && 
            !input.classList.contains("input_correct"))
        {
            input.classList.add('input_focus');
        }
    });
    input.addEventListener('blur', () => {
        if (input.classList.contains("input_focus"))
            input.classList.remove('input_focus');
    });
    input.addEventListener('mouseover', () => {
        if (!input.classList.contains("input_error") && 
            !input.classList.contains("input_correct"))
        {
            input.classList.add('input_hover');
        }
    });
    input.addEventListener('mouseout', () => {
        if (input.classList.contains("input_hover"))
            input.classList.remove('input_hover');
    });
}

export default textField;