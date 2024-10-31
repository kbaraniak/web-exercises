function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateName(username) {
    const usernameRegex = /^[a-zA-Z][a-zA-Z_-]{2,63}$/;
    return usernameRegex.test(username);
}

function validateSubname(subname) {
    const usernameRegex = /^[a-zA-Z][a-zA-Z_-]{2,83}$/;
    return usernameRegex.test(subname);
}

function validateTitle(title) {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{0,50}$/;
    return usernameRegex.test(title);
}


function validateString(input) {
    const regex = /^[a-zA-Z.,\s]+$/;
    return regex.test(input);
}

function __failForm(){
    alert("Podano nieprawidłowe dane")
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('#contactForm'); // Select the form using querySelector

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        $email = document.querySelector("#f_email");
        $firstname = document.querySelector("#f_imie");
        $surname = document.querySelector("#f_nazwisko");
        $title = document.querySelector("#f_temat");
        $message = document.querySelector("#f_tresc");
        validateStep1 = validateEmail($email.value);
        validateStep2 = validateName($firstname.value);
        validateStep3 = validateSubname($surname.value);
        validateStep4 = validateTitle($title.value);
        validateStep5 = validateString($message.value);
        
        $email.parentElement.classList.remove("fail")
        $firstname.parentElement.classList.remove("fail")
        $surname.parentElement.classList.remove("fail")
        $title.parentElement.classList.remove("fail")
        $message.parentElement.classList.remove("fail")
        // if(!validateStep1 && !validateStep2 && !validateStep3 && !validateStep4 && !validateStep5){
        //     alert("Formularz został wysłany")
        // } else{
        //     alert("W formularzu występują błędy. Upewnij się, że wszystkie pola zostały wpisane poprawnie")
        // }

        // if(validateStep1){
        //     if(validateStep2){
        //         if(validateStep3){
        //             if(validateStep4){
        //                 if(validateStep5){
        //                     alert("Formularz został wysłany")
        //                 } else {
        //                     $message.parentElement.classList.add("fail")
        //                     alert("Treść wiadomości zawiera niedozwolone znaki")
        //                 }
        //             } else {
        //                 $title.parentElement.classList.add("fail")
        //                 alert("Podano niepoprawno tytuł")
        //             }
        //         } else {
        //             $surname.parentElement.classList.add("fail")
        //             alert("Podano niepoprawne Nazwisko")
        //         }
        //     } else {
        //         $firstname.parentElement.classList.add("fail")
        //         alert("Podano niepoprawne Imię")
        //     }
        // } else {
        //     $email.parentElement.classList.add("fail")
        //     alert("Podano niepoprawny adres E-mail")
        // }

        if(validateStep1){
            if(validateStep2){
                if(validateStep3){
                    if(validateStep4){
                        if(validateStep5){
                            alert("Formularz został wysłany")
                        } else {
                            $message.parentElement.classList.add("fail")
                            __failForm();
                        }
                    } else {
                        $title.parentElement.classList.add("fail")
                        __failForm();
                    }
                } else {
                    $surname.parentElement.classList.add("fail")
                    __failForm();
                }
            } else {
                $firstname.parentElement.classList.add("fail")
                __failForm();
            }
        } else {
            $email.parentElement.classList.add("fail")
            __failForm();
        }
    });
});
