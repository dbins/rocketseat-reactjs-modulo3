export const addTodo = text => ({ type: "ADD_TODO", payload: { text } }); //Conteudo a ser enviado para o reducer

export const removeTodo = id => ({ type: "REMOVE_TODO", payload: { id } });
