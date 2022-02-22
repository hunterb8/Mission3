using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mission2.Models;

namespace Mission2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }
    }
}
