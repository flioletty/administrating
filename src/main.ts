import { bootstrapApplication, provideProtractorTestingSupport } from "@angular/platform-browser";
import { provideRouter } from '@angular/router';
import { AppComponent } from "./app/app/app.component";
import routeConfig from "./app/router.component";

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));

