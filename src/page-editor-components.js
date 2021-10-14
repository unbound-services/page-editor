import React, { useContext } from 'react';
import EditorValue  from './modules/content-editor/input-slot/editor-value/content-editor-input-slot-editor-value.js';
import RichTextInput from './modules/content-editor/input-slot/rich-text-input/content-editor-input-slot-rich-text-input.js';
import FileInput from './modules/content-editor/input-slot/file-input/content-editor-input-slot-file-input.js'

//import VehicleSlideshow from './modules/content-editor/components/vehicle-slideshow/content-editor-components-vehicle-slideshow.js';
import TourCard from './modules/content-editor/components/tour-card/content-editor-components-tour-card.js';
import Policy from './modules/content-editor/policy/content-editor-policy.js';

import StringInput from './modules/content-editor/input-slot/string-input/content-editor-input-slot-string-input.js';
import SelectInput from './modules/content-editor/input-slot/select-input/content-editor-input-slot-select-input.js';
import NumberSelectInput from './modules/content-editor/input-slot/number-select-input/content-editor-input-slot-number-select-input.js';
import EditorContext, { stateDeeper, incState } from './modules/content-editor/content-editor-editor-context.js';
import ContactForm from './modules/content-editor/components/contact-form/content-editor-components-contact-form.js';
import DistilledFAQ from './modules/content-editor/components/distilled-faq/content-editor-components-distilled-faq.js';
import StandardServicesAccordian from './modules/content-editor/components/standard-services-accordian/content-editor-components-standard-services-accordian.js';
import TripPolicyTable from './modules/content-editor/components/trip-policy-cancelation-table/content-editor-components-trip-policy-cancelation-table.js';
import SpacerComponent from './modules/content-editor/components/spacer/content-editor-components-spacer.js';
import IconSection from './modules/content-editor/components/icon-section/content-editor-components-icon-section.js';
import SlotSection from './modules/content-editor/input-slot/slot-section/content-editor-input-slot-slot-section.js';
import Video from './modules/content-editor/components/video/content-editor-components-video.js';


// our sample component
// const someComponent = (props) => {
//     const { title = "", children } = props;
//     return <div style={{border: "2px #00dddd solid", padding:20}}><h1><StringInput sectionName="title" /></h1>
//         <ContentSection sectionName="content" style={{border: "1px #dddddd solid", padding:20}} />Title:{title}
//         </div>
// }
// 
// const demoComponent = (props) => {
//     const { title = "", children } = props;
//     return <div style={{border: "2px #00dddd solid", padding:20}}><h1><StringInput sectionName="title" /></h1>
//         <p style={{color:"#dddddd"}}><StringInput sectionName="par1" /></p>
//         <p style={{color:"#aaddff"}}><StringInput sectionName="par2" /></p>
//         <h2><EditorValue sectionName="par2" /></h2>
//         </div>
// }



const heroComponent = (props) => {
    const { heroTitle = "", children, heroParagraph = "", heroImage='/img/components/road_cropped.jpg', color="primary", showButton='true'} = props;

    let sectionClass = "section section--divided section--divided-hero section--"+color+" section--divided-up";
    const options = ['primary', 'chauf', 'dist', 'chart'];
    const buttonOptions = ['true', 'false'];
    const PegButton = pegasusButton;

    let mobileButtonSection ='';
    let desktopButtonSection ='';
    if(showButton=='true'){
        mobileButtonSection=<div className='section__cta-container section__cta-container--mobile-only'>
           <SlotSection sectionName="button-section" onRender={props => <PegButton {...props} />} />
        </div>;
        desktopButtonSection=<div className='section__cta-container section__cta-container--desktop-only'>
            <SlotSection sectionName="button-section" onRender={props => <PegButton {...props} />} />
        </div>;
    }

    let extraEditOptions =(<React.Fragment>
        <SelectInput hidden={true} label='Section Color: ' sectionName='color' options={options} current={color} />
        <SelectInput hidden={true} label='Show button: ' sectionName='showButton' options={buttonOptions} current={showButton} />

        <FileInput label='Background Image: ' hidden={true} sectionName='heroImage' />
        </React.Fragment>);

    return <React.Fragment>
        <section className={sectionClass}>
          <header className='section__header'  style={{backgroundImage:"url("+heroImage+")"}}>
            <h1 className='section__h1 '><StringInput sectionName="heroTitle" />
            {mobileButtonSection}
            </h1>
          </header>
            <div className='section__content' >
            <div className='section__inner-content'>
              <div className='section__p'><RichTextInput sectionName="heroParagraph" /></div>
              {desktopButtonSection}
            </div>
          </div>
          {extraEditOptions}
        </section>
    </React.Fragment>
}

