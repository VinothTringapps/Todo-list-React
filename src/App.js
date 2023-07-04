import './App.css';

import {useState} from 'react';
import  Header from './Header';
import Content from './Content';
import  Footer  from './Footer';
import Add from './Add';
import SearchItem from './SearchItem';
function App() {
 
  const [items,setItem]=useState(
    JSON.parse(localStorage.getItem('todo_list'))
  )
  const [del,setDel]=useState('')
  const [newItem,setnewItem] =useState('')
  const [search,setSearch] = useState('')
  const addItem=(work)=>{
    const id=items.length ? items[items.length-1].id+1 :1;
    const AddnewItem={id,work,check:false}
    const current=[...items,AddnewItem]
    setItem(current)
    localStorage.setItem('todo_list',JSON.stringify(current))
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log('Submit')
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setnewItem('')
  }
  const changecheck=(id)=>{
    let current=items.map((item)=>(item.id===id?{...item,check:!item.check}:item))
    setItem(current)
    localStorage.setItem('todo_list',JSON.stringify(current))
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
      <Header title="Vinoth"/>
      <Add newItem={newItem} setnewItem={setnewItem} handlesubmit={handlesubmit}/>
      <SearchItem  search={search} setSearch={setSearch}/>
      <Content items={items.filter((item) => (item.work).toLowerCase().includes(search.toLowerCase()))}  changecheck={changecheck} changedelete={changedelete}/>
      <Footer items={items}/>

    </div>
  );
}

export default App;
