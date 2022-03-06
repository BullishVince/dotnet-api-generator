using Serilog;
using Api.Config.Mocks;

namespace ${applicationName}.Api.Config;
public static class MockConfig {
    public static IServiceCollection AddMocks(this IServiceCollection services, ApplicationSettings applicationSettings) {
    if (applicationSettings.UseMocks) {
        Log.Information("Initiating mocks");

        //Add mocks below
        services.AddSingleton(DummyServiceMock.Get());
    }
    return services;
    }
}