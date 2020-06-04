module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const responseMessage =  [
         { Title : "Read Microfronts book", IsCompleted : false},
         { Title : "Post a blog about Project Tye", IsCompleted : false},
         { Title : "Get some exercises", IsCompleted : true},
         { Title : "Do more stuff", IsCompleted : false},
    ];

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}