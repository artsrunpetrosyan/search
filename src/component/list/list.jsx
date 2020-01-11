import React, { useContext } from 'react'
import Context from '../context/contex';

function List() {
    const listContext = useContext(Context);
    const data = listContext.data;
    console.log(data)

    return (
        <div>
            {data.map((item) => {
                return <div className="container">
                    <h2>List Groups</h2>

                    <ul className="list-group">
                        <li className="list-group-item">{item.title}</li>
                        <li className="list-group-item">{item.author}</li>
                        <li className="list-group-item">{item.description}</li>
                    </ul>
                </div>
            })}

        </div>
    )



}

export default List;
