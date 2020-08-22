import {GridCode} from './GeneralTypes';

export class GridNameBase {

    /**
     * Generate grid name used to render on grid.
     * Rewrite this function to change method of name generation.<p>
     *
     * Sample:<p>
     * <code>
     * (1, 9) -> "01-09";
     * (23, 45) -> "23-45"
     * </code>
     *
     * @param {GridCode} code
     */
    public genGridName(code: GridCode): string {

        // sample:
        // 1 -> "01"
        // 23 -> "23"
        // 123 -> "123"
        const format = function (v: number) {
            if (v < 10) {
                return '0' + v.toString();
            } else {
                return v.toString();
            }
        };

        return format(code.x) + '-' + format(code.y);
    }
}
