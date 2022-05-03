import { render } from '@testing-library/react';

import ReactUiStitches from './react-ui-stitches';

describe('ReactUiStitches', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUiStitches />);
    expect(baseElement).toBeTruthy();
  });
});
