import { randomUsers } from "../src/utils/dummyUsers";

const handler = (req, res) => {
  res.status(200).json(randomUsers);
};

export default handler;
