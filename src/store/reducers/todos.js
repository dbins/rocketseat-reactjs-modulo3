//Criar o state inicial
const INITIAL_STATE = [
  { id: 1, text: "Fazer café" },
  { id: 2, text: "Estudar React" },
  { id: 3, text: "Participar da comunidade" }
];

//Todo reducer é uma function
//Todos os reducers escutam todas as actions
export default function todos(state = INITIAL_STATE, action) {
  //state antes da alteracao
  //action - comando e valor disparados pela aplicacao
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }]; //O estado é imutavel, tem que criar de novo
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
