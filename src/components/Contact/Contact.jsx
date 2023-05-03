
import { useState } from 'react';
import  '../Contact/Contact.css';

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    function sendForm(event) {
        event.preventDefault();
        
        console.log("Formulário enviado");

        const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone} \Mensagem: ${message}`;

        const whatsNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

        const linkWhatsApp = `https://wa.me/${whatsNumber}?text=${encodeURIComponent(text)}`;

        window.open(linkWhatsApp, '-blank');
    }

    function phoneMask(event) {
        const textField = event.target.value;

        const onlyNumbers = textField.replace(/\D/g, '').substring(0, 11);

        let formatedPhone = onlyNumbers.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

        if (onlyNumbers.length < 11) {
            formatedPhone = onlyNumbers.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        }
        setPhone(formatedPhone);
    }

    return(
        <>
        <form onSubmit={sendForm}>

            <fieldset>
                <label htmlFor="input-nome">Nome</label>
                <input 
                    type="text" 
                    name="input-nome" 
                    id="input-nome" 
                    required minLength="2"
                    value={name}
                    onChange={(event) => setName(event.target.value)} 
                />
            </fieldset>

            <fieldset>
                <label htmlFor="input-email">E-mail</label>
                <input 
                    type="email" 
                    name="input-email" 
                    id="input-email" 
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} 
                />
            </fieldset>

            <fieldset>
                <label htmlFor="input-tel">Telefone</label>
                <input 
                    type="tel" 
                    name="input-tel" 
                    id="input-tel" 
                    placeholder="(99) 99999-9999" 
                    required pattern="^\(\d{2}\) \d{5}-\d{4}$" 
                    maxLength="15"
                    value={phone}
                    onChange={phoneMask} 
                />
            </fieldset>

            <fieldset>
                <label htmlFor="input-msg">Mensagem</label>
                <textarea 
                    name="input-msg" 
                    id="input-msg" 
                    cols="30" 
                    rows="10"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                ></textarea>
            </fieldset>

            <center>
                <input 
                    type="submit" 
                    value="ENVIAR" 
                    className="button" 
                />
            </center>

        </form>


      </>

    )
}