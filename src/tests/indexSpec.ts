import app from '..';
import supertest from 'supertest';

const request = supertest(app);

describe('Test basic endpoint server', () => {
    it('Gets /api endpoint', async () => {
        const response = await request.get('/api');
        // console.log(response);
        expect(response.status).toBe(200);
    });
});