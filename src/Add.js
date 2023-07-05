
 import {useRef} from 'react';
 const Add = ({newItem,setnewItem,handlesubmit}) => {
  const inputRef=useRef()
  return (
    <form onSubmit={handlesubmit}>
        <div className="add">
        <input type="text" autocomplete="off" ref={inputRef}
          id="addItems"  value={newItem} onChange={(e)=>setnewItem(e.target.value) }/>
        <button type="submit" onClick={()=>inputRef.current.focus()}>+</button>
        </div>
    </form>
  )
}
export default Add;
