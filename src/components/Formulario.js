import { useState } from "react";
import { db, collection, addDoc } from "../firebase/firebase.config";
import {Formulario, Input, Button} from "../elements/ElementosFormulario";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
const FormularioApp = ({tareas, cambiarTareas}) => {
    const [tarea, cambiarTarea] = useState('');

    const agregarTarea = async () => {
        await addDoc(collection(db, "tareas"), {
            nombre: tarea,
            completado: false
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(tarea !== ''){
            cambiarTarea('')
            agregarTarea()
        } else {
            console.log("El campo no puede estar vacio")
        }
    }

    return ( 
        <Formulario action="" onSubmit={handleSubmit}>
            <div className="l-container l-container--flex">
                <Input 
                    type="text" 
                    name="tarea" 
                    id="tarea" 
                    value={tarea} 
                    onChange={(e) => cambiarTarea(e.target.value)}
                    placeholder="Agrega una tarea"
                />
                <Button>
                    <FontAwesomeIcon icon={faCirclePlus} />
                </Button>
            </div>
        </Formulario>
    );
}
 
export default FormularioApp;