import { useEffect, useState } from "react";
import { db, collection, onSnapshot } from "../firebase/firebase.config";
import {Contenedor} from "../elements/ElementosItem";
import Tarea from "./Tarea";

const ListaTareas = () => {
    const [tareas, cambiarTareas] = useState([]);
    const [cargando, cambiarCargando] = useState(false);

    useEffect(() => {
        cambiarCargando(true);
        onSnapshot(collection(db, "tareas"), (snapshot) => {
            cambiarTareas(snapshot.docs.map((doc) => { 
                return {...doc.data(), id:doc.id}
            }))
            cambiarCargando(false);

        });
    }, []);

    return (
        <div className="l-container l-container--row">
            <Contenedor id="lista-tareas">
                {cargando && <p>Cargando</p>}
                {!cargando && tareas.map(tarea => (
                    <Tarea key={tarea.id} tarea={tarea}/>
                ))}

                {!cargando && tareas.length === 0 &&
                    <p>No hay tareas por mostrar</p>
                }
            </Contenedor> 
        </div>
        

     );
}


export default ListaTareas;