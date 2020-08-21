import * as paper from 'paper';
import {Point} from './Point';

/**
 * Grip parameters.
 */
export interface GridPainterParameter {
    /**
     * Line width.
     */
    lineWidth: number;
    lineColor: {
        a?: number;
        r: number;
        g: number;
        b: number;
    };
    gridCodeOffset: Point;

}

/**
 * Draw single grid.
 */
export class GridPainter {

    param: GridPainterParameter;

    /**
     * Use this point(x, y) as center point.
     */
    point: Point;

    constructor(param: GridPainterParameter, point?: Point) {
        this.param = param;

        if (point === undefined) {
            this.point = {
                x: 0,
                y: 0,
            };
        } else {
            this.point = point;
        }
    }

    public draw() {
        let color = new paper.Color(0, 0, 0);
    }

}

