import React from "react";
import item1 from "../assets/1.png";
import item2 from "../assets/2.png";
import item3 from "../assets/3.png";
import item4 from "../assets/4.png";
import item5 from "../assets/5.png";
import rightArrow from "../assets/rightArrowWithCircle.svg";
import leftArrow from "../assets/leftArrowWithCircle.svg";

const style = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  border: "none"
};


function ArrowButton(props) {
  const { className, style, onClick, left, right,arrow } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "60px",
        height: "60px",
        display: "flex",
        zIndex: "99",
        marginLeft: `${left}`,
        marginRight: `${right}`,
        marginTop: "-32px",
        fontSize:'20px'
      }}
      onClick={onClick}
    >
      <img
        src={arrow}
        alt="arrow"
      />
    </div>
  );
}

export const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <ArrowButton arrow={rightArrow} right={"66px"} />,
  prevArrow: (
    <ArrowButton
      arrow={leftArrow}
      left={"0px"}
    />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};


export const data = [
  {
    name: "Baby Care",
    imgSrc: item1,
    imgAlt: "item",
    style: style,
 
  },
  {
    name: "Fruits",
    imgSrc: item2,
    imgAlt: "item",
    style: style,
   
  },
  {
    name: "Packet Food",
    imgSrc: item3,
    imgAlt: "item",
    style: style,
   
  },
  {
    name: "Milk",
    imgSrc: item4,
    imgAlt: "item",
    style: style,
  
  },
  {
    name: "Deo",
    imgSrc: item5,
    imgAlt: "item",
    style: style,
   
  },
  {
    name: "Deo",
    imgSrc: item5,
    imgAlt: "item",
    style: style,
    
  }
];
