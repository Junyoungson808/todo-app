import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '.';

describe('Settings Context Unit', () => {
  it('Initializes state for consumption as expected', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ showCompleted, pageItems, sort, }) => (
              <ul>
                <li data-testid="show-completed">{showCompleted.toString()}</li>
                <li data-testid="page-items">{pageItems}</li>
                <li data-testid="sort">{sort}</li>
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
  })
})
