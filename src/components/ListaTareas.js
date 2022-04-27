import { useEffect, useState } from "react";
import { db, collection, onSnapshot, doc, updateDoc, deleteDoc } from "../firebase/firebase.config";
import {Contenedor, Item, ButtonDelete, Square} from "../elements/ElementosItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare, faCircleMinus} from '@fortawesome/free-solid-svg-icons'

const ListaTareas = () => {
    const [tareas, cambiarTareas] = useState([]);
    const [cargando, cambiarCargando] = useState(false);
    const [editando, cambiarEditando] = useState(false);
    const [newTarea, cambiarNewTarea] = useState('');

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
    const guardarTareaNueva = (e, tarea) => {
        e.preventDefault();
        const usuarios = doc(db, 'tareas', tarea.id);
            //Updatedoc o setdoc funcionan
            updateDoc(usuarios, 
                { 
                    
                    nombre: newTarea
                }
            )

        cambiarEditando(!editando);

    }

    const editar = (tarea) => {
        cambiarEditando(!editando);
        cambiarNewTarea(tarea.nombre);
    }

    const eliminar = (id) => {
        deleteDoc(doc(db, "tareas", id));
    }

    return (
        <div className="l-container l-container--row">
            <Contenedor>
                {cargando && <p>Cargando</p>}
                {!cargando && tareas.map(tarea => {
                    return editando ? 
                        <form action="" onSubmit={(e) => guardarTareaNueva(e, tarea)}>
                            <input type="text" name="" id="" value={newTarea} onChange={(e) => cambiarNewTarea(e.target.value)}/>
                            <button>Actualizar</button>
                        </form>
                    :
                        <Item key={tarea.id}>
                            <Square title="Completar">
                                <FontAwesomeIcon 
                                    icon={tarea.completado ? faCheckSquare : faSquare} 
                                    onClick={() => completar(tarea)}
                                />
                            </Square>
                            {tarea.nombre}
                            <ButtonDelete title="Editar" onClick={() => editar(tarea)}><FontAwesomeIcon icon={faCircleMinus} /></ButtonDelete>
                            <ButtonDelete title="Eliminar" onClick={() => eliminar(tarea.id)}><FontAwesomeIcon icon={faCircleMinus} /></ButtonDelete>
                        </Item>
                })}

                {!cargando && tareas.length === 0 &&
                    <p>No hay tareas por mostrar</p>
                }
            </Contenedor> 
        </div>
        

     );
}


export default ListaTareas;