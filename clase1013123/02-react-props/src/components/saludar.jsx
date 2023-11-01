/* const Saludar = (props) => {

  return (
    <div>
        <h1>Hola {props.nombre} </h1>
    </div>
  )
}

export default Saludar */

//= ================= Desestructurando el objeto props =================================
const Saludar = ({ nombre, apellido }) => {
  return (
    <div>
      <h1>Hola {nombre} {apellido} </h1>
    </div>
  )
}

export default Saludar
