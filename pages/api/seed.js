import nc from 'next-connect';
import db from '../../utils/db';
import User from '../../models/User';
import data from '../../utils/data';

const handler = nc();
handler.get(async (req, res) => {
  await db.connect();
  const user = await User.find({});
  await db.disconnect();
  res.send({ user });
});
handler.post(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.user);
  await db.disconnect();
  res.send({ message: 'successfully seeded' });
});

export default handler;
