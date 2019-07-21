import { Component, Input } from '@angular/core';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { DeleteCar, UpdateCar } from '../redux/cars.action';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car: Car;

  constructor(private store: Store<AppState>) {}

  onBuy() {
    this.store.dispatch(new UpdateCar(this.car))
  }

  onDelete() {
    this.store.dispatch(new DeleteCar(this.car))
  }

}
