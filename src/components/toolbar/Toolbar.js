import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';
  toHtml() {
    return (
      `<button class="button">
                <i class="material-icons">format_align_left</i>
            </button>
            <button class="button">
                <i class="material-icons">format_align_right</i>
            </button>
            <button class="button">
                <i class="material-icons">format_align_center</i>
            </button>
            <button class="button">
                <i class="material-icons">format_bold</i>
            </button>
            <button class="button">
                <i class="material-icons">format_italic</i>
            </button>
            <button class="button">
                <i class="material-icons">format_underlined</i>
            </button>`
    );
  }
}
