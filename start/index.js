const handler = async (event) => {
  const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(!body.name ? 'Hi there!' : `Hi ${body.name}!`)
  };
};

module.exports = { handler };
