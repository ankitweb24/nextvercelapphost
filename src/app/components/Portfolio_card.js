const Portfolio_card = (props) => {
  return (
    <div className="card bg-dark bg-gradient text-light border-0" style={{opacity : .9}}>
        <div className="card-header">
            <img src={props.imgpath} alt="portfolio" className="img-fluid rounded" />
        </div>
        <div className="card-body">
           <h4>{props.title}</h4>
        </div>
        <div className="card-footer">
        <button type="button" class="btn btn-dark">{props.button}</button>
        </div>
    </div>
  );
};

export default Portfolio_card;
