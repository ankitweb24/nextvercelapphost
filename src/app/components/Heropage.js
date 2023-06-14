import styles from "@/app/styles/heropage.module.css";
import Header from "./Header";
import Heropage_content from "./Heropage_content";
import Aboutme from "./Aboutme";
import Service from "./Service";
import Counter_section from "./Counter_section";
import Portfolio from "./Portfolio";
import Swiperslider from "./Swiperslider";
import Contact_section from "./Contact_section";
import Footer from "./Footer";
const Heropage = () => {
  return (
    <>
      <section className={styles.section_}>
        <Header />
        <Heropage_content />
      </section>
      <Aboutme />
      <Service />
      <Counter_section />
      <Portfolio />
      <Swiperslider/>
      <Contact_section/>
      <Footer/>
    </>
  );
};

export default Heropage;
