using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MaindMap2.Controllers
{
    public class MaindMapController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index(string id)
        {
            if (id != null)
            {
                ViewBag.mapId = id;
                ViewBag.lines = System.IO.File.ReadAllText("wwwroot/MaindMaps/Lines/" + id + ".txt");
                ViewBag.nodes = System.IO.File.ReadAllText("wwwroot/MaindMaps/Nodes/" + id + ".txt");
            }
            return View();
        }
        [HttpPost]
        public void Save(string nodes, string lines,string id) {
            if (nodes != "" && lines != "" && id != "")
            {
                System.IO.File.WriteAllText("wwwroot/MaindMaps/Lines/" + id + ".txt", lines);
                System.IO.File.WriteAllText("wwwroot/MaindMaps/Nodes/" + id + ".txt", nodes);
            }           
        }
        public IActionResult Choose() {
            List<string> s =new List<string>();
            foreach (string item in Directory.GetFiles("wwwroot/MaindMaps/Lines/")) {
                s.Add(item.Substring(24,36));
            }
            return View("Choose",s);
        }
    }
}
