import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CAR_ACTION, AddCar } from './cars.action';
import {switchMap, mergeMap} from 'rxjs/operators';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';

@Injectable()
export class CarsEffect {

    constructor(private action$: Actions, private service: CarsService) {}

    @Effect() loadCars = this.action$.pipe(
            ofType(CAR_ACTION.ADD_CAR),
            switchMap((action: AddCar) => {
                return this.service.preloadCars()
            }),
            mergeMap((cars: Car[]) => {
                return [
                    {
                        type: CAR_ACTION.LOAD_CAR,
                        payload: cars
                    }
                ]
            })
        )
}