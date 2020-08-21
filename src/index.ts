import * as paper from 'paper';
import * as $ from 'jquery';

import {MapGenerator} from './MapGenerator';
import {GridPainter} from './GridPainter';
import {Grid} from './Grid';

console.log('Loading...');

window.onload = function () {
    console.log('Generating...');

    initContext();
};

function initContext() {
    paper.setup('drawArea');

    const path = new paper.Path();
    path.strokeColor = new paper.Color('black');
    path.strokeWidth = 2;

    path.moveTo(new paper.Point(0, 0));
    path.lineTo(new paper.Point(100, 200));

    // @ts-ignore
    paper.view.draw();
}

