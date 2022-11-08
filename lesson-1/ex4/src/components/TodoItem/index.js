import "./style.css";
//console.log("hello");
function Todo(props){
    return (
        <div className="option">
            <input type="radio" class="check"></input>
              <div className="optionname">{props.optionname}</div>
            
        </div>
    );
}
export default Todo;