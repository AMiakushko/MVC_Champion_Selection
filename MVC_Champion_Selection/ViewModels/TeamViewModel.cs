using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC_Champion_Selection
{
    public class TeamViewModel
    {
        public string Side { get; set; }

        public TeamViewModel() { }

        public TeamViewModel(string side)
        {
            this.Side = side;
        }
    }
}