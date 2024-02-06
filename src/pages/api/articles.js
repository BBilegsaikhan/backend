import { data } from "@/utils/dummyUsers";

export default async function handler(req, res) {
  const value = req.query;
  const perPage = req.query.per_page;

  const posts = await fetch (`"https://dev.to/api/articles?per_page=${perPage}`)
    const post = await posts.json();
  console.log(req.query);
  res.status(200).json(data);
}
