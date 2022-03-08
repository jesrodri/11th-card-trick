import { render, screen } from '@testing-library/react';
import Deck from './logic/ShowDeck'

describe('<Deck />', () => {
  it('displays cards', () => {
    render(<Deck />);
    const deck = screen.getByTestId('deck');
    expect(deck).toBeInTheDocument();
  })
});
