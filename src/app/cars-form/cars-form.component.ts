import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  carName: string = "";
  carModel: string = "";

  mycars: Car[];
  error:any;

  constructor( private servece: CarsService) { }

  ngOnInit() {
  }

  onAdd() {
    if (this.carModel === '' || this.carName === '') return;

    const car = new Car(
      this.carName,
      moment().format("DD.MM.YY"),
      this.carModel
    );

    this.servece.addCar(car)

    this.carModel = ""
    this.carName = ""
  }

  onLoad() {
    this.servece.loadCars()
  }

}
