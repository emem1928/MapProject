using MapProject.Core;
using MapProject.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace MapProjectAPI.Controllers;
[ApiController]
[Route("[controller]")]
public class CameraController : ControllerBase
{
    private readonly ICameraReader _cameraReader;
    private readonly ICameraMapper _cameraMapper;

    public CameraController(ICameraReader cameraReader, ICameraMapper cameraMapper)
    {
        _cameraReader = cameraReader;
        _cameraMapper = cameraMapper;
    }

    [HttpGet]
    public IEnumerable<CameraModel> Get()
    {
        var cameras = _cameraMapper.Map(_cameraReader.Read("../cameras-defb.csv"));
        return cameras;
    }
}
