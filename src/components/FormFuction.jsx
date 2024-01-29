import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ApiKey from '../ApiKey';


export const FormFunction = () => {

    const refForm = useRef()

    const [botonEnviar, setBotonEnviar] = useState("Enviar Formulario");

    const cambiarTextoBoton = () => {
        setBotonEnviar("¡Formulario enviado!");
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
    }

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

                <div className='w-full mt-10  flex justify-center lg:justify-end'>

                    {botonEnviar === "Enviar Formulario" ? (
                        <button
                            className='w-full font-medium lg:w-auto text-white py-2 px-4 rounded-md hover:bg-red-800 duration-300'
                            style={{ backgroundColor: "#AA2A2A;" }}
                            id=''
                            onClick={handleSubmit}  // Add this line if you want to handle the click event
                        >
                            {botonEnviar}
                        </button>
                    ) : (
                        <button
                            className='w-full font-medium lg:w-auto text-white py-2 px-4 rounded-md hover:bg-red-800 duration-300'
                            style={{ backgroundColor: "#4CBB17" }}
                            id=''
                        >
                            <div className='flex justify-center items-center gap-x-2'>
                                <svg x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                    <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                                    <path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
                                </svg>
                                <span className='m-auto'>{botonEnviar}</span>
                            </div>
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}