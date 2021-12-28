class searchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const q = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return q;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
