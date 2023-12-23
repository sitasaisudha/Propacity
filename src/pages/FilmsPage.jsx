import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { MyContext } from '../MyContext';
import './FP.css'
const FilmsPage = () => {
    const [data, setData] = useState([]);
    const {isGrid , setGrid} = useContext(MyContext);
    const [images, setImages]= useState([]);
    useEffect(() => {

            axios.get(`https://swapi.dev/api/films`)
            .then((response) => { 
                setData(response.data.results);
                console.log(response);
                
            })
            .catch((err) => { console.log("error sita ..", err) })
        
       
    }, [])
  
   
    return (
        <div>
          {isGrid?(<div className='grid-view'>

           {data.map((item,indx)=>(
            <div className='grid'>
                <div className='empty'> </div>
                  <div className='title'> <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M28.3797 26.55H23.2997C25.9488 24.881 27.9062 22.3115 28.8118 19.3142C29.7173 16.317 29.5101 13.0935 28.2283 10.2368C26.9465 7.38017 24.6763 5.08242 21.8352 3.76626C18.9942 2.45011 15.7735 2.20408 12.7655 3.07344C9.75757 3.94279 7.16468 5.86906 5.46383 8.49789C3.76298 11.1267 3.06858 14.2813 3.50836 17.3813C3.94813 20.4814 5.49251 23.3184 7.8574 25.3704C10.2223 27.4225 13.2486 28.5516 16.3797 28.55H28.3797C28.6449 28.55 28.8993 28.4447 29.0868 28.2571C29.2743 28.0696 29.3797 27.8153 29.3797 27.55C29.3797 27.2848 29.2743 27.0305 29.0868 26.8429C28.8993 26.6554 28.6449 26.55 28.3797 26.55ZM5.3797 15.55C5.3797 13.3744 6.02484 11.2477 7.23353 9.43877C8.44223 7.62982 10.1602 6.21993 12.1702 5.38736C14.1802 4.5548 16.3919 4.33696 18.5257 4.7614C20.6595 5.18584 22.6195 6.23349 24.1579 7.77186C25.6963 9.31024 26.7439 11.2703 27.1683 13.404C27.5928 15.5378 27.3749 17.7496 26.5424 19.7596C25.7098 21.7695 24.2999 23.4875 22.491 24.6962C20.682 25.9049 18.5553 26.55 16.3797 26.55C13.4633 26.5467 10.6674 25.3867 8.60518 23.3246C6.54299 21.2624 5.38301 18.4664 5.3797 15.55ZM16.3797 12.55C16.973 12.55 17.5531 12.3741 18.0464 12.0444C18.5398 11.7148 18.9243 11.2463 19.1513 10.6981C19.3784 10.1499 19.4378 9.54671 19.3221 8.96477C19.2063 8.38282 18.9206 7.84828 18.501 7.42872C18.0815 7.00916 17.5469 6.72344 16.965 6.60768C16.383 6.49193 15.7798 6.55134 15.2316 6.7784C14.6835 7.00546 14.2149 7.38998 13.8853 7.88333C13.5556 8.37667 13.3797 8.95669 13.3797 9.55004C13.3797 10.3457 13.6958 11.1087 14.2584 11.6714C14.821 12.234 15.584 12.55 16.3797 12.55ZM16.3797 8.55004C16.5775 8.55004 16.7708 8.60869 16.9353 8.71857C17.0997 8.82845 17.2279 8.98463 17.3036 9.16735C17.3793 9.35008 17.3991 9.55115 17.3605 9.74513C17.3219 9.93911 17.2267 10.1173 17.0868 10.2571C16.947 10.397 16.7688 10.4922 16.5748 10.5308C16.3808 10.5694 16.1797 10.5496 15.997 10.4739C15.8143 10.3982 15.6581 10.2701 15.5482 10.1056C15.4383 9.94116 15.3797 9.74782 15.3797 9.55004C15.3797 9.28482 15.4851 9.03047 15.6726 8.84293C15.8601 8.6554 16.1145 8.55004 16.3797 8.55004ZM19.3797 21.55C19.3797 20.9567 19.2038 20.3767 18.8741 19.8833C18.5445 19.39 18.0759 19.0055 17.5277 18.7784C16.9796 18.5513 16.3764 18.4919 15.7944 18.6077C15.2125 18.7234 14.6779 19.0092 14.2584 19.4287C13.8388 19.8483 13.5531 20.3828 13.4373 20.9648C13.3216 21.5467 13.381 22.1499 13.6081 22.6981C13.8351 23.2463 14.2196 23.7148 14.713 24.0444C15.2063 24.3741 15.7864 24.55 16.3797 24.55C17.1753 24.55 17.9384 24.234 18.501 23.6714C19.0636 23.1087 19.3797 22.3457 19.3797 21.55ZM15.3797 21.55C15.3797 21.3523 15.4383 21.1589 15.5482 20.9945C15.6581 20.83 15.8143 20.7018 15.997 20.6262C16.1797 20.5505 16.3808 20.5307 16.5748 20.5693C16.7688 20.6078 16.947 20.7031 17.0868 20.8429C17.2267 20.9828 17.3219 21.161 17.3605 21.3549C17.3991 21.5489 17.3793 21.75 17.3036 21.9327C17.2279 22.1154 17.0997 22.2716 16.9353 22.3815C16.7708 22.4914 16.5775 22.55 16.3797 22.55C16.1145 22.55 15.8601 22.4447 15.6726 22.2571C15.4851 22.0696 15.3797 21.8153 15.3797 21.55ZM22.3797 18.55C22.973 18.55 23.5531 18.3741 24.0464 18.0444C24.5398 17.7148 24.9243 17.2463 25.1513 16.6981C25.3784 16.1499 25.4378 15.5467 25.3221 14.9648C25.2063 14.3828 24.9206 13.8483 24.501 13.4287C24.0815 13.0092 23.5469 12.7234 22.965 12.6077C22.383 12.4919 21.7798 12.5513 21.2316 12.7784C20.6835 13.0055 20.2149 13.39 19.8853 13.8833C19.5556 14.3767 19.3797 14.9567 19.3797 15.55C19.3797 16.3457 19.6958 17.1087 20.2584 17.6714C20.821 18.234 21.5841 18.55 22.3797 18.55ZM22.3797 14.55C22.5775 14.55 22.7708 14.6087 22.9353 14.7186C23.0997 14.8284 23.2279 14.9846 23.3036 15.1674C23.3793 15.3501 23.3991 15.5511 23.3605 15.7451C23.3219 15.9391 23.2267 16.1173 23.0868 16.2571C22.947 16.397 22.7688 16.4922 22.5748 16.5308C22.3808 16.5694 22.1797 16.5496 21.997 16.4739C21.8143 16.3982 21.6581 16.2701 21.5482 16.1056C21.4383 15.9412 21.3797 15.7478 21.3797 15.55C21.3797 15.2848 21.4851 15.0305 21.6726 14.8429C21.8601 14.6554 22.1145 14.55 22.3797 14.55ZM10.3797 12.55C9.78636 12.55 9.20634 12.726 8.71299 13.0556C8.21964 13.3853 7.83512 13.8538 7.60806 14.402C7.381 14.9502 7.32159 15.5534 7.43734 16.1353C7.5531 16.7173 7.83882 17.2518 8.25838 17.6714C8.67794 18.0909 9.21248 18.3766 9.79443 18.4924C10.3764 18.6081 10.9796 18.5487 11.5277 18.3217C12.0759 18.0946 12.5445 17.7101 12.8741 17.2167C13.2038 16.7234 13.3797 16.1434 13.3797 15.55C13.3797 14.7544 13.0636 13.9913 12.501 13.4287C11.9384 12.8661 11.1753 12.55 10.3797 12.55ZM10.3797 16.55C10.1819 16.55 9.98858 16.4914 9.82413 16.3815C9.65968 16.2716 9.53151 16.1154 9.45582 15.9327C9.38013 15.75 9.36033 15.5489 9.39891 15.3549C9.4375 15.161 9.53274 14.9828 9.67259 14.8429C9.81244 14.7031 9.99063 14.6078 10.1846 14.5693C10.3786 14.5307 10.5797 14.5505 10.7624 14.6262C10.9451 14.7018 11.1013 14.83 11.2112 14.9945C11.321 15.1589 11.3797 15.3523 11.3797 15.55C11.3797 15.8153 11.2743 16.0696 11.0868 16.2571C10.8993 16.4447 10.6449 16.55 10.3797 16.55Z" fill="white"/>
</svg> <span className='mov'>{item.title}</span> </div> <div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 17C10.8952 17 9.99976 17.8954 9.99976 19C9.99976 20.1046 10.8952 21 11.9998 21C13.1043 21 13.9998 20.1046 13.9998 19C13.9998 17.8954 13.1043 17 11.9998 17Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 10C10.8952 10 9.99976 10.8954 9.99976 12C9.99976 13.1046 10.8952 14 11.9998 14C13.1043 14 13.9998 13.1046 13.9998 12C13.9998 10.8954 13.1043 10 11.9998 10Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 3C10.8952 3 9.99976 3.89543 9.99976 5C9.99976 6.10457 10.8952 7 11.9998 7C13.1043 7 13.9998 6.10457 13.9998 5C13.9998 3.89543 13.1043 3 11.9998 3Z" fill="white"/>
</svg>  </div> </div>
            </div>
          
           ))}
          </div>)
          :(
            <div className='list-view'>



              </div>)

          }
            
           
        </div>
    );
};

export default FilmsPage;