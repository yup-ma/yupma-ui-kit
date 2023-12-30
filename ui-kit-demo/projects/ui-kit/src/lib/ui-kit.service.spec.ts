import { TestBed } from '@angular/core/testing';

import { YupMaUiKitService } from './ui-kit.service';

describe('UiKitService', () => {
  let service: YupMaUiKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YupMaUiKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
