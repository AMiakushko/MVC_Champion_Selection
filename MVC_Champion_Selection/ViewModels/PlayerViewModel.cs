using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC_Champion_Selection
{
    public class PlayerViewModel
    {
        public string Side { get; set; }
        public int Number { get; set; }

        public PlayerViewModel() { }

        public PlayerViewModel(string side, int number)
        {
            this.Side = side;
            this.Number = number;
        }
    }
}