import {useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare, faTrashCan, faPencil, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {ContenedorButtons, Item, ButtonDelete, ButtonEditar, Square, FormularioEditar, InputEditar, ButtonEditarForm, ButtonCancelar} from "../elements/ElementosItem";
import { db, doc, updateDoc, deleteDoc } from "../firebase/firebase.config";
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

    const acciones = (e, tarea) => {
        if(e.target.id === 'editar') {
            cambiarEditando(!editando);
            cambiarNewTarea(tarea.nombre);
        } else if (e.target.id === 'eliminar'){
            deleteDoc(doc(db, "tareas", tarea.id));
        } else if (e.target.id === 'cancelar'){
            cambiarEditando(!editando);
        }
        
    }

    // /*RemoveEditando es una funcion que sirve para que cuando el usuario de click en cualquier lugar fuera del formulario donde se
    // edita la  tarea, este formulario se cierre*/

    // const removeEditando = (e) => {
    //     if(e.target.tagName !== 'path' 
    //     && e.target !== document.getElementById("formulario-editar-tarea") 
    //     && e.target !== document.getElementById("input-nueva-tarea")
    //     && e.target !== document.getElementById("button-nueva-tarea")) {
    //         cambiarEditando(!editando);
    //         window.removeEventListener('click', removeEditando);
    //     };

    //     console.log("dasds")
    // }
    
    // if(editando){
    //     window.addEventListener('click', removeEditando);
    // }
    
    return ( 
        
            <Item key={tarea.id}>
                <Square title="Completar">
                    <FontAwesomeIcon 
                        icon={tarea.completado ? faCheckSquare : faSquare} 
                        onClick={() => completar(tarea)}
                    />
                </Square>
                {editando ? 
                    <FormularioEditar id="formulario-editar-tarea" action="" onSubmit={(e) => guardarTareaNueva(e, tarea)}>
                        <InputEditar type="text" name="" id="input-nueva-tarea" value={newTarea} onChange={(e) => cambiarNewTarea(e.target.value)}/>
                        <ButtonEditarForm id="button-nueva-tarea">Actualizar</ButtonEditarForm>
                    </FormularioEditar>
                :
                tarea.nombre}
                <ContenedorButtons onClick={(e) => acciones(e, tarea)}>
                    {!editando ?
                        <ButtonEditar title="Editar" ><FontAwesomeIcon id="editar" icon={faPencil} /></ButtonEditar>
                    :
                        <ButtonCancelar title="Cancelar" ><FontAwesomeIcon id="cancelar" icon={faCircleXmark} /></ButtonCancelar>
                    }
                    <ButtonDelete title="Eliminar" ><FontAwesomeIcon id="eliminar" icon={faTrashCan} /></ButtonDelete>
                </ContenedorButtons>
            </Item>
     );
}
 
export default Tarea;