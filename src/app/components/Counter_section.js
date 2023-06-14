import Counter_section_card from "./Counter_section_card";
import style from "@/app/styles/counter_section.module.css";
import { MdAppShortcut, MdAssignmentAdd, MdSupervisedUserCircle, MdPaid } from "react-icons/md";
const Counter_section = () => {
  return (
    <section className={style.counter_bg}>
      <div className="container text-light">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Counter_section_card icon = {<MdAppShortcut/>} counter = {500} title = "WORKS COMPLETED"/>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Counter_section_card icon = {<MdAssignmentAdd/>} counter = {200} title = "YEARS OF EXPERIENCE"/>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Counter_section_card icon ={<MdSupervisedUserCircle/>} counter = {160} title ="TOTAL CLIENTS"/>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Counter_section_card icon ={<MdPaid/>} counter = {270} title ="AWARD WON" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter_section;
