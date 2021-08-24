using MapProject.Core;
using MapProjectAPI.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "MapProjectAPI", Version = "v1" });
});

builder.Services.AddTransient<ICameraReader, CameraReader>();
builder.Services.AddTransient<ICameraMapper, CameraMapper>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "_myAllowSpecificOrigins",
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:4200");
                      });
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "MapProjectAPI v1"));
}

app.UseHttpsRedirection();

app.UseCors("_myAllowSpecificOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();
