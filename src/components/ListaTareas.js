import { useEffect, useState } from "react";
import { db, collection, onSnapshot } from "../firebase/firebase.config";
import {Contenedor} from "../elements/ElementosItem";
import ButtonFiltrar from "../elements/ElementosFiltrar";
import Tarea from "./Tarea";
import Mensaje from "../elements/Mensaje";

const ListaTareas = () => {
    const [tareas, cambiarTareas] = useState([]);
    const [cargando, cambiarCargando] = useState(false);
    const [completados, cambiarCompletados] = useState([])

    useEffect(() => {
        cambiarCargando(true);
        onSnapshot(collection(db, "tareas"), (snapshot) => {

            let arrTareas = snapshot.docs.map((doc) => { 
                return {...doc.data(), id:doc.id}
            })
            cambiarTareas(arrTareas);
            cambiarCompletados(arrTareas);
            cambiarCargando(false);
            
        });
    }, []);

    const filtrarCompletados = (e) => {
        if(e.target.name === 'todos') {
            cambiarCompletados(tareas);
            return
        }
        cambiarCompletados(tareas.filter((tarea) => { 
            return tarea.completado && {...tarea}
        }))
    }

    return (
        <div className="l-container l-container--row">
            <ButtonFiltrar name="todos" onClick={filtrarCompletados}>Todos</ButtonFiltrar>
            <ButtonFiltrar name="completados" onClick={filtrarCompletados}>Completados</ButtonFiltrar>
            <Contenedor id="lista-tareas">
                {cargando && <p>Cargando</p>}
                {!cargando && completados.map(tarea => (
                    <Tarea key={tarea.id} tarea={tarea}/>
                ))}

                {!cargando && completados.length === 0 &&
                    <Mensaje>No hay tareas por mostrar</Mensaje>
                }
            </Contenedor> 
        </div>
        

     );
}


export default ListaTareas;