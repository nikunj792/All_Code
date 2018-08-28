import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import get from 'lodash/get';

export default class DropDown extends React.Component{
	constructor(props){
		super(props);
		this.state={
			obpData: [],
            onboardPrefs: {},
			bedPreference:'twins',
			bedPreferenceChecked:true,
			alcholChecked: true,
			beverages:'Spirits & Wine (limit 2 per suite)',
			beveragesArray:[]
		}
	}
	handleBedPreference(e){
		console.log(e.target.name);
		if(e.target.name === '2 Twins'){
			this.setState({
				bedPreferenceChecked:true,
				bedPreference:e.target.name
			});
		}
		else{
			this.setState({
				bedPreferenceChecked:false,
				bedPreference:e.target.name
			});
		}
		this.setState({
			bedPreference:e.target.name
		})
	}
	handlePillowPreference(e){
		console.log(e.target.name ,'dsfsddsfdsf',);
	}
	handleBeveragesPreference(e){
		if(e.target.name === 'No Alcohol'){
			this.setState({
				alcholChecked:false,
				beverages:e.target.name
			});
		}
		else{
			this.setState({
				alcholChecked:true,
				beverages:e.target.name
			});
		}
	}
	handleExtraEquipmentPreference(e){
		console.log(`event is ${e.target.name} and value is ${e.target.value}`);
	}

	handleWine(e,isChecked){
		console.log(`event is ${e.target.name} and ischecked is ${isChecked}`);
	}
	// fetchOBPData = () => {
    //     let obpUrl = this.props.services.urls.onboardPreferecesAPI;
    //     let obpHeaders = this.props.services.headers;

    //     fetchData(obpUrl, {
    //         headers: obpHeaders
    //     }).then(response => {
    //         if (response) {
    //             this.setState({
    //                 obpData: response.data,
    //                 onboardPrefs: response.data.onboardPreferences,
    //                 bedPrefs: response.data.onboardPreferences.bedPreference
    //             });
    //         }
    //     });
    // }
	render(){
		const { data } = this.props;
		const obpData = data.data;
		const bedPreferenceData = get(obpData, 'onboardPreferences.bedPreference');
		const pillowPreferenceData = get(obpData, 'onboardPreferences.pillowPreference');
		const extraEquipement = get(obpData, 'onboardPreferences.extraEquipment');
		const beveragesPreference = get(obpData, 'onboardPreferences.beveragePreference');
		const extraEquipment = get(obpData, 'onboardPreferences.extraEquipment');
		const medicalAccessibilityNeeds = get(obpData, 'onboardPreferences.medicalAccessibilityNeeds');
		const dietaryRequests = get(obpData, 'onboardPreferences.dietaryRequests')
	return(
			<div>
				<h2 className="onBoardHeading">OnBoard Preferences</h2>
				<h4 className="onBoardDescription">Cutomize your Seabourn experience by selecting your onboard preferences below</h4>
				{!isEmpty(obpData) && get(obpData, 'onboardPreferences.bedPreference.label')}
					{bedPreferenceData && map(bedPreferenceData.options, (item, i)=>{
						return(
					 <div key={ i } className='bedType'>
						<input type='radio' id={`accesstype_${ i }`} name= { item.label } checked={item.label== '2 Twins' ?this.state.bedPreferenceChecked : !this.state.bedPreferenceChecked} onChange={ (e) => this.handleBedPreference(e) }/>
						<label htmlFor={`accesstype_${ i }`}> { item.label }</label>
					</div>)
				})}
				{!isEmpty(obpData) && get(obpData, 'onboardPreferences.pillowPreference.label')}
					{pillowPreferenceData && map(pillowPreferenceData.options, (item, i)=>{
							return(
						<div key={ i } className='pillow'>
							<input type='checkbox' id={ `accesstype_${ i }` } name={ item.label } onChange={( evt ) => this.handlePillowPreference( evt ) } />
                			<label htmlFor={ `accesstype_${ i }` }>{  item.label }</label>
						</div>)
					})}
				{!isEmpty(obpData) && get(obpData, 'onboardPreferences.extraEquipment.label')}
					{extraEquipement && map(extraEquipement.options, (item, i)=>{
							return(
						<div key={ i } className='extraEquipment'>
							<input type='checkbox' id={ `accesstype_${ i }` } name={ item.label } checked={item.selected} onChange={( evt ) => this.handleExtraEquipmentPreference( evt ) } />
                			<label htmlFor={ `accesstype_${ i }` }>{  item.label }</label>
						</div>)
					})}
				{!isEmpty(obpData) && get(obpData, 'onboardPreferences.beveragePreference.label')}
					{beveragesPreference && map(beveragesPreference.options, (item, i)=>{
							return(
								<div key={ i } className='beverages'>
									<input type='radio' id={`accesstype_${ i }`} name= { item.label } checked={item.label ==='Spirits & Wine (limit 2 per suite)' ? this.state.alcholChecked: !this.state.alcholChecked} onChange={ (e) => this.handleBeveragesPreference(e) }/>
									<label htmlFor={`accesstype_${ i }`}> { item.label }</label>
							</div>
									)
					})}

				{
						this.state.beverages == 'Spirits & Wine (limit 2 per suite)' ? 
						<div>
							{beveragesPreference && map(beveragesPreference.options, (item, i)=>{
								if(item.label == 'Spirits & Wine (limit 2 per suite)'){
									let content = map(item.options, (checkbox, i)=>{
										return(
											<div key={ i } className='wine'>
												<input type='checkbox' id={`accesstype_${ i }`} name= { checkbox.label } checked={checkbox.selected} onCheck={ (e, isChecked) => this.handleWine(e, isChecked) }/>
												<label htmlFor={`accesstype_${ i }`}> { checkbox.label }</label>
											</div>
												)

									})
									return content;
								}
					})}
						</div> :
						<div>
							{beveragesPreference && map(beveragesPreference.options, (item, i)=>{
								if(item.label == 'No Alcohol'){									
											<div>{item.label}</div>
								}
					})}
						</div>
				}
				{!isEmpty(obpData) && get(obpData, 'onboardPreferences.medicalAccessibilityNeeds.label')}
					{medicalAccessibilityNeeds && map(medicalAccessibilityNeeds.options, (item, i)=>{
							return(
								<div key={ i } className='medicalaccessibility'>
									<input type='checkbox' id={`accesstype_${ i }`} name= { item.label } checked={item.selected } onChange={ (e) => this.handleWine(e) }/>
												<label htmlFor={`accesstype_${ i }`}> { item.label }</label>
							</div>
									)
					})}

					{!isEmpty(obpData) && get(obpData, 'onboardPreferences.dietaryRequests.label')}
					{dietaryRequests && map(dietaryRequests.options, (item, i)=>{
							return(
								<div key={ i } className='dietaryrequest'>
									<input type='checkbox' id={`accesstype_${ i }`} name= { item.label } checked={item.selected} onChange={ (e) => this.handleWine(e) }/>
												<label htmlFor={`accesstype_${ i }`}> { item.label }</label>
							</div>
									)
					})}


		</div>);
}
}
DropDown.propTypes={
};

DropDown.defaultProps={
};
 