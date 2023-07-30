// import React, { Component } from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import story from "./stories.svg";

// export default class Stories extends Component {
//   render() {
//     return (
//       <div className="top-stories">
//         <OwlCarousel
//           className="owl-theme"
//           margin={100}
//           loop
//           autoplay={true}
//           autoplayTimeout={2000}
//           autoplayHoverPause
//         >
//           <div class="item ">
//             <img className="w-10 rounded-circle" src={story} alt="stories" />
//           </div>
//           <div class="item ">
//             <img className="w-100 rounded-circle" src={story} alt="stories" />
//           </div>
//           <div class="item">
//             <img className=" w-100 " src={story} alt="stories" />
//           </div>
//           <div class="item">
//             <img className=" w-100" src={story} alt="stories" />
//           </div>
//           <div class="item">
//             <img className="w-100" src={story} alt="stories" />
//           </div>
//           <div class="item">
//             <img className=" w-100" src={story} alt="stories" />
//           </div>
//           <div class="item">
//             <img className=" w-100" src={story} alt="stories" />
//           </div>
//           <div class="item">
//             <img className=" w-100" src={story} alt="stories" />
//           </div>
//         </OwlCarousel>
//       </div>
//     );
//   }
// }
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import story1 from "./story1.png";
import story2 from "./story2.png";
import story3 from "./story3.png";


const Stories = () => {
  const stories = [
    {
      image: story1,
      description: "Christmas Celebration\nPatna Old Age Home, Bihar",
    },
    {
      image: story2,
      description: "Join us for the Chennai Mini Marathon 2023, the 4th edition of this incredible event, dedicated to raising awareness for organ donation",
    },
    {
      image: story3,
      description: "Mumbai marathon raises ₹40.7cr through charity",
    },
    // // Add more stories here...
  ];

  return (
    <div className="top-stories">
      <OwlCarousel
        className="owl-theme"
        margin={100}
        loop
        autoplay={true}
        autoplayTimeout={2000}
        autoplayHoverPause
      >
        {stories.map((story, index) => (
          <div key={index} className="item">
            <img
              src={story.image}
              alt={`Story ${index + 1}`}
            />
            <div className="description-overlay">
              {story.description}
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Stories;
