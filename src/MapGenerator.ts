import * as paper from 'paper';

import {Point} from './Point';

export enum MapDirection {
    vertical,
    horizontal
}

export enum MapEdgeType {

}

export interface MapParameter {
    size: {
        width: number,
        height: number,
    };
    gridSpacing: number;
    direction: MapDirection;
    edge: MapEdgeType;
}

export interface GridCode {
    x: number;
    y: number;
}

export class MapGenerator {

    parameter: MapParameter;

    constructor(parameter: MapParameter) {
        this.parameter = parameter;
    }

    public generate(): Point[] {

        return [];
    }

}

