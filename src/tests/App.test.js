import { render, screen } from '@testing-library/react';
import Deck from '../components/Deck'

describe('<Deck />', () => {
  it('displays cards', () => {
    render(<Deck />);
    const deck = screen.getByTestId('deck');
    expect(deck).toBeInTheDocument();
  })
});
