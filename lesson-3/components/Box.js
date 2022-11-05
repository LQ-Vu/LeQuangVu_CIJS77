import "./index.css";
function Box() {
  const list1 = [
    {
      name: "Bí quyết thành công của người Do Thái",
      author: "Đắp Chăn Nằm Nghe Tun Kể",
      date: "16/10/2022",
      time: "16 phút",
      imgUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/9/4/f/4/94f4c6672363ac433e1b3acaf2e55e82.jpg",
    },
    {
      name: "Cùng Đích Lép đi tìm 5 dấu hiệu lý tưởng mà một người bạn đời cần có",
      author: "Đắp Chăn Nằm Nghe Tun Kể",
      date: "16/10/2022",
      time: "16 phút",
      imgUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/9/4/f/4/94f4c6672363ac433e1b3acaf2e55e82.jpg",
    },
    {
      name: "Đi Xuyên Qua Nỗi Buồn- Tri kỷ cảm xúc",
      author: "Tri kỷ cảm xúc",
      date: "31/10/2022",
      time: "21 phút",
      imgUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/5/0/a/3/50a35e0d13e5fecc1b82818dd5add332.jpg",
    },
  ];
  const list2 = [
    {
      name: "88.Có Đi Với Nhau Bao Lâu Đâu",
      author: "HIEU.TV",
      date: "16/10/2022",
      time: "16 phút",
      imgUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/1/4/d/6/14d60761ebd1a3427db24956042d217c.jpg",
    },
    {
      name: "87. Sướng Trước Khổ Sau hay Khổ Trước Sướng Sau",
      author: "HIEU.TV",
      date: "16/10/2022",
      time: "16 phút",
      imgUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/1/4/d/6/14d60761ebd1a3427db24956042d217c.jpg",
    },
    {
      name: "Cuối đoạn đường",
      author: "Nắng Thủy Tinh",
      date: "16/10/2022",
      time: "16 phút",
      imgUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/avatars/1/d/0/d/1d0d3f88a0ab911690cc0a3e9c23fff0.jpg",
    },
  ];
  return (
    <div className="list-card">
      <div className="list-left">
        {list1.map((item) => {
          return (
            <div className="card">
              <div className="content-mini">
                <img className="imgSong" alt="#" src={item.imgUrl}></img>
                <div className="content-info">
                  <p className="song">{item.name}</p>
                  <span className="author">{item.author}</span>
                  <br />
                  <span className="date">{item.date}</span>
                  <br />
                  <span className="time">{item.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="list-right">
        {list2.map((item2) => {
          return (
            <div className="card">
              <div className="content-mini">
                <img className="imgSong" alt="#" src={item2.imgUrl}></img>
                <div className="content-info">
                  <p className="song">{item2.name}</p>
                  <span className="author">{item2.author}</span>
                  <br />
                  <span className="date">{item2.date}</span>
                  <br />
                  <span className="time">{item2.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Box;