const pegasusButton = (props) => {
    const { color='white',
        arrowColor='blue', 
        text="Call or book online", 
        link='/address-a-contact/', 
        position='right',
        editing, previewing } = props;
    const positionOptions = ['right','center'];
    const colorOptions = ['white', 'black'];
    const arrowColorOptions = ['blue', 'dark'];
    let spanClass = 'cta-button__text';
    if(position == 'center'){
        spanClass+= ' cta-button__text--center';
    }

    let extraEditOptions =(<React.Fragment>
        <SelectInput hidden= {true} label='Text Position: ' sectionName='position' options={positionOptions} current={position} />
        <SelectInput hidden= {true} label='Button Color: ' sectionName='color' options={colorOptions} current={color} />
        <SelectInput hidden= {true} label='Arrow Color: ' sectionName='arrowColor' options={arrowColorOptions} current={arrowColor} />
        <StringInput hidden={true}label='Button Link: ' sectionName='link'/>
        <StringInput hidden={true} label='Button Text: ' sectionName='text'/>
        </React.Fragment>);

    // stop the link from being followed
    let useHref = link;
    let buttonOnClick = e => { e.preventDefault(); e.stopPropagation();}
    if(!editing && !previewing) buttonOnClick = null;

    return <section>
            <a onClick={buttonOnClick} 
                className={'cta-button cta-button--'+color+' cta-button--'+arrowColor+'-arrow'} href={useHref}>
                <span className={spanClass}><EditorValue sectionName='text'/></span>
            </a>
            {extraEditOptions}
        </section>
}

const title = (props) => {
    const { title='', className='' } = props;

    return <section>
            <h1 className={`section__h1 ${className}`}><StringInput sectionName="title" /></h1>
        </section>
}

const fullTestimonial = (props) => {
    const { reviewImage='/img/components/review.jpg', content, blurb, link, linkText } = props;

    return <section className="section">
      <div className="section__inner-div">
        <article className="testimonial">
          <img src={reviewImage} className="testimonial__img" />
          <div className="testimonial__content">

                <RichTextInput label='Testimonial' className='testimonial__text' inputClass='testimonial__text' tagName='div' sectionName="content"/>


                <RichTextInput label='Blurb' className='testimonial__attribution' inputClass='testimonial__attribution' tagName='div' sectionName="blurb"/>

          </div>
        </article>
      </div>
      <FileInput label='Background Image: ' hidden={true} sectionName='reviewImage' />
    </section>

}


const leftSideSection = (props) => {
    const { title='', color='primary', paragraph, image='/img/components/tux_cropped.png', showButton='true'  } = props;
    let sectionClass = 'section section--divided section--'+color+' section--divided-down'
    const colorOptions = ['primary', 'chauf', 'dist', 'chart'];
    const buttonOptions = ['true', 'false'];
    const PegButton = pegasusButton;
    let buttonSection ='';
    if(showButton=='true'){
        buttonSection=<div className='section__cta-container'>
           <SlotSection sectionName="button-section" onRender={props => <PegButton {...props} />} />
        </div>;
    }

    let extraEditOptions =(<React.Fragment>
        <SelectInput hidden={true} label='Section Color: ' sectionName='color' options={colorOptions} current={color} />
        <SelectInput hidden={true} label='Show button: ' sectionName='showButton' options={buttonOptions} current={showButton} />
        <FileInput label='Background Image: ' hidden={true} sectionName='image' />
        </React.Fragment>);

    return <section className={sectionClass} >
  <header className='section__header' >
    <h1 className='section__h1'><StringInput sectionName="title" /></h1>
  </header>
  <div className='section__content'style={{backgroundImage:"url("+image+")"}}>
    <div className='section__inner-content'>
      <div className='section__p'><RichTextInput sectionName="paragraph"  /></div>
      {buttonSection}
    </div>
    <div></div>
  </div>

  {extraEditOptions}

</section>
}

