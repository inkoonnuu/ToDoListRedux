const Clear = ({handleClear}) => {
  return (
    <div>
        <button onClick={()=>handleClear()} className="font-semibold text-white text-xl mt-3 border w-full p-2 rounded-md transition-all bg-[red] hover:bg-[#ad0303]">Clear</button>
    </div>
  )
}
export default Clear