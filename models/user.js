const db = require('./conn'),
    bcrypt = require('bcryptjs');

class user {

    static async getAllRestaurants() {
        const query = `SELECT * FROM restaurants ORDER BY id`;
        return await getQuery(query);
    }

    static async getOneRestaurant(id) {
        const query = `SELECT * FROM restaurants WHERE id = ${id}`;
        return await getQuery(query);
    }

    static async getOneRestaurantReviews(id) {
        const query = `
            SELECT B.id, B.restaurant_name, R.review, R.stars
            FROM restaurants AS B, reviews AS R 
            WHERE R.restaurant_id = ${id} AND B.id = ${id} ORDER BY B.id;`;
        return await getQuery(query);
    }

    static async getAllRestaurantReviews() {
        const query = `
            SELECT B.id, B.restaurant_name, R.review, R.stars
            FROM restaurant AS B, reviews AS R 
            WHERE R.restaurant_id = B.id ORDER BY R.id;
        `;

        return await getQuery(query);
    }

    static async getAllReviews() {
        const query = `SELECT * FROM reviews ORDER BY id`;
        return await getQuery(query);
    }

    static async addReview(review, stars, id) {
        const query = `INSERT INTO reviews (review, stars, restaurant_id) VALUES ('${review}',${parseInt(stars)},${id})`;
        return await getQuery(query);
    }
}

async function getQuery(query) {
    try {
        const response = await db.result(query);
        return response;
    } catch (err) {
        return err.message;
    }
}


module.exports = User;
