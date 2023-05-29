function Column(props){
    return (
        <div className="col">
            <h3>{props.status}</h3>
            {props.projects
                .filter((project)=>project.status===props.status)
                .sort((a,b)=>b.prioritet-a.prioritet)
                .map((project)=> (
                <div className="card mb-3" key={project.id}>
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p>{project.status}</p>
                        <p>{project.prioritet}</p>


                        <select className="form-select" aria-label="Default select example" defaultValue={props.status}
                        onChange={(e)=>props.onStatusChange(project.id, e.target.value)}>

                            {props.statuses.map((status)=>(
                                <option key={status} value={status}>{status}</option>
                                ) )}
                        </select>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Column;