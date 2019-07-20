import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { AppState } from './redux/app.state';
import { Store } from '@ngrx/store';
import { LoadCars, AddCar, DeleteCar, UpdateCar } from './redux/cars.action';
import { Observable } from 'rxjs';
import { Car } from './car.model';

@Injectable()
export class CarsService {

    static BASE_URL: string = 'http://localhost:4205/'

    constructor(private http: HttpClient, private store: Store<AppState>) {}

    preloadCars(): Observable<any> {
        return this.http.get(CarsService.BASE_URL + 'cars')
    }

    loadCars(): any {
        this.preloadCars()
        .subscribe((data: Car[]) => this.store.dispatch(new LoadCars(data)))
    }

    addCar(car: Car) {
        this.http.post(CarsService.BASE_URL + 'cars', car)
        .subscribe((car: Car) => {
            this.store.dispatch(new AddCar(car))
        })
    }

    deleteCar(car: Car) {
        this.http.delete(CarsService.BASE_URL + 'cars/' + car.id)
        .subscribe(_ => {
            this.store.dispatch(new DeleteCar(car))
        })
    }

    updateCar(car: Car) {
        this.http.put(CarsService.BASE_URL + 'cars/' + car.id, car)
        .subscribe((car: Car) => {
            this.store.dispatch(new UpdateCar(car))
        })
    }
}