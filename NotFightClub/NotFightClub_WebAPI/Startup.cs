using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using NotFightClub_Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotFightClub_WebAPI
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddCors();
            //services.AddDbContext<ConfigurationContext>(options =>
            //{
            //    options.UseSqlServer(Configuration.GetConnectionString("local"));
            //});
            //services.AddDbContext<P2_NotFightClubContext>(options =>
            //{
            //    //if db options is already configured, done do anything..
            //    // otherwise use the Connection string I have in secrets.json
            //    if (!options.IsConfigured)
            //    {
            //        options.UseSqlServer(Configuration.GetConnectionString("local"));
            //    }
            //});
      services.AddDbContext<P2_NotFightClubContext>();
      services.AddControllers();
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "NotFightClub_WebAPI", Version = "v1" });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "NotFightClub_WebAPI v1"));
      }

      app.UseCors(options => options
        .WithOrigins(
          new string[]
          { 
            "http://localhost:4200"
          })
        .AllowAnyHeader()
        .AllowAnyMethod()
        );

      app.UseHttpsRedirection();

      app.UseRouting();

      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }
  }
}
