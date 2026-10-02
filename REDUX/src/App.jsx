import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlice";

const App = () => {
  const num = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        {num}, {theme}
      </h1>
      <button onClick={()=> {
        dispatch(increment())
      }}>increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>decrement</button>
    </div>
  );
};

export default App;
