import style from '@/app/styles/service_card.module.css';
const Service_card = (props) => {
    const {icon} = props;
  return (
    <div className="card text-light bg-dark bg-gradient border p-3 mt-4">
      <div className="card-body">
        <i className={style.icons}>{icon}</i>
        <div className="card-title mt-3">{props.title}</div>
        <p className="card-text mt-3">{props.cardText}</p>
        <button type="button" class="btn btn-secondary">Read More</button>
      </div>
    </div>
  );
};

export default Service_card;
Service_card.defaultProps ={
    cardText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident."
 }
