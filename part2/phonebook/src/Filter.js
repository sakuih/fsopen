
const Filter = ({filter, handleFilter}) => {

    return (
        <div>
            filter contacts:
                <input
                value={filter}
                onChange={handleFilter}
                />
        </div>
    )
}
export default Filter
