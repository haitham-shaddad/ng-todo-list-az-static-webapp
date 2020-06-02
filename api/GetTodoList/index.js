module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const responseMessage =  [
        new { Title = "Read Microfronts book", IsCompleted = false},
        new { Title = "Post a blog about Project Tye", IsCompleted = false},
        new { Title = "Get some exercises", IsCompleted = true},
        new { Title = "Do more stuff", IsCompleted = false},
    ];

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}