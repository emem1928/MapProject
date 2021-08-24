
using CsvHelper;
using CsvHelper.Configuration;
using MapProject.Core;
using MapProjectAPI.Core.Models;
using System.Globalization;

namespace MapProjectAPI.Infrastructure;

public class CameraReader : ICameraReader
{
    public IEnumerable<CameraDataModel> Read(string path)
    {
        List<CameraDataModel> cameras;

        var config = new CsvConfiguration(CultureInfo.GetCultureInfo("en-US")) { Delimiter = ";" };
        config.MissingFieldFound = (_) => { };

        using (var reader = new StreamReader(path))
        using (var csv = new CsvReader(reader, config))
        {
            cameras = csv.GetRecords<CameraDataModel>().ToList();
        }

        return cameras;
    }
}
