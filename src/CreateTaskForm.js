import {useState} from "react";
import Modal from "bootstrap/js/src/modal";

function CreateTaskForm(props){
  const [title, setTitle]=useState('');
  const[prioritet, setPrioritet]=useState(1);

  const onSubmit = ()=> {
    setTitle('')
    setPrioritet(1)
    console.log(title,prioritet);
    props.onSubmit({title,prioritet});
  }
  


  return(
    <div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Название</label>
        <input type="text" className="form-control" id="title" value={title}
               onChange={e =>setTitle(e.target.value) }/>
      </div>
      <div className="mb-3">
        <label htmlFor="prioritet" className="form-label">Приоритет</label>
        <input type="number" className="form-control" id="prioritet" value={prioritet}
               onChange={e =>setPrioritet(e.target.value) }/>
      </div>
      <button  className="btn btn-primary"  onClick={onSubmit}>Добавить</button>
    </div>
  )
}

export default CreateTaskForm;