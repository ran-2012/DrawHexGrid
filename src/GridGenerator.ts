import {Point} from './GeneralTypes';
import {Grid} from './Grid';

export enum MapDirection {
    vertical,
    horizontal
}

export enum MapEdgeType {

}

export interface MapParameter {
    startPoint: Point;

    width: number,
    height: number,

    gridSize: number;
    direction: MapDirection;
    edge?: MapEdgeType;
}

export class GridGenerator {

    param: MapParameter;

    constructor(parameter: MapParameter) {
        this.param = parameter;
    }

    public genLineGrid(startPoint: Point,
                       delta: Point,
                       count: number): Grid[] {
        const result = [];
        for (let i = 0; i < count; ++i) {
            const grid = new Grid();
            grid.pos = {
                x: startPoint.x + delta.x * i,
                y: startPoint.y + delta.y * i
            };
            grid.size = this.param.gridSize;

            if (this.param.direction === MapDirection.horizontal) {
                grid.rotate = 90;
            } else {
                grid.rotate = 0;
            }

            result.push(grid);
        }
        return result;
    };

    public generate(): Grid[] {
        let result: Grid[] = [];
        const lineDeltaPoint = {
            x: 0,
            y: Math.sqrt(3) * this.param.gridSize,
        };

        const evenLineStartOffset = {
            x: 0,
            y: Math.sqrt(3) / 2 * this.param.gridSize,
        };

        for (let i = 0; i < this.param.width; ++i) {
            const startPoint = {
                x: this.param.startPoint.x + i * 1.5 * this.param.gridSize,
                y: this.param.startPoint.y,
            };

            if (i % 2 === 1) {
                startPoint.x += evenLineStartOffset.x;
                startPoint.y += evenLineStartOffset.y;
            }

            result.push(...
                this.genLineGrid(startPoint,
                    lineDeltaPoint,
                    this.param.height));
        }


        return result;
    }

}

