import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  constructor(props) {
    super(props);
  }

  toHtml() {
    return (
      `<input type="text" value="New table" class="input" />
            <div class="buttons">
                <button class="button">
                    <i class="material-icons">delete</i>
                </button>
                <button class="button">
                    <i class="material-icons">exit_to_app</i>
                </button>
        </div>`
    );
  }
}
