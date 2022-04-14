module.exports.requestActions = [
  {
    label: "Request Runner",
    action: async (context, data) => {
      const { request } = data;
      const response = await context.network.sendRequest(request);
      const html = `<code>${request.name}: ${response.statusCode}</code>`;
      context.app.showGenericModalDialog("Results", { html });
    },
  },
];
