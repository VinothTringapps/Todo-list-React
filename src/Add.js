
 const Add = ({newItem,setnewItem,handlesubmit}) => {
  return (
    <form onSubmit={handlesubmit}>
        <div className="add">
        <input type="text"  id="addItems"  value={newItem} onChange={(e)=>setnewItem(e.target.value) }/>
        <button type="submit">+</button>
        </div>
    </form>
  )
}
export default Add;
