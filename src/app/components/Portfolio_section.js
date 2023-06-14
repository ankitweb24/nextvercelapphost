import Portfolio_card from "./Portfolio_card";
const Portfolio_section = () => {
  return (
    <div className="row">
      <div className="col-sm-12, col-md-4, col-lg-4">
        <Portfolio_card imgpath = "images/portfolio/one.jpg" title ="Loreda Cuno Nere" button = "Click Me"/>
      </div>
      <div className="col-sm-12, col-md-4, col-lg-4">
        <Portfolio_card imgpath = "images/portfolio/two.jpg" title ="Mavrito Lana Dere" button = "Click Me"/>
      </div>
      <div className="col-sm-12, col-md-4, col-lg-4">
        <Portfolio_card imgpath = "images/portfolio/three.jpg" title ="Studio Big Bang" button = "Click Me"/>
      </div>
    </div>
  );
};

export default Portfolio_section;
