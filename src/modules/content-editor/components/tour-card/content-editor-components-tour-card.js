import React from 'react';
import InputSlot from '../../input-slot/content-editor-input-slot';
import agent from 'superagent';
import SelectInput from '../../input-slot/select-input/content-editor-input-slot-select-input';
import EditorContext from '../../content-editor-editor-context';


const tourData = {allTours:null,
					loading: false};

class TourCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tours: false
		}
	}

	componentDidMount(){
		if(tourData.allTours == null && !tourData.loading) {
			tourData.loading = true;
			agent.get('/api/v1/tours/all-tours')
			.then( res => {
				console.log('res', res)
				const newState = {tours: true}
				tourData.loading = false;
				console.log('con', this.context);
				tourData.allTours = res.body.tours;
				if(res.body.tours 
					&& res.body.tours.length
					&& !this.context.editorState.selectedTour) {
					this.context.setState( {selectedTour: res.body.tours[0].id})
				} else {
					this.setState(newState);
				}
			})
		}
	}

	render() {
		const { editorState: state, editing } = this.context;
		const tours = tourData.allTours;
		let selectList = '';
		if(tours){
			selectList = tours.map((tour, index)=>(
				<option key={index} value={tour.id} className="todo-color-preview__pallete__square-container">
					{tour.name}
				</option>
			))
			console.log('select list: ', selectList);
		} else {
			return <div>Fetching Tours...</div>
		}

		const select = (
			<SelectInput sectionName='selectedTour' label='Select Tour' selectList={selectList} />
		)
		
		let tour = getTourById(state.selectedTour);
		let tourCard = ''

		if(tour){
			let tourLength = '';
			if(tour.length !=null){
				tourLength = <h2 className="tour-card__h2 tour-card__length">Tour Length <span className="tour-card__length-hours"> {tour.length}hr</span></h2>
			}
			tourCard = (
				<article className="tour-card">
					<div className="tour-card__body" style={{backgroundImage: `url(/storage/tour/${tour.image}_orig.jpg)`}}>
						<div className="tour-card__top-bar">
							<h2 className="tour-card__h2 tour-card__price">${tour.price}</h2>
							<img className="tour-card__angle tour-card__category-angle" src="../img/components/orange-angle.png" alt="" />
							<h2 className="tour-card__h2 tour-card__category">{tour.tour_kind}</h2>
						</div>

						<div className="tour-card__info">
							{tourLength}
							<div className="tour-card__title-container">
								<img className="tour-card__angle tour-card__title-angle" src="../img/components/blue-angle.png" alt="" />
								<h2 className="tour-card__h2 tour-card__title">{tour.name}</h2>
								<p className="tour-card__tagline">{tour.tagline}</p>
							</div>
							<ul className="tour-card__stop-ul">
								<img className="tour-card__angle tour-card__stop-angle" src="../img/components/charcoal-angle.png" alt="" />
							</ul>
						</div>
					</div>
				</article>
			)
		}

		if(editing){
			return (
				<div>
					{select}
					{tourCard}
				</div>
			)
		} else return (
			<div>{tourCard}</div>
		)
	}
}

TourCard.contextType = EditorContext;

const getTourById = (id) => {
	if(!tourData.allTours) return null;
    for(let i=0;i<tourData.allTours.length;i++){
        if(tourData.allTours[i].id == id) return tourData.allTours[i];
    }
    return tourData.allTours[0];
}

export default TourCard
