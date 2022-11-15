import dbConnect from '../../../utils/mongo.js'
import Order from '../../../models/Order.js'


export default async function handler(req, res) {
    const { method, query: { id } } = req;
    dbConnect()

    if (method === 'GET') {
        try {
            const order = await Order.findById(id);
            res.status(200).json(order)

        } catch (error) {
            res.status(500).json(error)

        }

    }
    if (method === 'PUT') { };
    if (method === 'DELETE') { };
}
