import { FacebookFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import { Button, FloatButton, Image, Popover, QRCode } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import diachi from '../asset/diachi.png'
import logo from '../asset/logo.png'
import bando from '../asset/bando.png'
function Footter() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.email.value.trim();
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs.sendForm('service_aw59fbd', 'template_fyuxrdd', form.current, {
        publicKey: 'h5_X9EnatlgBbFUa7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert(`${email} +1 Subscribe. Successful!!!`)
          form.current.email.value = '';
         
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const validateEmail = (email) => {
    // Basic regex for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
    const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const daysOfWeek = [('Chủ Nhật'), ('Thứ Hai'), ('Thứ Ba'), ('Thứ Tư'), ('Thứ Năm'), ('Thứ Sáu'), ('Thứ Bảy')];
      const dayOfWeek = daysOfWeek[now.getDay()];
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month index
      const year = now.getFullYear().toString();
      const timeString = `Thời Gian ${hours}:${minutes}:${seconds}\n||\n\n\n\n\n\t\t${dayOfWeek},${day}/${month}/${year}`;
      setTime(timeString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bot-0 md:px-8 bg-[#241f32] border-t-2 flex-col h-auto flex w-full justify-center items-center flex-wrap bg-secondary-bg-color p-0">
    
    <FloatButton.BackTop style={{ height: '60px', width: '60px' }} tooltip={<b>Back Top</b>} />
    <div className='flex p-6 md:flex-row flex-col w-full h-[auto] overflow-hidden justify-between'>

      <div className='md:border-r-2  flex flex-col md:flex-row md:mt-0 mt-2 md:space-x-9 border-t-2 md:border-t-0 justify-center items-center'>
             
              <div className='  flex mt-2 flex-col justify-center items-center md:mb-12'>
              <div className='flex flex-row mb-2 mt-4 space-x-3'>
      <h3 className='text-transparent bg-clip-text mt-2
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 uppercase  font-black'>Liên hệ 👉   </h3>
         <Popover trigger="hover" placement='bottom'  content={<b>Email</b>}>
            <Button
              id="link"
              target="_blank"
              className='rounded-full hover:bg-sky-300 bg-white hover:animate-bounce border-2 border-black '
              href='mailto:vuhuyhoangboj@gmail.com' title={'Gmail me'} type='link' icon={<MailFilled style={{ color: 'black' }} />} />
          </Popover>
          <Popover trigger="hover" placement='bottom' content={<b>FaceBook</b>}>
            <Button
              id="link"
              target="_blank"
              className='rounded-full hover:bg-sky-300 bg-white hover:animate-bounce border-2 border-black '
              href='https://www.facebook.com/VHH26022001' title={'Facebook me'} type='link' icon={<FacebookFilled style={{ color: 'black' }} />} />
          </Popover>
          <Popover
          placement='bottom'
            overlayInnerStyle={{
              padding: 0,
            }}
            content={
              <div>
                <h1 className='text-center uppercase text-black '>Zalo me!!!</h1>
                <QRCode placement='bottom' value="https://zalo.me/0917789964" title="Zalo Me" bordered={false} /></div>}
          >
            <Button
              id="link"
              target="_blank"
              href='tel:0917789964'
              className='rounded-full hover:bg-sky-300 bg-white hover:animate-bounce border-2 border-black ' onClick={() => {

              }} title={'Call me'} type='text' icon={<PhoneFilled style={{ color: 'black' }} />}>
              091778994
            </Button>
          </Popover>
          </div>
        <form
        ref={form} onSubmit={sendEmail}
          class="text-neutral-800 md:py-6 overflow-hidden relative justify-center items-center  flex flex-col md:w-auto w-auto h-44 
          border border-neutral-500 rounded-lg bg-neutral-50 p-3 md:px-6"
        >
          <div
            class="before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-300 before:-z-10 before:rounded-full
             before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-purple-300
              after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6"
          >
            <span class="font-extrabold text-2xl text-violet-600"
            >Hãy để email của bạn lại...</span
            >
            <p class="text-neutral-700">
              Chúng tôi sẽ liên hệ với bạn sớm nhất !🤗🤗🤗
            </p>
          </div>
          <div class="flex gap-1">
            <div
              class="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg"
            >
              <input
                type="text"
                required  
                // ref={emailInputRef} 
                name="email"
                class="relative bg-transparent ring-0 outline-none border text-red-500 border-neutral-500 font-semibold placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
                placeholder="Email..."
              />
            </div>
            <button className="bg-violet-500 text-neutral-50 md:p-2 p-0 rounded-lg hover:bg-violet-400" type="submit">
              Gửi
            </button>
          </div>
        </form>
        
        <h1 className='text-transparent bg-clip-text font-bold
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 mt-2'> Hãy đóng góp để cùng nhau phát triển</h1>
        </div>
        <div className='flex mt-2 flex-col justify-center items-center'>
                <img src={logo} className='w-auto h-44 rounded-full' />
                <h3 className='text-transparent bg-clip-text font-bold
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400  text-center'>KATINA <br/>Nâng Tầm Trà Sữa Nhà Làm</h3>
              </div>
      </div>
      
      <div className='mt-11 md:ml-6 flex flex-row h-auto md:w-1/2 w-full justify-start items-start space-x-5 '>
      {/* <h1>Liên hệ với quán qua:</h1> */}

      <div className='flex flex-col'>
        <h1 className='text-transparent bg-clip-text 
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 uppercase text-2xl font-black mb-2'>Địa chỉ</h1>
      <h1 className=' text-white'>Địa chỉ quán:👉 
        <a target='_blank' className='hover:animate-ping' href='https://www.google.com/maps/place/Coffee+-+Milk+tea+-+%C4%82n+v%E1%BA%B7t+Katina/@10.1835764,104.9308006,17z/data=!3m1!4b1!4m6!3m5!1s0x31a7572c3c6c6d67:0x28d777cdfa0fdcbf!8m2!3d10.1835764!4d104.9333755!16s%2Fg%2F11mxc_qpsl?entry=ttu'>03 QL80, TT. Hòn Đất, Hòn Đất, Kiên Giang, Vietnam</a>
        </h1>
      <a href='https://www.google.com/maps/place/Coffee+-+Milk+tea+-+%C4%82n+v%E1%BA%B7t+Katina/@10.1835764,104.9308006,17z/data=!3m1!4b1!4m6!3m5!1s0x31a7572c3c6c6d67:0x28d777cdfa0fdcbf!8m2!3d10.1835764!4d104.9333755!16s%2Fg%2F11mxc_qpsl?entry=ttu'><img src={bando} className='w-auto h-52 rounded-3xl'/></a> 
      
      <br/>
      
      
    
      </div>
      <Image src={diachi} className='rounded-3xl' style={{width:window.innerWidth >= 768?"300px": '300px', height:window.innerWidth >= 768? '300px':"320px"}}/>

      
     
      
    

      </div>
    </div>
    <p className="text-center text-white text-base font-mono">Copyright &copy; 2024 by Vu Hoang  <span>Dev</span> | "All Rights Reserved"</p>
    {/* <div className='flex mt-10 flexd items-center justify-center'>
                  <div className='flex h-auto'>
                      <span class="my-2  loader"></span>
                  </div>
              </div> */}
  </div>
  )
}

export default Footter