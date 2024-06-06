
interface Props{
    handleFilterTask: (val:string) => void;
    filterTask: string
}


const Filter = ({handleFilterTask, filterTask}: Props) => {
  return (
    <>
    <br />
    <label htmlFor="selectForm" className='filtering-label'>Filter</label>
    <br />
    <select id="selectForm" value={filterTask} className="form-select" onChange={(e) => handleFilterTask(e.target.value) }>
        <option value=""></option>
        <option value="completed">Completed</option>
        <option value="not completed">Not Completed</option>
    </select>
    </>
  )
}

export default Filter