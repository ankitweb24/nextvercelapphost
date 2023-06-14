import { MdArrowCircleRight } from "react-icons/md";
import style from '@/app/styles/heropage_content.module.css';
const Heropage_content = () => {
  return (
    <div className={style.container}>
        <h2 className={style.heading1}>Websites done right.</h2>
        <h4 className={style.heading2}>I am a web developer from Cape Breton, Nova Scotia and currently living in Halifax. I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here</h4>

        <div className={style.btn_}>
            <button>i need a website <MdArrowCircleRight/> </button>
            <button>i am looking to hire <MdArrowCircleRight/></button>
        </div>
    </div>
  )
}

export default Heropage_content;
