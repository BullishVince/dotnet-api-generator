using ${applicationName}.Api.Config.Models;

namespace ${applicationName}.Api.Services;
public interface IInformationService {
    public Task<ApiInformation> GetApiInformation();
}
public class InformationService: IInformationService {
    public Task<ApiInformation> GetApiInformation() {
        return Task.FromResult<ApiInformation>(new ApiInformation("Ok", 1.0f));
    }
}