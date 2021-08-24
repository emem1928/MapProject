using MapProjectAPI.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MapProject.Core
{
    public interface ICameraReader
    {
        IEnumerable<CameraDataModel> Read(string path);
    }
}
