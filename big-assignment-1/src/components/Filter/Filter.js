import './index.css'
function Filter(){
    return(
        <div className="Filter">
            <h3 className="title">
                Filter by year
            </h3>
            <div className="select-btn">
                <select className="year">
                    <option className="text"  value="2022" >2022</option>
                    <option className="text" value="2021" >2021</option>
                    <option className="text" value="2020" >2020</option>
                    <option className="text" value="2019" >2019</option>
                    <option className="text" value="2018" >2018</option>
                </select>

            </div>

        </div>
    )
}
export default Filter