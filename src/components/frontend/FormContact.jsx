const FormContact = () => {
  return (
    <form action="">
      <label>Escribe tu correo correo</label>
      <input type="text" placeholder="Escribe su correo" />
      <label>Escribe el asunto</label>
      <input type="text" placeholder="Escribe el asunto" />
      <label>Escribe el mensaje</label>
      <textarea placeholder="Escribe el mensaje" />
      <button>Enviar</button>
    </form>
  );
};

export default FormContact;