export default function initItemsController(db) {
  const index = async (request, response) => {
    try {
      const items = await db.Item.findAll();
      response.send({ items });
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async (request, response) => {
    try {
      const { itemId } = request.params;
      const item = await db.Item.findOne({
        where: {
          id: itemId,
        },
      });
      response.send({ item });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    index,
    getItem,
  };
}
