import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"
import React from 'react'

const ImageSlider = ({images}) => {

const settings = {
	infinite: true,
	arrows: false,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 1500,

};
return (
	<>

	<div className="imgslider">
		<Slider {...settings}>
		{images.map((item) => (
			<div key={item.id}>
			<img className='img-fluid w-100' style={{width:500, height:500}} src={item.src} alt={item.alt} />
			</div>
		))}
		</Slider>
	</div>
		</>
)
}
export default ImageSlider;
