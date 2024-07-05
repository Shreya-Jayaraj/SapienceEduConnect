// import React, {useEffect, useState} from 'react'
// import './BackgroundSlider.css';
// import imageSlide from '../../data/bg-data.js';

// const BackgroundSlider = () => {
//   // console.log(imageSlide);
//   const[currentState, setCurrentState] = useState(0);

//   useEffect(()=>{
//     const timer = setTimeout(()=>{
//       if(currentState==2){
//         setCurrentState(0)
//       }else{
//         setCurrentState(currentState+1)
//       }
//     },3000)
//     return ()=> clearTimeout(timer)
//   },[currentState])
//   // console.log(currentState);
//   // const bgImageStyle = {
//   //   backgroundImage: `url(${imageSlide[currentState].url})`,
//   //   backgroundPosition: 'center',
//   //   backgroundSize: 'cover',
//   //   height: '100%'
//   // };

//   const goToNext = (currentState) =>{
//     setCurrentState(currentState)
//   }

//   return (
//       // <div className='container-style'>
//       //   <div style={bgImageStyle}></div>
//       //   <div className='transparent-background'></div>
//       //   <div className='description'>
//       //     <div>
//       //       <h1>{imageSlide[currentState].title}</h1>
//       //       <p>{imageSlide[currentState].text}</p>
//       //     </div>
//       //     <div className='carousal-dot'>
//       //       {
//       //         imageSlide.map((imageSlide,currentState)=>(
//       //           <span key={currentState} onClick={()=> goToNext(currentState)}></span>
//       //         ))
//       //       }
//       //     </div>
//       //   </div>
            
//       // </div>


//       <div className='container-style'>
//         <div className='left'>
//           <h1>{imageSlide[currentState].title}</h1>
//           <p>{imageSlide[currentState].text}</p>

//           <div className='carousal-dot'>
//           {
//             imageSlide.map((imageSlide,currentState)=>(
//               <span key={currentState} onClick={()=> goToNext(currentState)}></span>
//             ))
//           }
//           </div>
//         </div>

//         <div className='right'>
//           <div className='images'>
//           {imageSlide.map((image, currentState) => (
//             <img
//               key={currentState}
//               src={image.url}
//               alt={image.title}
//             />
//           ))}
//         </div>
//       </div>
//     </div>


//   )
// }

// export default BackgroundSlider;



// import React, { useEffect, useState } from 'react';
// import './BackgroundSlider.css';
// import imageSlide from '../../data/bg-data.js';

// const BackgroundSlider = () => {
//   const [currentState, setCurrentState] = useState(0);

//   useEffect(() => {

//     console.log('Current State:', currentState);
//     console.log('Current Image URL:', imageSlide[currentState].url);


//     const timer = setTimeout(() => {
//       setCurrentState((prev) => (prev === imageSlide.length - 1 ? 0 : prev + 1));
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [currentState]);

//   const goToNext = (index) => {
//     setCurrentState(index);
//   };

//   return (
//     <div className="container-style"  >
//       <div className="left">
//         <h1>{imageSlide[currentState].title}</h1>
//         <p>{imageSlide[currentState].text}</p>
//         <div className="carousel-dot">
//           {imageSlide.map((_, index) => (
//             <span
//               key={index}
//               onClick={() => goToNext(index)}
//               className={currentState === index ? 'active' : ''}
//             ></span>
//           ))}
//         </div>
//       </div>
//       <div className="right">
//         <div className="images">
//           {imageSlide.map((image, index) => (
//             <img
//               key={index}
//               src={image.url}
//               alt={image.title}
//               style={{ display: currentState === index ? 'block' : 'none' }}
//               className="image-slide"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BackgroundSlider;


// import React, { useEffect, useState } from 'react';
// import './BackgroundSlider.css';
// import imageSlide from '../../data/bg-data.js';

// const BackgroundSlider = () => {
//   const [currentState, setCurrentState] = useState(0);

//   useEffect(() => {

//         console.log('Current State:', currentState);
//       console.log('Current Image URL:', imageSlide[currentState].url);


//     const timer = setTimeout(() => {
//       setCurrentState((prev) => (prev === imageSlide.length - 1 ? 0 : prev + 1));
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [currentState]);

//   const goToNext = (index) => {
//     setCurrentState(index);
//   };

//   return (
//     <div className="container-style">
//       <div className="left">
//         <h1>{imageSlide[currentState].title}</h1>
//         <p>{imageSlide[currentState].text}</p>
//         <div className="carousel-dot">
//           {imageSlide.map((_, index) => (
//             <span
//               key={index}
//               onClick={() => goToNext(index)}
//               className={currentState === index ? 'active' : ''}
//             ></span>
//           ))}
//         </div>
//       </div>
//       <div className="right">
//         <div className="images">
//           {imageSlide.map((image, index) => (
//             <img
//               key={index}
//               src={image.url}
//               alt={image.title}
//               // style={{ display: currentState === index ? 'block' : 'none' }}
//               className={`image-slide ${currentState === index ? 'active' : ''}`}
//             />
//           ))}

// {/* {imageSlide.map((image, index) => (
//             <img
//               key={index}
//               src={image.url}
//               alt={image.title}
//               className={`image-slide ${currentState === index ? 'active' : ''}`}
//             />
//           ))} */}


//         </div>
//       </div>
//     </div>
//   );
// };

// export default BackgroundSlider;


import React, { useEffect, useState } from 'react';
import './BackgroundSlider.css';
import imageSlide from '../../data/bg-data.js';

const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((prev) => (prev === imageSlide.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const goToNext = (index) => {
    setCurrentState(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentState * 100}%)` }}>
        {imageSlide.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="left">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
            </div>
            <div className="right">
              <div className="images">
                <img src={slide.url} alt={slide.title} className="image-slide" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-dot">
        {imageSlide.map((_, index) => (
          <span
            key={index}
            onClick={() => goToNext(index)}
            className={currentState === index ? 'active' : ''}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSlider;

