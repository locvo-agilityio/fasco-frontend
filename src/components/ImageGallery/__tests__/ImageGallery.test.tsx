import { fireEvent, render, RenderResult } from '@testing-library/react';

// Components
import ImageGallery from '..';

// Mocks
import { MOCK_IMAGE_GALLERY } from '@/__mocks__';

let renderResult: RenderResult;

describe('ImageGallery', () => {
  beforeEach(() => {
    renderResult = render(<ImageGallery images={MOCK_IMAGE_GALLERY} />);
  });

  it('should render correctly', () => {
    expect(renderResult.container).toMatchSnapshot();
  });

  it('handle click on image', () => {
    const { getByAltText } = renderResult;

    const image = getByAltText('Thumbnail 1');

    fireEvent.click(image);

    expect(image).toBeInTheDocument();
  });
});
