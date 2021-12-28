import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // page 1 , and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupBtn(curPage + 1, 'next');
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupBtn(curPage - 1, 'prev');
    }
    // Other pages
    if (curPage < numPages) {
      return `${this._generateMarkupBtn(
        curPage - 1,
        'prev'
      )}${this._generateMarkupBtn(curPage + 1, 'next')}`;
    }
    // page 1, and there is no more pages
    return '';
  }

  _generateMarkupBtn(pageNum, btn) {
    return `
        <button data-goto="${pageNum}" class="btn--inline pagination__btn--${btn}">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-${
      btn === 'next' ? 'right' : 'left'
    }"></use>
          </svg>
          <span>Page ${pageNum}</span>
        </button>
      `;
  }
}

export default new PaginationView();
