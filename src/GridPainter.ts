import * as paper from '../scripts/paper-full';
import {Point} from './Point';

class GridPainter {

    point: Point;

    constructor(point?: Point) {
        if (point === undefined) {
            this.point = {
                x: 0,
                y: 0,
            };
        } else {
            this.point = point;
        }
    }
}

