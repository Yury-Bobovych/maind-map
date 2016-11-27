using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MaindMap2.wwwroot.Models
{
    public interface IContextMenu
    {
        string GetContextMenu();
    }
    public interface ILine
    {
        string GetClone();
        string GetLine();
        string GetContextMenu();
    }
    public interface INode
    {
        string GetClone();
        string GetNode();
        string GetContextMenu();
    }
}
