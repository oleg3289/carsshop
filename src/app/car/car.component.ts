import { Component, Input } from '@angular/core';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car: Car;

  constructor(private store: Store<AppState>, private service: CarsService) {}

  onBuy() {
    this.car.isSold = true;
    this.service.updateCar(this.car)
  }

  onDelete() {
    this.service.deleteCar(this.car)
  }

}
