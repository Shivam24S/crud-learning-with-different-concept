// import CrudTodo from "../crudTodoWithProps/CrudTodo";
// import NewTodo from "./component/NewTodo";
// import Todo from "./component/Todo";
// import TodoMultiFieldInput from "./component/another Todo/TodoMultiFieldInput";

import TodoLogic4 from "../CrudTodo4/TodoLogic4";
import AddToDoCtx from "../UseContext CRUD TODO/AddToDoCtx";
import ReadTodoCtx from "../UseContext CRUD TODO/ReadTodoCtx";
import TodoContextProvider from "../UseContext CRUD TODO/store/TodoContext";
import AddTodoCtx2 from "../useContextCrudTodo2 Practice/AddTodoCtx";
import AddTodoCtx from "../useContextCrudTodo2 Practice/AddTodoCtx";
import ReadTodoCtx2 from "../useContextCrudTodo2 Practice/store/ReadTodoCtx";
import TodoContextProvider2, {
  TodoContext,
} from "../useContextCrudTodo2 Practice/store/TodoCtx";
import InputDemo from "../useRef/InputDemo";

// import TodoLogicPractice2 from "../CrudTodo2/TodoLogicPractice2";
// import Logic3 from "../CrudTodo3/Logic3";
// import AddTodo from "../practice_Todo/AddTodo";
// import Todo from "../practice_Todo/AddTodo";
// import TodoLogic from "../practice_Todo/TodoLogic";

const App = () => {
  return (
    <>
      {/* <Todo /> */}
      {/* <NewTodo /> */}
      {/* <Todo /> */}

      {/* multiField input  todo*/}

      {/* <TodoMultiFieldInput /> */}

      {/* crud todo with props and and C and different component */}

      {/* <CrudTodo /> */}

      {/* practice todo  */}

      {/* <TodoLogic /> */}

      {/* crudTodo 2 practice practice */}

      {/* <TodoLogicPractice2 /> */}

      {/* crud todo 3 practice practice */}
      {/* <Logic3 /> */}

      {/* useContext Crud Todo Example */}

      {/* <TodoContextProvider>
        <AddToDoCtx />
        <br />
        <br />
        <ReadTodoCtx />
      </TodoContextProvider> */}

      {/* demo of useRef practice */}
      {/* <InputDemo /> */}

      {/* practice after long time */}
      {/* <TodoLogic4 /> */}

      {/* use context crud todo practice */}

      <TodoContextProvider2>
        <AddTodoCtx2 />
        <ReadTodoCtx2 />
      </TodoContextProvider2>
    </>
  );
};

export default App;
