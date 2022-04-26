import { useEffect, useState } from "react";
import { db, collection, onSnapshot, doc, updateDoc, deleteDoc } from "../firebase/firebase.config";
import {Contenedor, Item, ButtonDelete, Square} from "../elements/ElementosItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare, faCircleMinus} from '@fortawesome/free-solid-svg-icons'

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

    const completar = (tarea) => {
        const usuarios = doc(db, 'tareas', tarea.id);
        //Updatedoc o setdoc funcionan
        updateDoc(usuarios, 
            { 
                
                completado: !tarea.completado
            }
        )

    }

    const eliminar = (id) => {
        deleteDoc(doc(db, "tareas", id));
    }

    console.log(cargando)
    console.log(tareas)

    return (
        <div className="l-container l-container--row">
            <Contenedor>
                {cargando && <p>Cargando</p>}
                {!cargando && tareas.map(tarea => (
                    <Item key={tarea.id}>
                        <Square title="Completar">
                            <FontAwesomeIcon 
                                icon={tarea.completado ? faCheckSquare : faSquare} 
                                onClick={() => completar(tarea)}
                            />
                        </Square>
                        {tarea.nombre}
                        <ButtonDelete title="Eliminar" onClick={() => eliminar(tarea.id)}><FontAwesomeIcon icon={faCircleMinus} /></ButtonDelete>
                    </Item>
                ))}

                {!cargando && tareas.length === 0 &&
                    <p>No hay tareas por mostrar</p>
                }
            </Contenedor> 
        </div>
        

     );
}
 
export default ListaTareas;