// See https://aka.ms/new-console-template for more information

using MapProject.Core;
using MapProjectAPI.Infrastructure;


class Program
{
    static void Main(string[] args)
    {
        var cameraMapper = new CameraMapper();
        var cameraReader = new CameraReader();

        var selectedCameras = cameraReader.Read("../../../../cameras-defb.csv").Where(c => c.Camera.Contains(args[0]));
        var mappedCameras = cameraMapper.Map(selectedCameras);

        foreach (var camera in mappedCameras)
        {
            Console.WriteLine($"{camera.Number} | { camera.Name} | {camera.Latitude} | { camera.Longitude}\n");
        }
    }
}