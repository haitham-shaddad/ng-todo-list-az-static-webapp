using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace TodoList.Functions
{
    public static class GetTodoList
    {
        [FunctionName("GetTodoList")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            return await Task.FromResult(new OkObjectResult(new List<Todo> {
              new Todo{ Title = "Read Microfronts book", IsCompleted = false},
              new Todo{ Title = "Post a blog about Project Tye", IsCompleted = false},
              new Todo{ Title = "Get some exercises", IsCompleted = true},
              new Todo{ Title = "Do more stuff", IsCompleted = false},
          }));
        }
    }
}
