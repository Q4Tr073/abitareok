import emailjs from "emailjs-com";

export function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_kvqwbb5', 'template_ohwazyr', e.target, '1VIUGNHoGRbgQ6vkh')
    .then((result) => {            
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}