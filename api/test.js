export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "GET ishladi" });
  }

  if (req.method === "POST") {
    const { name } = req.body;
    return res.status(200).json({ message: `Salom, ${name}! POST ishladi` });
  }

  return res.status(405).json({ error: "Method not allowed" });
}

