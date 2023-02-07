// import React from 'react';
// import './catalogue.css';
// import './ParentStyle.css';
// import creambathroom from '../images/creambathroom.jpg'
// import creamroom from '../images/creamroom.jpg'
// import darkbrownroom from '../images/darkbrownroom.jpg'
// import darkbrownBathroom from '../images/darkbrown bathroom.jpg'
// import darkbrownKitchen from '../images/darkbrownroom.jpg'
// import seaBathroom from '../images/seabathroom.jpg'
// import seaKitchen from '../images/seakitchen.jpg'
// import seaRoom from '../images/searoom.jpg'
// import whiteBathroom from '../images/whitebathroom.jpg'
// import whiteKitchen from '../images/whitekitchen.jpg'
// import whiteRoom from '../images/whiteroom.jpg'
// import woodBathroom from '../images/woodbathroom.jpg'
// import woodKitchen from '../images/woodkitchen.jpg'
// import woodRoom from '../images/woodroom.jpg'

// const Catalogue = () => {

//     let data = [
//         {
//             id:1,
//             imgSrc :creambathroom
//         },
//         {
//             id:2,
//             imgSrc :creamroom
//         },
//         {
//             id:3,
//             imgSrc :darkbrownBathroom
//         }
//     ]



//     return (
//         <div>
//             <section className='catalogue_section' id="home">
//             <div className="home_container container grid">
//                 Catalogue
//             </div>
//             </section>


//            <div className='gallery'>
//             {data.map((item)=> {
//                 return(
//                     <div key={item.id}>
//                     <img src={item.imgSrc} alt="" />
//                 </div>
//                 )
//             })}
//            </div>
            
//         </div>
        
//     );
// }

// export default Catalogue;



import React, { useState } from 'react';
import './catalogue.css';
import './ParentStyle.css';
import creambathroom from '../images/creambathroom.jpg'
import creamroom from '../images/creamroom.jpg'
import darkbrownroom from '../images/darkbrownroom.jpg'
import darkbrownBathroom from '../images/darkbrown bathroom.jpg'
import darkbrownKitchen from '../images/darkbrownroom.jpg'
import seaBathroom from '../images/seabathroom.jpg'
import seaKitchen from '../images/seakitchen.jpg'
import seaRoom from '../images/searoom.jpg'
import whiteBathroom from '../images/whitebathroom.jpg'
import whiteKitchen from '../images/whitekitchen.jpg'
import whiteRoom from '../images/whiteroom.jpg'
import woodBathroom from '../images/woodbathroom.jpg'
import woodKitchen from '../images/woodkitchen.jpg'
import woodRoom from '../images/woodroom.jpg'
const Catalogue = () => {
  let data = [
    {
      id: 1,
      imgSrc: creambathroom
    },
    {
      id: 2,
      imgSrc: creamroom
    },
    {
      id: 3,
      imgSrc: darkbrownBathroom
    }
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  const togglePopup = (img) => {
    setShowPopup(!showPopup);
    setSelectedImage(img);
  };

  return (
    <div>
      <section className="catalogue_section" id="home">
        <div className="home_container container grid">Catalogue</div>
      </section>

      <div className="gallery">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.imgSrc} alt="" onClick={() => togglePopup(item)} />
            </div>
          );
        })}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <img src={selectedImage.imgSrc} alt="" />
            <button onClick={() => togglePopup({})}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogue;
