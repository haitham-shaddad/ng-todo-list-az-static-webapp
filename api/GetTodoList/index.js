const CosmosClient = require('@azure/cosmos').CosmosClient;

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let cosmosClient = new CosmosClient(process.env['CosmosConnectionString']);
    let database = cosmosClient.database('todos');
    let container = database.container('todolist');
    let {resources} = (await container.items.query('SELECT c.id,c.title,c.isCompleted FROM c').fetchAll());

    // const responseMessage =  [
    //      { Title : "Read Microfronts book", IsCompleted : false},
    //      { Title : "Post a blog about Project Tye", IsCompleted : false},
    //      { Title : "Get some exercises", IsCompleted : true},
    //      { Title : "Do more stuff", IsCompleted : false},
    // ];

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: resources
    };
}