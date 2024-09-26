import { render, screen } from "@testing-library/react";
import Async from "./Async";

/* https://jestjs.io/docs/getting-started */
/* https://testing-library.com/docs/react-testing-library/intro/ */

describe('Async component',  () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}],
        });
        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});
