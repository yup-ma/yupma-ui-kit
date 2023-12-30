import { ModuleWithProviders, NgModule } from "@angular/core";

@NgModule({
    imports: []
})

export class ServicesModule {
    static forRoot(): ModuleWithProviders<ServicesModule> {
        return {
            ngModule: ServicesModule,
            providers: [
                // UIService,
                // ToastService,
                // IdleStateService,
                // FaqModalService,
                // UrlParamService,
                // RoutingService,
                // FileInfoService,
                // FileUploadService,
                // LocalStorageService,
                // AuthenticationService,
                // IAMService,
                // AuthDataService,
                // UserDataService,
                // AppInitializerService,
            ]
        };
    }
}
export {
    // UIService,
    // ToastService,
    // IdleStateService,
    // FaqModalService,
    // UrlParamService,
    // RoutingService,
    // FileInfoService,
    // FileUploadService,
    // LocalStorageService,
    // AuthenticationService,
    // IAMService,
    // AuthDataService,
    // UserDataService,
    // AppInitializerService,
};


