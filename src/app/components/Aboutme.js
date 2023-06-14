import Aboutme_left from "./Aboutme_left";
import Aboutme_right from "./Aboutme_right";
const Aboutme = () => {
  return (
    <section className="container  text-light  mt-5 p-5">
      <div className="row">
        <Aboutme_left/>
        <Aboutme_right/>
      </div>
    </section>
  );
};

export default Aboutme;
