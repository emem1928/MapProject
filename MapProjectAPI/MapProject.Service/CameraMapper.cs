
using MapProject.Core.Models;
using MapProjectAPI.Core.Models;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace MapProject.Core;

public interface ICameraMapper
{
    IEnumerable<CameraModel> Map(IEnumerable<CameraDataModel> cameras);
}

public class CameraMapper : ICameraMapper
{
    public IEnumerable<CameraModel> Map(IEnumerable<CameraDataModel> cameras)
    {
        var result = cameras.Select(c =>
        {
            var match = Regex.Match(c.Camera, @"\d{3}");

            var number = int.Parse(match.Groups[0].Value);

            var newCamera = new CameraModel()
            {
                Name = c.Camera,
                Latitude = c.Latitude,
                Longitude = c.Longitude,
                Number = number
            };

            return newCamera;
        });

        return result;
    }
}
