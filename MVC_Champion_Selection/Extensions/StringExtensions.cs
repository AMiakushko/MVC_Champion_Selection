using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC_Champion_Selection.Extensions
{
    public static class StringExtensions
    {
        public static string Capitalize(this string str)
        {
            return char.ToUpper(str[0]) + 
                ((str.Length > 1) ? str.Substring(1).ToLower() : string.Empty);
        }
    }
}