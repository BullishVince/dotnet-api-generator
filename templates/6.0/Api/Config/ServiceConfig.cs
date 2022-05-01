using ${applicationName}.Api.Services;
using ${applicationName}.Api.Adapters;

namespace ${applicationName}.Api.Config;
public static class ServiceBootstrapper {
    public static IServiceCollection AddServices(this IServiceCollection services, ApplicationSettings settings) {
        //Add transient services below + services which needs mandatory parameters in constructor
        //services.AddTransient<IDummyAdapter>(s => new DummyAdapter(string.Empty));
        
        //Add scoped service below
        services.AddScoped<IInformationService, InformationService>();
        return services;
    }
}