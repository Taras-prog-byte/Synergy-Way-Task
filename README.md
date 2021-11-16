## Run development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Build project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.



## Run with Docker
Run commands: 
1)  docker build --pull --rm -f "Dockerfile" -t synergyway:v1 "."
2)  docker run --rm -d  -p 80:80/tcp synergyway:v1   
