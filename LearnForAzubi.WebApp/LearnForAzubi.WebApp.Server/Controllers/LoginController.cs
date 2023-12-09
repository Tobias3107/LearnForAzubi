using Microsoft.AspNetCore.Mvc;

namespace LearnForAzubi.WebApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
