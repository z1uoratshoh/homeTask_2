import React from 'react'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
import { deltodo , chektodo , sarchtodo , allSelecttodo , trueSelecttodo , falseSelecttodo ,addDialog} from './reducers/todo/todoSlice'
import Addtodo from "./reducers/modals/addTodoslice/addtodoslice"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const App = () => {

  const data = useSelector((store) => store.todoList.data)
  const serch = useSelector((store) => store.todoList.searchtodo)

  const dispatch = useDispatch()
  console.log(serch);
  return (
    <div>
      
      <div className='w-[80%] m-auto mt-[5%]'>
        <div className='f_l'>
      <TextField id="outlined-basic" value={serch} onChange={(event) => dispatch(sarchtodo(event.target.value)) } label="Search"  />
      <Button variant="outlined"  onClick={() => dispatch(addDialog(true))}>Add</Button> 
      </div>
      <div className='w-[30%] f_l mt-[3%]'>
      <Button variant="contained"  onClick={() => dispatch(allSelecttodo())}>All</Button>
      <Button variant="outlined" onClick={() => dispatch(trueSelecttodo())}>True</Button>
      <Button variant="outlined"  onClick={() => dispatch(falseSelecttodo())}>False</Button>
      </div>
      </div>
      <div className='w-[80%] m-auto mt-[3%]  flex flex-wrap gap-10' >
      {data.map((elem) =>{
        return (
          <div key={elem.id} className='border-[3px] card border-[grey] grid p-[1%] rounded-[15px]'>
            <img className='w-[100%]' src={elem.img} alt="" />
            <h1>{elem.id}</h1>
            <h1>{elem.title}</h1>
            <h1>{elem.desc}</h1>
            <h1>{elem.date}</h1>
            <h1>{elem.status}</h1>
            <div className='f_l'>
            <button onClick={() => dispatch(deltodo(elem.id))} className='btn'>Delete</button>
            <input type="checkbox" onChange={() => dispatch(chektodo(elem.id))} checked={elem.status == "true" ? true : false} />
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App
