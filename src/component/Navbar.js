import React ,{useEffect, useState} from 'react';
import './navbar.css';
const Navbar = (props) =>{
    const [ischeck,setischeck] = useState(false);
    const [isshow,setisshow] = useState('none');
// Jan 5, 2022 15:37:25
     useEffect(()=>{
         var countDownDate = new Date().getTime()+10*60000;
         var x = setInterval(function() {
         var now = new Date().getTime();
         var distance = countDownDate - now;
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //  minutes = 10;
        //  seconds = 10;
         document.getElementsByClassName("demo")[0].innerHTML =  minutes + "m " + seconds + "s ";
                  document.getElementsByClassName("demo")[1].innerHTML =  minutes + "m " + seconds + "s ";
         if (distance < 0) {
         clearInterval(x);
         document.getElementsByClassName("demo")[0].innerHTML = "EXPIRED";
         }
         }, 1000);
         },[])


    const setcheck = () =>{
        setischeck(true);
    }
    const setcheck_2 =() =>{
        setischeck(false);
    }
    const show_modal = () =>{
        document.getElementsByClassName("modal")[0].style.display="block";
        document.getElementsByClassName("back-draw")[0].style.display="block";
        setisshow('block');
    }
    const back_draw = () =>{
        document.getElementsByClassName('modal')[0].style.display='none';
        document.getElementsByClassName('back-draw')[0].style.display='none';
    }
    const show_navbar = () =>{
        document.getElementsByClassName('slider')[0].style.display='block';
        document.getElementsByClassName('back-draw-1')[0].style.display='block';
    }
    const back_draw_1 = () =>{
        document.getElementsByClassName('slider')[0].style.display='none';
        document.getElementsByClassName('back-draw-1')[0].style.display='none';
    }
    const end_class=()=>{
        document.getElementsByClassName('demo')[0].style.display='none';
        document.getElementsByClassName('demo')[1].style.display='none';
        document.getElementsByClassName('modal')[0].style.display='none';
        document.getElementsByClassName('back-draw')[0].style.display='none';

    }

   return(
       <div>
           {/* Modal */}

           <div className='back-draw' onClick={back_draw}></div>
           <div className='modal'>
               <div>
               <h2>Select a reason to end class</h2>
               <div className='radio'>
                    <div>
                   <input type='radio' onClick={setcheck_2} name='radio' id='v1'/>
                  <span className='p_r'> <span className='radio_control'></span></span>
                     <label htmlFor='v1'>Class Completed</label></div>
                       <div>
                    <input onClick={setcheck} type='radio' name='radio' id='v2'/>
                                 <span className='p_r'><span className='radio_control'></span></span>
                     <label htmlFor='v2'>Class Interrupted/aborted</label></div>
                     {
                        ischeck &&  <div class='h_radio'>
                    <div>
                      <input type='radio' id='v3' name='radio1'/>
                                  <span className='p_r p_r1'><span className='radio_control radio_control_1'></span></span>
                     <label htmlFor='v3'>Student show up for the class</label></div>
                       <div>
                      <input name='radio1' type='radio' id='v4'/>
                                   <span className='p_r p_r1'><span className='radio_control_1 radio_control'></span></span>
                     <label htmlFor='v4'>Student didn't show any interest</label></div>
                       <div>
                      <input name='radio1' type='radio' id='v5'/>
                                   <span className='p_r p_r1'><span className='radio_control_1 radio_control'></span></span>
                     <label htmlFor='v5'>Student got disconnected</label></div>
                       <div>
                      <input name='radio1' type='radio' id='v6'/>
                                   <span className='p_r p_r1'><span className='radio_control_1 radio_control'></span></span>
                     <label htmlFor='v6'>I got disconnected</label></div>
                       <div>
                      <input name='radio1' type='radio' id='v7'/>
                                   <span className='p_r p_r1'><span className='radio_control_1 radio_control'></span></span>
                     <label htmlFor='v7'>Other reason</label></div>
                     </div>
                     }
                      
                </div>
               
               <div className='buttons'>
                   <a className='a1' href='#' onClick={end_class}>End class</a>
                   <a className='a2' onClick={back_draw} href='#'>Cancel</a>
                   </div>     
                   </div>   
           </div>
           {/* Greater navbar */}
      <div className='navbar'>
           <div className='brand'>
               <img src='https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_960_720.png' />
           </div>
           <ul>
               <li className='demo'></li>
              <li> <button id='end-class' onClick={show_modal}>End class</button></li>
           </ul>
      </div>
      {/* mobile navbar */}
      <div className='back-draw-1' onClick={back_draw_1}></div>
       <div className='slider'>
            <div className='demo'></div>
            <button id='e1' onClick={show_modal}>End class</button>          
       </div>
      <div className='navbar1  navbar'>
           <div className='brand'>
               <img src='https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_960_720.png' />
           </div>
           <div className='hamburger' onClick={show_navbar}>
               <span className='h1'></span>
               <span className='h2'></span>
               <span className='h3'></span>
           </div>
      </div>
      </div>
   );
}
export default Navbar;