import './style.css';

function ListCard(props) {
    return (
      <div className="card" >
        <div className="song-thumb"></div>
        <div className="card-info">
          <div className="title-wrapper">{props.title}</div>
          <h3 className="subtitle">{props.subtitle}</h3>
          <div className="time-release">{props.time}</div>
        </div>
      </div>
    )
  }

  export default ListCard;