import {useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare, faCircleMinus} from '@fortawesome/free-solid-svg-icons'
import {Item, ButtonDelete, Square} from "../elements/ElementosItem";
import { db, doc, updateDoc, deleteDoc } from "../firebase/firebase.config";
import { ContenedorButtons } from "../elements/ElementosItem";
const Tarea = ({tarea}) => {
    const [editando, cambiarEditando] = useState(false);
    const [newTarea, cambiarNewTarea] = useState('');

    const completar = (tarea) => {
        const usuarios = doc(db, 'tareas', tarea.id);
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

    /*RemoveEditando es una funcion que sirve para que cuando el usuario de click en cualquier lugar fuera del formulario donde se
    edita la  tarea, este formulario se cierre*/

    const removeEditando = (e) => {
        if(e.target.tagName !== 'path' 
        && e.target !== document.getElementById("formulario-editar-tarea") 
        && e.target !== document.getElementById("input-nueva-tarea")
        && e.target !== document.getElementById("button-nueva-tarea")) {
            cambiarEditando(!editando);
            window.removeEventListener('click', removeEditando);
        };
    }
    
    if(editando){
        window.addEventListener('click', removeEditando);
    }
    
    return ( 
        
            <Item key={tarea.id}>
                <Square title="Completar">
                    <FontAwesomeIcon 
                        icon={tarea.completado ? faCheckSquare : faSquare} 
                        onClick={() => completar(tarea)}
                    />
                </Square>
                {editando ? 
                    <form id="formulario-editar-tarea" action="" onSubmit={(e) => guardarTareaNueva(e, tarea)}>
                        <input type="text" name="" id="input-nueva-tarea" value={newTarea} onChange={(e) => cambiarNewTarea(e.target.value)}/>
                        <button id="button-nueva-tarea">Actualizar</button>
                    </form>
                :
                tarea.nombre}
                <ContenedorButtons>
                    <ButtonDelete title="Editar" id="editar" onClick={() => editar(tarea)}><FontAwesomeIcon icon={faCircleMinus} /></ButtonDelete>
                    <ButtonDelete title="Eliminar" onClick={() => eliminar(tarea.id)}><FontAwesomeIcon icon={faCircleMinus} /></ButtonDelete>
                </ContenedorButtons>
            </Item>
     );
}
 
export default Tarea;