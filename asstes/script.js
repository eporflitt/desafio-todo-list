// Arreglo inicial
let tareas = [
    { id: Date.now(), descripcion: 'Aprender JavaScript', completada: false },
    { id: Date.now() + 1, descripcion: 'Hacer ejercicio', completada: true },
    { id: Date.now() + 2, descripcion: 'Leer un libro', completada: false }
];

// Elementos del DOM
const nuevaTareaInput = document.getElementById('nuevaTareaInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('listaTareas');
const tablaTareas = document.getElementById('tablaTareas');
const totalTareas = document.getElementById('totalTareas');
const tareasRealizadas = document.getElementById('tareasRealizadas');

// Actualizar contadores
function actualizarContadores() {
    totalTareas.textContent = tareas.length;
    const completadas = tareas.filter(tarea => tarea.completada).length;
    tareasRealizadas.textContent = completadas;
}

// Renderizar lista de tareas
function renderizarTablaTareas() {
    tablaTareas.innerHTML = ''; 

    tareas.forEach((tarea, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${tarea.id}</td>
            <td>${tarea.descripcion}</td>
            <td>${tarea.completada ? 'Hecha' : 'Pendiente'}</td>
            <td>
                <button class="cambiar" onclick="cambiarEstado(${index})">
                    ${tarea.completada ? 'Desmarcar' : 'Completar'}
                </button>
                <button class="eliminar" onclick="eliminarTarea(${index})">Eliminar</button>
            </td>
        `;
        tablaTareas.appendChild(fila);
    });
    actualizarContadores();
}

// Agregar nueva tarea
function agregarTarea() {
    const descripcion = nuevaTareaInput.value.trim();
    if (descripcion) {
        const nuevaTarea = {
            id: Date.now(),  
            descripcion: descripcion,
            completada: false
        };
        tareas.push(nuevaTarea);
        nuevaTareaInput.value = ''; 
        renderizarTablaTareas(); 
    } else {
        alert('Por favor ingresa una descripción de tarea.');
    }
}

// Eliminar tarea
function eliminarTarea(index) {
    tareas.splice(index, 1); 
    renderizarTablaTareas(); 
}


function cambiarEstado(index) {
    tareas[index].completada = !tareas[index].completada; 
    renderizarTablaTareas(); 
}


agregarBtn.addEventListener('click', agregarTarea);


window.onload = renderizarTablaTareas;
