using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace TheWorld
{
    public class Program
    {
        public static void Main(string[] args)
        {

            //Web Host that is going to listen to all the requests.
            var host = new WebHostBuilder()    //Allows to specify the things about that web host
                .UseKestrel()  // Name of the Web Server
                .UseContentRoot(Directory.GetCurrentDirectory()) 
                .UseIISIntegration()
                .UseStartup<Startup>() //Class called Startup 
                .UseApplicationInsights()
                .Build();

            host.Run();
        }
    }
}
