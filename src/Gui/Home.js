import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import Footter from '../Component/Footter'
import AgeCalculator from '../Component/AgeCalculator'
import Panner from '../Component/Panner'
import logo from "../asset/logo.png"
import axios from 'axios'
import { Avatar } from 'antd'
import "aos/dist/aos.css"
import Aos from 'aos';
import tea from "../asset/tea.png"
import khach from "../asset/khach.png"
import { CommentOutlined, UserOutlined } from '@ant-design/icons'
import Layout1 from '../layout/Layout1'
import backgroud from "../asset/backgroud.png"
function Home() {
  const [comment, setComment] = useState('');

  useEffect(() => {
    getComment();
    Aos.init({
      duration: 1000, // Adjust the duration to your preference
    });
  }, [[comment]]);
  const getComment = async () => {
   
    try {

      const reponse = await axios.get(`https://script.google.com/macros/s/AKfycbwVTMsw9F1W8bpvD9cTZ0Eodp-TbJwMUyPGTcFyYDUfKAdXoBK76lFiRyCkKtMAHJM/exec`)

      const data = reponse.data;
      setComment(reponse.data.data)
      // console.log("ok",reponse.data.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  }

  // const resetFields = (fields) => {
  //   fields.forEach(field => {
  //     form1.setFieldsValue({ [field]: undefined });
  //   });
  // };
  const renderComments = () => {
    // Convert the comment object to an array of comments
    const commentsArray = Object.values(comment);

    // Get the last 10 comments
    const lastTenComments = commentsArray.slice(-15);


    // Reverse the order of comments to display the most recent first
    const reversedComments = lastTenComments.reverse();

    return reversedComments.map((cmt, index) => {
      // Format the time
      const formattedTime = new Date(cmt.time).toLocaleString();

      // console.log("ok", typeof cmt);
      return (

        <div className='flex-col flex w-full border-2 md:my-3 p-2 rounded-2xl snap-y scroll-smooth focus:scroll-auto' key={index}>
          <div className="flex flex-row md:gap-5 border-b-2 snap-normal ">
            <div className='md:mr-auto'>
              <a >
                <Avatar style={{ backgroundColor: '#121212' }} icon={<UserOutlined />} />
                <span className='ml-2 text-sky-400'>{cmt.name}</span>

              </a>

            </div>
            <div className='ml-auto'>

              <span>{formattedTime}</span>
            </div>
          </div>
          <p className='text-start font-thin text-[10px]'>This  [{cmt.email}]  left a comment 👇👇  </p>
          <b className='text-start mt-5'>Comment
            <CommentOutlined style={{ fontSize: "20px" }} className='ml-2' />:
            {"\t\t\t"}{cmt.comment}

          </b>
        </div>

      );
    });
  };


  return (
   <Layout1>
    
      <Panner />
     
      <div data-aos="fade-up" className='mx-2 flex mt-10 flex-col md:flex-row md:h-screen md:w-4/5 w-full md:space-x-5 justify-center items-center'>

       


        <div
       style={{ boxShadow: '0px 20px 30px -10px rgba(38, 57, 77, 1)' }}
        data-aos="flip-left"
     className=' mx-2 border-2 p-5 border-black bg-white rounded-3xl flex-col h-auto flex w-11/12 overflow-hidden md:w-1/2 
     justify-center items-center '>
          <h1 className='bg-[#cfe887] p-6 rounded-lg mt-5 font-mono uppercase font-semibold text-[#00785d] mb-5 text-center'>
            KATINA  Nâng Tầm Trải Nghiệm Trà Sữa Nhà Làm 🍵
            <hr />
          </h1>
          <h3 className='text-black text-start font-medium  h-auto'>
            🤗 KATINA là một thương hiệu trà sữa nhà làm, thể hiện qua sự chăm chút trong từng ly trà sữa. KATINA luôn chọn lựa nguyên liệu tốt nhất và tỉ mỉ trong quy trình pha chế, đảm bảo mỗi sản phẩm đều đạt chất lượng cao nhất.<br /><br />
            {/* <hr/> */}
            🤗 KATINA coi trọng sự hài lòng của khách hàng, lắng nghe phản hồi và không ngừng cải tiến để đáp ứng nhu cầu đa dạng. Khách hàng không chỉ là người mua, mà còn là những người bạn, được chào đón bằng nụ cười thân thiện và dịch vụ chu đáo trong không gian ấm cúng.<br /><br />
            {/* <hr/> */}
            🤗 KATINA thường xuyên tổ chức các chương trình khuyến mãi và sự kiện tri ân khách hàng, nhận thức rõ sự ủng hộ của khách hàng là chìa khóa cho sự phát triển. KATINA cũng giữ gìn và phát triển các công thức trà sữa truyền thống, kết hợp yếu tố hiện đại để tạo ra những sản phẩm mới lạ và hấp dẫn.<br /><br />
            {/* <hr/> */}
            🤗 KATINA ngày càng xây dựng niềm tin và sự yêu mến từ khách hàng, mang đến những trải nghiệm trà sữa đầy ý nghĩa và hương vị thơm ngon.<br /><br />
          </h3>
        </div>


        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1000"
     data-aos-duration="1000" className='flex h-auto mt-5 flex-col md:w-1/2 w-11/12'>
          <img src={tea}   className=' md:h-[500px] rounded-full w-full' />
        </div>
      </div>

      <div 
      style={{backgroundImage:`url${backgroud}`,backgroundSize:"100% 100%"}}
      data-aos="flip-down"  className='md:h-screen  snap-start  w-full flex justify-center items-center md:my-0 my-20 md:mt-0'>
        <div class={`  `}>
          <div
            class={`relative border-2 border-sky-400 shadow-2xl  w-[300px]   sm:w-[650px] group transition-all duration-700
             aspect-video flex items-center justify-center`}
          >
            <div
              class={`transition-all flex flex-col items-center py-5 justify-start boder-2 duration-300 group-hover:duration-1000 bg-sky-400 w-full h-full absolute group-hover:-translate-y-16`}

            >
              <p class="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
                Cảm Ơn
              </p>
              <p class="px-10 text-[10px] sm:text-[12px] text-gray-700">
                Bạn đã ghé đến KATINA
              </p>
              <p class="font-serif text-[10px] sm:text-[12px text-gray-700">
                Chúc bạn có một ngày thật ý nghĩa
              </p>
              {/* <p class="font-sans text-[10px] text-gray-700 pt-5">HoangVu_Dev</p> */}
              <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
                <div class="group-hover:duration-400 relative rounded-2xl  w-[auto] h-10 bg-sky-400 text-gray-50 flex flex-col justify-center
                   items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700
                    before:right-3 before:top-0 before:w-[auto] before:h-10 before:-z-10">
                  {/* <span class=" font-bold text-black">Hoang</span> */}
                  <p class="text-amber-300 text-2xl font-thin">KATINA</p>
                </div>
              </div>
            </div>
            <button
              class="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full 
              z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900"
            >
              MỞ
            </button>
            <div
              class="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
            ></div>
            <div
              class="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
            ></div>
            <div
              class="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
            ></div>
            <div
              class="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
            ></div>
          </div>
        </div>



      </div>

      <div data-aos="fade-up" className=' mx-2 md:h-screen flex flex-col md:flex-row w-full md:w-4/5 overflow-hidden md:space-x-5 justify-center items-center'>
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  className='flex  px-2 flex-col md:w-1/2 w-full'>
          <img src={khach} className='md:h-[500px] rounded-full w-full' />
        </div>

        <div
         style={{ boxShadow: '0px 20px 30px -10px rgba(38, 57, 77, 1)' }}
        data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1000"
     data-aos-duration="1000"
     className='flex md:flex-row mt-5 mb-5 border-2 border-black flex-col md:w-1/2 w-11/12    rounded-lg '>

          <div className='flex bg-white rounded-lg  px-4 flex-col'>
            <h1 className='font-mono bg-[#cfe887] rounded-lg uppercase font-semibold text-[#00785d] px-4 mb-5 mt-5 text-center'>Bạn hãy để lại góp ý để <br/>xây dựng những sự phát triển của KATINA</h1>
            <div id="commentWrapper" className='overflow-y-hidden hover:overflow-y-auto h-[500px]  w-full  mt-2 p-2 '>


              {comment !== undefined ? renderComments() :
                <div>aaaaaa</div>

              }


            </div>

          </div>

        </div>
        
      </div>
     </Layout1>
  )
}

export default Home