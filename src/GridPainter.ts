import * as paper from 'paper';
import {Point} from './GeneralTypes';
import {Grid} from './Grid';

/**
 * Grip parameters.
 */
export interface GridPainterParameter {
    /**
     * Line width.
     */
    lineWidth: number;
    lineColor: paper.Color;
}

/**
 * Draw single grid.
 */
export class GridPainter {

    param: GridPainterParameter;


    constructor(param: GridPainterParameter) {
        this.param = param;
    }

    public draw(pos: Point, size: number, rotate: number) {
        const path = new paper.Path();

        path.strokeColor = this.param.lineColor;
        path.strokeWidth = this.param.lineWidth;

        const toRad = (x: number) => 2 * x * Math.PI / 360;
        const genPoint = (d: number) =>
            new paper.Point(pos.x + size * Math.sin(toRad(rotate + d)),
                pos.y + size * Math.cos(toRad(rotate + d)));
        const n = 6;

        const initPoint = genPoint(0);
        path.moveTo(initPoint);

        for (let i = 1; i < n; ++i) {
            const d = (i * 360 / n);
            path.lineTo(genPoint(d));
        }

        path.lineTo(initPoint);
        path.closePath();
    }
}

