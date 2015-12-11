using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_Champion_Selection.Startup))]
namespace MVC_Champion_Selection
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