const rightSideSection = (props) => {
    const { title='', color='primary', paragraph, image='/img/components/woman-child-clipped.png', showButton='true'  } = props;
    const PegButton = pegasusButton;
    const buttonOptions = ['true', 'false'];
    let buttonSection ='';
    if(showButton=='true'){
        buttonSection=<div className='section__cta-container'>
        <SlotSection sectionName="button-section" onRender={props => <PegButton {...props} />} />
        </div>;
    }

    let extraEditOptions =(
        <React.Fragment>
        <SelectInput hidden={true} label='Show button: ' sectionName='showButton' options={buttonOptions} current={showButton} />
        <FileInput label='Background Image: ' hidden={true} sectionName='image' />
        </React.Fragment>
    );

    return <section className="section section--divided section--divided-header-image" >
        <header className='section__header' style={{backgroundImage:"url("+image+")"}} >
            <h1 className='section__h1'><StringInput sectionName="title" /></h1>
        </header>
        <div className='section__content section__content--lightbkg' >
            <div className='section__inner-content'>
                <div className='section__p'><RichTextInput sectionName="paragraph" /></div>
                {buttonSection}
            </div>
            <div></div>
        </div>
        {extraEditOptions}
    </section>
}

// const vehicleSlideshow = () => {
// 	return <section className='section'>
//         <VehicleSlideshow />
//         </section>
// }


const imageComponent = (props) => {
	const openDrawer = () => {
		console.log('reach up through state to open drawer')
	}
	return (
		<FileInput sectionName='image' postUrl={`/pages/${window.pageIndex}/add-images`} />
	)
}

const smallReservationForm = (props) => {

    return <div className='livery-booking-container'>
        <iframe 
            src="https://book.liverycoach.com/pegasus_global/widget"
            id="iliveryCoachWidget"
            name="iliveryCoachWidget"
            frameBorder="0"
            width="100%"
            height="401"
            scrolling="no"
            style={{'minHeight':'401px !important'}}>
            </iframe><br />
            <script type="text/javascript" src="https://book.liverycoach.com/code/scripts/porthole/parentcommunication.min.js"></script><br />
            <script type="text/javascript" src="https://book.liverycoach.com/code/scripts/iframeresizer/iframeResizer.min.js"></script><br />
    
        </div>
}

const fullReservationForm = (props) => {

    return <div className='livery-booking-container'>
        <iframe 
            src="https://book.liverycoach.com/pegasus_global"
            id="iliveryCoach"
            frameBorder="0"
            width="100%"
            height="600"
            scrolling="no"
            style={{'minHeight':'600px !important'}}>
            </iframe><br />
        <script type="text/javascript" src="https://book.liverycoach.com/code/scripts/iframeresizer/iframeResizer.min.js"></script>
</div>
}




const smallTestimonialSection = (props) => {
    const { title='', color='primary', paragraph, image='/img/components/tux_cropped.png', count  } = props;
    let Testimonial = smallTestimonial;
    const colorOptions = ['primary', 'chauf', 'dist', 'chart'];
    let sectionClass = 'common-testimonial-section common-testimonial-section--'+color;
    let entries=[];

     for(var i=0; i<count; i++){
        let slotName = 'testimonial'+i;
        entries.push(<SlotSection sectionName={slotName} onRender={props => <Testimonial {...props} />} />);
    }

    console.log('count', count);


    return <React.Fragment>
        <section className={sectionClass}>
             {entries}        
        </section>
        <SelectInput hidden={true} label='Color: ' sectionName='color' options={colorOptions} current={color} />
        <NumberSelectInput hidden={true} label='Number of Testimonials: ' sectionName='count' current={count} />
    </React.Fragment>
}

const smallTestimonial = (props) => {
    const { testimonialParagraph='', customerName='' } = props;

    return <React.Fragment>
        <div className='common-p common-testimonial'>
        <RichTextInput label='Customer Review: ' tagName='p'  sectionName='testimonialParagraph' />
        <span className='common-testimonial__customer'>
            - <EditorValue sectionName='customerName' />
        </span>
        <StringInput hidden={true} label='Customer Name: ' sectionName="customerName" />
        </div>
        
    </React.Fragment>
}

const commonHeading = (props) => {
    const { title='', size='large', color='' } = props;
    const sizeOptions = ['large', 'medium', 'small'];
    const colorOptions = ['none','primary', 'chauf', 'dist', 'chart'];
    let tag = 'h1';
    let headingClass = 'common-heading';
    let colorClass = ' common-heading--'+color;
    switch(size){
        case 'large':
            tag = 'h1';
            headingClass = 'common-heading common-heading--large';
        break
        case 'medium':
            tag = 'h2';
            headingClass = 'common-heading common-heading--medium';
        break
        case 'small':
            tag = 'h3';
            headingClass = 'common-heading common-heading--small';
        break
        default:
            tag = 'h1';
            headingClass = 'common-heading common-heading--large';
    }

    return <React.Fragment> 
        <br />
        <br />
        <br />
        <section>
            <StringInput className={headingClass+colorClass} tagName={tag} sectionName="title" />
        </section>
        <SelectInput hidden={true} label='Heading Size: ' sectionName='size' options={sizeOptions} current={size} />
        <SelectInput hidden={true} label='Color: ' sectionName='color' options={colorOptions} current={color} />
        </React.Fragment>
}

