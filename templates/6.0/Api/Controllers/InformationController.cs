using Microsoft.AspNetCore.Mvc;
using ${applicationName}.Api.Services;

namespace ${applicationName}.Api.Controllers;
[ApiController]
[Route("[controller]/[action]")]
public class InformationController : ControllerBase
{

    private readonly ILogger<InformationController> _logger;
    private readonly IInformationService _informationService;

    public InformationController(
        ILogger<LocalDataController> logger, 
        IInformationService informationService
        )
    {
        _logger = logger;
        _informationService = informationService;
    } 

    [HttpGet]
    public async Task<IActionResult> GetApiInformation()
    {
        var result = await _informationService.GetApiInformation();
        return Ok(result);
    }         
}
