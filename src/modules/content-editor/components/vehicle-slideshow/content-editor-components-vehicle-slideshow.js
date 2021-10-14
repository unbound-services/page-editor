import InputSlot from "../../input-slot/content-editor-input-slot";
import React from 'react';

import VehicleGallery from '../../../vehicle/gallery/vehicle-gallery.js';

class VehicleSlideshow extends InputSlot{
	editorRender(){
		const { editorState: state, editing } = this.context
		
		if(editing){
			return (
				<div id="vehicles-gallery">
					<section className="v-gallery">
						<ul className="v-tabs">
							<li className="v-tabs__tab v-tabs__tab--selected "><button className="v-tabs__button"><img src="../../img/icons/vehicle/vehicle-icon-1.svg" alt="vehicle icon" className="v-tabs__icon" /><p className="v-tabs__label">Sedans</p><img src="img/icons/expand-icon.svg" alt="expand or collapse menu" className="v-tabs__accordian-icon" /></button></li>
							<li className="v-tabs__tab  "><button className="v-tabs__button"><img src="../../img/icons/vehicle/vehicle-icon-2.svg" alt="vehicle icon" className="v-tabs__icon" /><p className="v-tabs__label">SUVs</p></button></li>
							<li className="v-tabs__tab  "><button className="v-tabs__button"><img src="../../img/icons/vehicle/vehicle-icon-3.svg" alt="vehicle icon" className="v-tabs__icon" /><p className="v-tabs__label">Limos</p></button></li>
							<li className="v-tabs__tab  "><button className="v-tabs__button"><img src="../../img/icons/vehicle/vehicle-icon-4.svg" alt="vehicle icon" className="v-tabs__icon" /><p className="v-tabs__label">Shuttle</p></button></li>
							<li className="v-tabs__tab  "><button className="v-tabs__button"><img src="../../img/icons/vehicle/vehicle-icon-5.svg" alt="vehicle icon" className="v-tabs__icon" /><p className="v-tabs__label">Bus</p></button></li>
						</ul>
						<div className="v-slideshow">
							<div className="v-slideshow__slide" style={{backgroundImage: "url(../storage/vehicles/2i6AxBDlt96reMupQ6Bz43TaVuMxVMlSUMQmkXdU.jpeg)"}}><img src="./img/icons/angle-variants/angle-default.svg" alt="" className="common-angle common-angle--left v-slideshow__angle" /><button className="v-slideshow__arrow v-slideshow__arrow--left"><img src="img/icons/slideshow-arrow.png" alt="" className="v-slideshow__arrow-img" /></button>
							<button className="v-slideshow__arrow v-slideshow__arrow--right"><img src="img/icons/slideshow-arrow.png" alt="" className="v-slideshow__arrow-img" /></button>
							<ul className="v-slideshow__controls"><li className="v-slideshow__li"><button className="v-slideshow__circle-btn"></button></li><li className="v-slideshow__li"><button className="v-slideshow__circle-btn"></button></li><li className="v-slideshow__li"><button className="v-slideshow__circle-btn v-slideshow__circle-btn--selected"></button></li></ul>
							</div>
							<div className="v-slideshow__info "><h2 className="v-slideshow__title">Our Sedans</h2><p className="v-slideshow__description">Nullam tincidunt adipiscing enim. Nulla porta dolor. Phasellus viverra nulla ut metus varius laoreet.</p></div>
						</div>
						<div className="v-info">
							<ul className="v-info__list">
								<li className="v-info__li"><h2 className="v-info__title">Available Vehicles</h2><p className="v-info__field">Cadillac XTS,</p><p className="v-info__field">Lincoln TC,</p><p className="v-info__field">Lincoln MKT</p></li>
								<li className="v-info__li"><h2 className="v-info__title">Recommended Capacity</h2><p className="v-info__field">3</p></li>
								<li className="v-info__li"><h2 className="v-info__title">Seating Style</h2><p className="v-info__field">Forward</p></li>
								<li className="v-info__li"><h2 className="v-info__title">Luggage Space</h2><p className="v-info__field">Yes</p></li>
								<li className="v-info__li v-info__li--light"><h2 className="v-info__title">Exterior Color</h2>
									<ul className="v-info__color-list">
										<li className="v-info__color-li" style={{backgroundColor:"rgb(96, 69, 29)"}}></li><li className="v-info__color-li" style={{backgroundColor: "rgb(37, 40, 42)"}}></li><li className="v-info__color-li" style={{backgroundColor: "rgb(37, 40, 42)"}}></li>
									</ul>
								</li>
								<li className="v-info__li v-info__li--light"><h2 className="v-info__title">Interior Color</h2>
									<ul className="v-info__color-list"><li className="v-info__color-li" style={{backgroundColor: "rgb(37, 40, 42)"}}></li><li className="v-info__color-li" style={{backgroundColor: "rgb(37, 40, 42)"}}></li><li className="v-info__color-li" style={{backgroundColor: "rgb(37, 40, 42)"}}></li>
									</ul>
								</li>
							</ul>
						</div>
					</section>
				</div>
			)
		} else {
			return <div id='vehicles-gallery'></div>
		}
	}
}

export default VehicleSlideshow;
