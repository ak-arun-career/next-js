import {users} from '../../../users';

export default function handler (req, res) {
    const id = req.query.id;
    const filteredUser = users.data.filter(user => parseInt(id) === user.id);
    (filteredUser.length > 0) ?
        res.status(200).json(filteredUser[0]) :
        res.status(404).json({message: `User with id ${id} not found`});
}