const socialMediaSection = (props) => {
    const { title='title', chauffeuredText='', 
            takePegasusText='', 
            distilledText='', 
            chaufFacebook, 
            chaufInstagram, 
            twitterLink, 
            distFacebook, 
            distInstagram   } = props;

    return <React.Fragment>
        <section className="section social-media-section" >
          <div className='section__content social-media-section__content'>
            <h1 className='section__h1 section__h1--primary social-media-section__h1'>
                <StringInput hidden={false} sectionName="title" />
            </h1>
            <div className="social-media-info">
              <div className="social-media-info__box social-media-info__box--chauf">
                <h2 className="social-media-info__h2"><RichTextInput sectionName="chauffeuredText" /></h2>
                <img className="social-media-info__pegasus-logo" src="/img/components/white-logo.svg" alt="" />
                <div className="social-media-info__icons">
                    <a href={chaufFacebook} className="social-media-info__a" target="_blank">
                        <img src="/img/components/facebook.svg" alt="" className="social-media-info__img" />
                    </a>
                    
                    <a href={chaufInstagram} className="social-media-info__a" target="_blank">
                        <img src="/img/components/instagram.svg" alt="" className="social-media-info__img" />
                    </a>
                    <StringInput hidden={true} label='Facebook Link: ' sectionName="chaufFacebook" />
                    <StringInput hidden={true} label='Instagram Link: ' sectionName="chaufInstagram" />
                </div>
              </div>
              <div className="social-media-info__box social-media-info__box">
                <h2 className="social-media-info__h2"><RichTextInput sectionName="takePegasusText" /></h2>
                <img className="social-media-info__pegasus-logo" src="/img/components/white-logo.svg" alt="" />
                <div className="social-media-info__icons">
                    <a href={twitterLink} className="social-media-info__a" target="_blank">
                        <img src="/img/components/twitter.svg" alt="" className="social-media-info__img" />
                    </a>
                    <StringInput label='Twitter Link: ' hidden={true} sectionName="twitterLink" />
                </div>
              </div>
              <div className="social-media-info__box social-media-info__box--dist">
                <h2 className="social-media-info__h2"><RichTextInput sectionName="distilledText" /></h2>
                <img className="social-media-info__pegasus-logo" src="/img/components/white-logo.svg" alt="" />
                <div className="social-media-info__icons">
                    <a href={distFacebook} className="social-media-info__a" target="_blank">
                        <img src="/img/components/facebook.svg" alt="" className="social-media-info__img" />
                    </a>
                    <a href={distInstagram} className="social-media-info__a" target="_blank">
                        <img src="/img/components/instagram.svg" alt="" className="social-media-info__img" />
                    </a>
                    <StringInput label='Facebook Link: ' hidden={true} sectionName="distFacebook" />
                    <StringInput label='Instagram Link: ' hidden={true} sectionName="distInstagram" />
                </div>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
}

const distilledEquation = (props) => {
    const { title='',  } = props;

    return <React.Fragment>
        <div className="tour-equation-container">
          <article className="equation__item">
              <img className="equation__item__image" src="/img/icons/equation-1.png" />
              <div className="equation__item__title">
                <h1 className="common-heading common-heading--large ">Ticket Package</h1>
              </div>
              <div className="equation__item__subtitle">
                <p className="common-p ">What you do at each destination</p>
              </div>
            </article>
                  <div className="equation__operator-sign__container">
                <img className="equation__operator-sign equation__operator-sign--plus" src="/img/icons/equation-plus.png" />
              </div>
                        <article className="equation__item">
              <img className="equation__item__image" src="/img/icons/equation-2.png" />
              <div className="equation__item__title">
                <h1 className="common-heading common-heading--large  ">Vehicle & Chauffeur</h1>
              </div>
              <div className="equation__item__subtitle">
                <p className="common-p  ">How you get there is half the fun</p>
              </div>
            </article>
                  <div className="equation__operator-sign__container">
                <img className="equation__operator-sign equation__operator-sign--equals" src="/img/icons/equation-equals.png" />
              </div>
                        <article className="equation__item">
              <img className="equation__item__image" src="../img/icons/equation-3.png" />
              <div className="equation__item__title">
                <h1 className="common-heading common-heading--large  ">What It Costs</h1>
              </div>
              <div className="equation__item__subtitle">
                <p className="common-p">What’s your Perfect Kentucky Day?</p>
              </div>
            </article>
              </div>
    </React.Fragment>
}

