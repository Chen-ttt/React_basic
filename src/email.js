/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-15 16:02:45
 * @LastEditTime: 2022-07-19 03:08:55
 * @LastEditors:  
 */
import React from 'react'
import emailjs from 'emailjs-com'

export default function ContactUs () {

  function sendEmail (e) {
    e.preventDefault()    //This is important, i'm not sure why, but the email won't send without it
    // e.target.contact_number.value = '123'
    // console.log(e.target.contact_number.value)

    const data = {
      centre_name: 'aaa',
      to_name: 'manufacture',
      to_email: 'tchen64@sheffield.ac.uk'
    }
    emailjs.send('gmail', 'template_v8xa3qe', data, 'Ah0EiXaVqDkRWJm24')
      .then((result) => {
        // console.log(result)
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  )
}

// 4. 用observe方法包裹函数组件
// 注意!!! observe是负责连接react和mobx的中间件, 这一步将完成响应式变化
// 若不用observe, 只有mobx对象中的count数据发生变化, 但react组件不会更新
// export default App
