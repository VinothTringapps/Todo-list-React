import './App.css';

import {useState} from 'react';
import  Header from './Header';
import Content from './Content';
import  Footer  from './Footer';
import Add from './Add';
import SearchItem from './SearchItem';
function App() {
 
<<<<<<< HEAD
  const [items,setItem]=useState( JSON.parse(localStorage.getItem('todo_list')) !== null ?
=======
  const [items,setItem]=useState(
   JSON.parse(localStorage.getItem('todo_list')) !== null ?
>>>>>>> origin/master
    JSON.parse(localStorage.getItem('todo_list')) : []
  )
  const [del,setDel]=useState('')
  const [newItem,setnewItem] =useState('')
  const [search,setSearch] = useState('')
  const addItem=(work)=>{
    const id=items.length ? items[items.length-1].id+1 :1;
    const AddnewItem={id,work,check:false}
    const show =items.filter((item)=>(item.work.toLowerCase()!==AddnewItem.work.toLowerCase()))
    let current = [...items]
    if(show.length === items.length){
      current=[...items,AddnewItem]
    }
    if(show.length !==items.length){
      raiseNewitem()
    }
    
    setItem(current)
    localStorage.setItem('todo_list',JSON.stringify(current))
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setnewItem('')
  }
  const changecheck=(id)=>{
    let current=items.map((item)=>(item.id===id?{...item,check:!item.check}:item))
    setItem(current)
    localStorage.setItem('todo_list',JSON.stringify(current))
  }
  const [insert,setInsert]=useState('')
  const raiseNewitem=()=>{
    setInsert('Task is Already in a list')
    document.getElementById('ras').style.visibility='visible' 
    setTimeout(()=>{
    setInsert('');
    document.getElementById('ras').style.visibility="hidden"
    },2000)
   }
  const raise=()=>{
    setDel('Finish The Task')
    document.getElementById('rf').style.visibility="visible" 
    setTimeout(()=>{setDel('');document.getElementById('rf').style.visibility="hidden"},2000)    
  }
  const changedelete=(id)=>{

    let current=items.filter((item)=>((item.id===id)?(item.check===true? "":item):item))
    items.filter((item)=>(item.id===id)?(item.check===true? "":raise()):"")
    setItem(current)
    localStorage.setItem('todo_list',JSON.stringify(current))
  }
  return (
    <div className="Main">
      <div className="raise" style={{visibility:"hidden"}}  id="rf">{del}</div>
      <div className="raiseNewItems" style={{visibility:"hidden"}}  id="ras">{insert}</div>

      <Header title="Vinoth"/>
      <Add newItem={newItem} setnewItem={setnewItem} handlesubmit={handlesubmit}/>
      <SearchItem  search={search} setSearch={setSearch}/>
      <Content items={items.filter((item) => (item.work).toLowerCase().includes(search.toLowerCase()))}  changecheck={changecheck} changedelete={changedelete}/>
      <Footer items={items}/>

    </div>
  );
}

export default App;
