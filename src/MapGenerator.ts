import * as paper from '../scripts/paper-full';
import {Point} from './Point';

enum MapDirection {
    vertical,
    horizontal
}

enum MapEdge {

}

interface MapParameter {
    size: {
        width: number,
        height: number,
    };
    gridSpacing: number;
    direction: MapDirection;
    edge: MapEdge;
}

class MapGenerator {

    parameter: MapParameter;

    constructor(parameter: MapParameter) {
        this.parameter = parameter;
    }

    public generate(): Point[] {

        return [];
    }

}

export {
    MapGenerator,
    MapParameter
};
