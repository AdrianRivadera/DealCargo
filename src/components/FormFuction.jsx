import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ApiKey from '../ApiKey';
import ReCAPTCHA from "react-google-recaptcha";

export const FormFunction = () => {
    const refForm = useRef();
    const [botonEnviar, setBotonEnviar] = useState("Enviar Formulario");

    useEffect(() => {
        // Acciones que deseas realizar después de que el componente se monte
        console.log('Componente FormFunction montado');
    }, []);

    const cambiarTextoBoton = () => {
        setBotonEnviar("¡Formulario enviado!");
    };

    const onChange = () => {
        console.log('Captcha válido!');
        document.getElementById('botonEnvio').removeAttribute('disabled');
        document.getElementById('botonEnvio').style.visibility = 'visible';
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            ApiKey.SERVICE_ID,
            ApiKey.TEMPLATE_ID,
            refForm.current,
            ApiKey.USER_ID
        ).then(
            (result) => {
                cambiarTextoBoton();
                document.getElementById("usuarioNombre").value = '';
                document.getElementById("usuarioMail").value = '';
                document.getElementById("consulta").value = '';
            },
            (error) => {
                console.log(error);
            }
        );
    };

    return (
        <div>
            <form ref={refForm} action='' onSubmit={handleSubmit}>
                <div className='w-full'>

                    <fieldset >
                        <label className='text-white  font-semibold'>Email:</label>
                        <input name='user_email' type='email' placeholder='Email' id='usuarioMail' required className='my-2 w-full p-2 rounded-md' />
                    </fieldset>
                    <fieldset className='my-4'>
                        <label className='text-white py-1 font-semibold'>Nombre:</label>
                        <input name='user_name' type='text' placeholder='Nombre' id='usuarioNombre' required className='my-2 w-full p-2 rounded-md' />
                    </fieldset>

                </div>
                <fieldset className='flex flex-col'>
                    <label className='text-white py-1 font-semibold'>Comentario:</label>
                    <textarea maxLength="500" name='message' type='email' id='consulta' required className='rounded-md h-24 p-2' />
                </fieldset>

                <div className='w-full mt-10  flex justify-between'>
                    {/* <ReCAPTCHA 
                        className="captcha"
                        sitekey="6Ld61E4mAAAAAAGw68YoZayXagefAZsS_gq_STk4"
                        onChange={onChange}
                    /> */}
                    <button className='text-white bg-red-900 py-2 px-4 rounded-md  hover:bg-red-800 duration-300 ' style={{ backgroundColor: "#AA2A2A;" }} id='' disabled>{botonEnviar}</button>
                </div>
            </form>
        </div>
    );
};
