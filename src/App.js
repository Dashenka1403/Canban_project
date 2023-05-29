//kanban_desk
//status
import {useState} from "react";
import React from "react";
import Column from "./Column";
import CreateTaskForm from "./CreateTaskForm";
import Registration from "./Registration";


const projectStatuses= ['Нужно сделать', 'В процессе', 'Проверка', 'Завершено'];
const initialProjects = [
  {id:1, title:'РГР', status:'Нужно сделать', prioritet:1},
  {id:2, title:'Курсовая работа', status:'В процессе', prioritet:2},
  {id:3, title:'Изучение XML', status:'Проверка', prioritet:3},
  {id:4, title:'Лабораторные по ОТ', status:'Завершено', prioritet:4},
  {id:5, title:'Анализ Данных', status:'Нужно сделать', prioritet:5},
]

//project
function App() {
  const[projects, setProjects] = useState(initialProjects);

  const onStatusChange=(id, newStatus)=>{
   setProjects(projects.map((project)=>(project.id===id)?{...project,status:newStatus}:
   project));
  }


  const onCreateTask = (project) => {
    setProjects([...projects,{...project,id: Math.random(), status: 'Нужно сделать'}])
  }

  return (
    <div className="container">
      <Registration/>
      <CreateTaskForm onSubmit={onCreateTask}/>



      <div className="row">
      {projectStatuses.map((status)=>(
         <Column key={status}
                 status={status}
                 projects={projects}
                 statuses={projectStatuses}
                 onStatusChange={onStatusChange}
         />
          ))}
      </div>

    </div>
  );
}

export default App;
