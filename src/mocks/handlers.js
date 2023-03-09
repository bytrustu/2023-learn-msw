import { rest } from 'msw';

export const handlers = [
    rest.get('/api/products', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    name: 'America',
                    imagePath: 'images/america.jpeg',
                },
                {
                    name: 'England',
                    imagePath: 'images/england.jpeg',
                },
            ]),
        );
    })
];
