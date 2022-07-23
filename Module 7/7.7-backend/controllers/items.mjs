export default function initItemsController(db) {
  const index = async (request, response) => {
    try {
      const items = await db.Item.findAll();
      response.send({ items });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
  };
}
