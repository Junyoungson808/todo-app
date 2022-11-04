import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '.';

describe('Settings Context Unit', () => {
  it('Initializes state for consumption as expected', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ showCompleted, pageItems, sort, setShowCompleted, setPageItems, setSort}) => (
              <ul>
                <li data-testid="show-completed">{showCompleted.toString()}</li>
                <li data-testid="page-items">{pageItems}</li>
                <li data-testid="sort">{sort}</li>
                <button onClick={() => setShowCompleted(true)}>ONE</button>
                <button onClick={() => setPageItems(1)}>TWO</button>
                <button onClick={() => setSort('toughness')}>THREE</button>

              </ul>
            )
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    let completedList = screen.getByTestId('show-completed');
    let pageList = screen.getByTestId('page-items');
    let sortList = screen.getByTestId('sort');

    expect(completedList).toHaveTextContent('true');
    expect(pageList).toHaveTextContent('3');
    expect(sortList).toHaveTextContent('difficulty');

    let buttonOne = screen.getByTestId('ONE');
    let buttonTwo = screen.getByTestId('TWO');
    let buttonThree = screen.getByTestId('THREE');

    fireEvent.click(buttonOne);
    fireEvent.click(buttonTwo);
    fireEvent.click(buttonThree);

    expect(completedList).toHaveTextContent('false');
    expect(pageList).toHaveTextContent('1');
    expect(sortList).toHaveTextContent('toughness');
  })
})
