import { Router } from '@angular/router';
import { Trip } from './models/trip';
import { Observable } from 'rxjs/Observable';
import { 
  Form, FormGroup, FormBuilder, 
  FormArray, Validators, FormControl 
} from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tripForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Fetch the trip id if it is present then get the trip and pass it to
    // the initForm method.
    // this.initForm() // handles both the create and edit logic
  }

  /**
   * Sends update and create method requests to the api
   * @method onSubmit
   */
  onSubmit() {
    if( this.tripForm.valid ) {
      console.log('trip form is valid');
    }
  }

  /**
   * Initialises the tripForm 
   * @method initForm
   */
  initForm(trip?: Trip):void {
    let name = 'Dubai Trip';
    let cities: FormArray = new FormArray([]);
    let places: FormArray = new FormArray([]);
    
    this.tripForm = this.fb.group({
      name: [name, Validators.required],
      cities: cities
    })
    // Creating a new trip
    this.addCity();
    this.addPlace(0);
    // Editing a trip 
    // trip.cities.forEach((city, cityIndex) => {
    //   this.addCity(city);
    //   city.places.forEach((place, placeIndex) =>{
    //     this.addPlace(cityIndex, place);
    //     // NOTE: Pictures should be assigned here
    //     // place.pictures.forEach(picture => {
    //     //   this.addPicture(cityIndex, placeIndex, picture);
    //     // })
    //   })
    // })
  }

  /**
   * Adds a city FormGroup to the cities <FormArray>FormControl(__cities__)
   * @method addCity
   * @param void
   * @return void
   */
  addCity():void {
    let places = new FormArray([]);

    (<FormArray>this.tripForm.controls['cities']).push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        places: places
      })
    )
  }

  /**
   * Adds a place FormGroup to the city's <FormArray>FormControl(__places__)
   * @method addPlace
   * @param {cityIndex} index of the city to which place is to be added
   * @return {void}
   */
  addPlace(cityIndex: number):void {
    let media: FormArray = new FormArray([]);

    (<FormArray>(<FormGroup>(<FormArray>this.tripForm.controls['cities'])
      .controls[cityIndex]).controls['places']).push(
        new FormGroup({
          name: new FormControl('', Validators.required),
        })
    )
  }

}
