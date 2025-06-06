import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again';
  _message;

  _generateMarkup() {
    return this._data.map(reuslt => previewView.render(reuslt, false)).join('');
  }
}

export default new ResultsView();
