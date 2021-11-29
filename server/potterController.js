const User = require('./UserModel');
const Pair = require('./PairModel');

class PotterController {
  async addUser(req, res) {
    try {
      const { username } = req.body;
      const doubleUser = await User.findOne({ username });
      if (doubleUser) {
        return res.status(400).json({ message: 'name already exist' });
      };
      const user = new User({ username })
      await user.save();
      return res.status(200).json(user);
    } catch(err) {
      res.status(400).json({message: "Something went wrong"})
    }
  }

  async getUsers(req, res) {
    try {
      const { name } = req.body;
      const users = await User.find();
      const newArr = users.filter(user => user.username !== name);
      return res.status(200).json(newArr);
    } catch (err) {
      res.status(400).json({message: "Something went wrong"})
    }
  }

  async createPair(req, res) {
    try {
      const { fromUser, toUser } = req.body;
      const pair = new Pair({ fromUser, toUser });
      await pair.save();
      res.status(201).json({ message: `Pair ${fromUser} = ${toUser} created` });
    } catch (err) {
      res.status(400).json({ message: "Something went wrong" });
    }
  };

  async getPairs(req, res) {
    try {
      const pairs = await Pair.find();
      res.status(200).json(pairs)
    } catch (err) {
      res.send(400).json({message: "Something went wrong"})
    }
  }

  async deleteUser(req, res) {
    const { id } = req.body;
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(400).json({message: `OOps, someone picked this name just before you`})
      }
      return res.status(200).json(deletedUser);
    } catch (err) {
      res.status(400).json({message: "Something went wrong"})
    }
  }
}

module.exports = new PotterController();