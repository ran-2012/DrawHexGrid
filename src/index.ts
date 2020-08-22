import * as paper from 'paper';

import {GridGenerator, MapDirection} from './GridGenerator';
import {GridPainter} from './GridPainter';

console.log('Loading...');

window.onload = function () {
    console.log('Generating...');

    initContext();
};

function initContext() {
    paper.setup('drawArea');

    const mapGenerator = new GridGenerator({
        startPoint: {
            x: 50,
            y: 50,
        },
        width: 12,
        height: 12,

        gridSize: 50,
        direction: MapDirection.horizontal
    });

    const grids = mapGenerator.generate();

    const painter = new GridPainter({
        lineWidth: 2,
        lineColor: new paper.Color('gray'),
    });

    grids.map((grid) => {
        painter.draw(grid.pos, grid.size, grid.rotate);
    });

    // @ts-ignore
    paper.view.draw();
}

