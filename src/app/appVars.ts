export class AppVars {
  private static _showData;
  constructor() {
    AppVars._showData = true;
  }

  static get showData() {
    return this._showData;
  }

  static set showData(value) {
    this._showData = value;
  }
}
