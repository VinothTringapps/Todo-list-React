
 const Content = ({items,changecheck,changedelete}) => {
  return (
        <div className='display'>
    {items.map(
      (item)=> (
        <div key={item.id} className='row'>
          <input type="checkbox" checked={item.check}
          onChange={()=>changecheck(item.id)}/>
          <p style={{textDecoration:(item.check)?"line-through":null,color:(item.check)?"red":"white"}}  onClick={()=>changecheck(item.id)}>{item.work}</p>
          <button onClick={()=>changedelete(item.id)}>✕</button>
        </div>
        
      )
      
    )}
          <div className='content'>{items.length===0 ? "List item can't Found" :""}</div>
    </div>
  )
}
export default Content;
