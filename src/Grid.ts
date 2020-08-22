import {GridCode, Point} from './GeneralTypes';
import {GridPainter} from './GridPainter';
import {GridNameBase} from './GridName';

export class Grid {

    pos: Point;
    size: number;
    rotate: number; // degree

    code: GridCode;

    painter?: GridPainter;
    namer?: GridNameBase;

    public setPainter(painter: GridPainter) {
        this.painter = painter;
    }

    public setNamer(namer: GridNameBase) {
        this.namer = namer;
    }

    public draw() {
        this.painter?.draw(this.pos, this.size, this.rotate);
    }

    public get name(): string {
        if (this.namer) {
            return this.namer.genGridName(this.code);
        } else {
            return '';
        }
    }
}
