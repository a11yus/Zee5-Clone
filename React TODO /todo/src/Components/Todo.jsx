import React from 'react';

// https://jsonplaceholder.typicode.com/todos

const Todo = () => 
{
    const [data, setData] = React.useState([]);

    const getTodos = async () => 
    {
        try
        {
            let data = await fetch("https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10");
            data = await data.json();
            console.log(data);
            setData(data);
            // alert("Success !")
        }

        catch(error)
        {
            console.log("error:", error);
        }
    }

    React.useEffect( () => 
    {
        // alert("making request")
        getTodos()

    },[])

    return (
        <div>
            <h1>Todo App</h1>
            <button
            onClick={getTodos}
            >
                FETCH
            </button>
            
            <div>
                {
                    data.map(todo => 
                        <div style=
                        {{ 
                            justifyContent: "center",
                            marginTop: "1rem",
                            display: "flex",
                            gap: "1rem"
                        }} 

                        key={todo.id}
                        >
                            <div>{todo.id}</div>
                            <div>{todo.title}</div>
                            <div>{todo.status ? "DONE" : "NOT DONE"}</div>    
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Todo;