const textEditor = (props) => {
    const { text='' } = props;

    return <React.Fragment>
        <section className='section'>
            <RichTextInput inputClass='section__common-text' sectionName="text" />
        </section>
    </React.Fragment>
}

const column = (props) => {
    const { text='', count } = props;

    return <React.Fragment>
        <div className='section__column'>
            <RichTextInput inputClass='section__common-text' sectionName="text" />
        </div>
    </React.Fragment>
}

const columnSection = (props) => {
    const { count=3 } = props;
    let Column = column;
    let columns = [];
    let columnSectionClass;

    if(count == 2){
        columnSectionClass = 'section__inner-div column-section--double';
    }else if(count == 3){
        columnSectionClass = 'section__inner-div column-section--triple';
    } else{
        columnSectionClass = 'section__inner-div column-section--single';
    }

    for(var i=0; i<count; i++){
        let slotName = 'column'+i;
        columns.push(<SlotSection sectionName={slotName} onRender={props => <Column {...props} />} />);
    }

    return <React.Fragment>
        <section className='section'>
            <div className={columnSectionClass}>
                {columns}
            </div>
        </section>
        <NumberSelectInput hidden={true} label='Number of Columns: ' sectionName='count' current={count} min={0} max={3} />
    </React.Fragment>
}

const videoComponent = (props) => {
    const { children } = props;
    return (
        <div className="video-component" >
            <Video></Video>
        </div>

    )
}



const componentList = {
  // "firstDemo": { displayName: "First Demo", comp: someComponent },
  // "secondDemo": { displayName: "SecondDemo", comp: demoComponent },
  "pegasus-hero": { displayName: "Hero Component", comp: heroComponent },
  "pegasus-arrow-button": { displayName: "Arrow Button", comp: pegasusButton},
  "image-component": {displayName: 'Image', comp: imageComponent},
  "pegasus-title": { displayName: "Title", comp: title},
  "testimonial": { displayName: "Full Testimonial with Image", comp: fullTestimonial},
  "pegasus-left-side-section": { displayName: "Left Side Section", comp: leftSideSection},
    "pegasus-reserve-form-small":  { displayName: "Small Reservation Form", comp: smallReservationForm},
    "pegasus-right-side-section":  { displayName: "Right Side Section", comp: rightSideSection},
//  "pegasus-vehicle-slideshow" : {displayName: 'Vehicle Slideshow', comp: vehicleSlideshow},
    "pegasus-tour-card" : {displayName: 'Tour Card', comp: TourCard},
    "pegasus-policy" : {displayName: 'Policy', comp: Policy},
    "pegasus-reserve-form-full":  { displayName: "Full Reservation Form", comp: fullReservationForm},
    "pegasus-reserve-icon-section":  { displayName: "Icon Section", comp: IconSection},
    "pegasus-testimonial-list":  { displayName: "Testimonial List", comp: smallTestimonialSection},
    "pegasus-common-heading":  { displayName: "Heading", comp: commonHeading},
    "static-php-contact-form": { displayName:"Contact Form", comp: ContactForm},
    "pegasus-social-media":  { displayName: "Social Media Section", comp: socialMediaSection},
    "pegasus-equation":  { displayName: "Custom Tour Equation", comp: distilledEquation},
    "pegasus-general-text-box":  { displayName: "Text Editor", comp: textEditor},
    "pegasus-distilled-faq":  { displayName: "Distilled FAQ", comp: DistilledFAQ},
    "pegasus-standard-services-accordian":  { displayName: "Standard Services Accordian Button", comp: StandardServicesAccordian},
    "pegasus-column-with-text":  { displayName: "Columns With Text", comp: columnSection},
    "pegasus-cancelation-table":  { displayName: "Trip Policy Cancellation Table", comp: TripPolicyTable},
    "spacer" : { displayName: "Spacer", comp: SpacerComponent },
    "video" : { displayName: "Video", comp: videoComponent },
}

export default componentList;