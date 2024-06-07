import { createSlice } from '@reduxjs/toolkit'
import { data } from 'autoprefixer'


export const todoSlice = createSlice({
  name: 'todoList',
  initialState :{
    data : [
      {
        id : "1",
        img : "https://kartinki.pics/uploads/posts/2022-03/thumbs/1646875249_2-kartinkin-net-p-kartinki-dlya-dushi-so-smislom-2.jpg",
        title : "T it LE_ 1",
        desc : "desc_1",
        date : "06/07/2024",
        status : "true"
      },
      {
        id : "2",
        img : "https://kartinki.pics/uploads/posts/2022-03/thumbs/1646875249_2-kartinkin-net-p-kartinki-dlya-dushi-so-smislom-2.jpg",
        title : "title_2",
        desc : "desc_2",
        date : "06/07/2024",
        status : "false"
      },
      {
        id : "3",
        img : "https://kartinki.pics/uploads/posts/2022-03/thumbs/1646875249_2-kartinkin-net-p-kartinki-dlya-dushi-so-smislom-2.jpg",
        title : "title_3",
        desc : "desc_3",
        date : "06/07/2024",
        status : "true"
      },
      {
        id : "4",
        img : "https://kartinki.pics/uploads/posts/2022-03/thumbs/1646875249_2-kartinkin-net-p-kartinki-dlya-dushi-so-smislom-2.jpg",
        title : "title_4",
        desc : "desc_4",
        date : "06/07/2024",
        status : "false"
      },
    ],
    data2 : [
      {
        id : "1",
        img : "https://kartinki.pics/uploads/posts/2022-03/thumbs/1646875249_2-kartinkin-net-p-kartinki-dlya-dushi-so-smislom-2.jpg",
        title : "T it LE_ 1",
        desc : "desc_1",
        date : "06/07/2024",
        status : "true"
      },
      {
        id : "2",
        img : "https://kartinki.pics/uploads/posts/2022-03/thumbs/1646875249_2-kartinkin-net-p-kartinki-dlya-dushi-so-smislom-2.jpg",
        title : "title_2",
        desc : "desc_2",
        date : "06/07/2024",
        status : "false"
      },
      {
        id : "3",
        img : "https://kartinki.pics/uploads/posts/2022-03/thumbs/1646875249_2-kartinkin-net-p-kartinki-dlya-dushi-so-smislom-2.jpg",
        title : "title_3",
        desc : "desc_3",
        date : "06/07/2024",
        status : "true"
      },
      {
        id : "4",
        img : "https://kartinki.pics/uploads/posts/2022-03/thumbs/1646875249_2-kartinkin-net-p-kartinki-dlya-dushi-so-smislom-2.jpg",
        title : "title_4",
        desc : "desc_4",
        date : "06/07/2024",
        status : "false"
      },
    ],
    idx : null,
    addDialog : false,
    addTitle : "",
    addTitle : "",




    searchtodo : "",
    allSelecttodo : "all",
  },
  reducers: {
    deltodo : (state, acton) =>{
      state.data = state.data.filter((elem) => {
        return elem.id != acton.payload
      })
      state.data2 = state.data2.filter((elem) => {
        return elem.id != acton.payload
      })
    },
    chektodo : (state , action) =>{
      state.idx = action.payload 
      state.data.map((el) =>{
        if(el.id == state.idx){
          return el.status = el.status == "true" ? "false" : "true"
        }
        return el
      })
      state.data2.map((el) =>{
        if(el.id == state.idx){
          return el.status = el.status == "true" ? "false" : "true"
        }
        return el
      })
    },
    sarchtodo : (state , action) =>{
      state.searchtodo = action.payload
      state.data = state.data2.filter((elem) =>{
            return elem.title.toLowerCase().trim().includes(state.searchtodo.toLowerCase().trim())
      })
    },
    allSelecttodo : (state) =>{
      state.data = state.data2
    },
    trueSelecttodo : (state) =>{
      state.data = state.data2.filter((elem) =>{
        return elem.status == "true"
      })
    },
    falseSelecttodo : (state) =>{
      state.data = state.data2.filter((elem) =>{
        return elem.status == "false"
      })
    },

    addDialog : (state ,  action) =>{
      state.addDialog = state.addDialog ? false : true
      console.log(state.addDialog);
    }


  },
})

// Action creators are generated for each case reducer function
export const { deltodo , chektodo , sarchtodo , allSelecttodo , trueSelecttodo , falseSelecttodo , addDialog} = todoSlice.actions

export default todoSlice.reducer