import Destino from "../paginas/Destino";
import data from "./data";

const CrearListado = ({ zona }) => {
  const listado = data.filter((destino) => destino.zona === zona);
  console.log(listado);
  return (
    <>
      <section className="lista">
      {listado.map((dato, index)=>
        (<Destino key={index} nombre={dato.nombre} imagen={dato.imagen} situacion={dato.situacion}/>)
        )}
    </section>
    </>
  );
};

export default CrearListado;
