const SearchItem = (props) =>
 {
    const {search,setSearch}=props;
  return (
    <div className="search-cont">
    <form className="search" onSubmit={(e)=>e.preventDefault()}>
    <div>⫷</div>
        <input type="text" 
        placeholder="Search Item"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    <div>⫸</div>
    </form>
   
    </div>
    )
}

export default SearchItem