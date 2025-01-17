/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OauthApiService } from '../oauth_api.service';
import { OpportunitiesComponent } from './opportunities.component';

describe('FindSupportComponent', () => {
  let component: OpportunitiesComponent;
  let fixture: ComponentFixture<OpportunitiesComponent>;
  let mockOauthApiService: jasmine.Spy;

  beforeEach(
    waitForAsync(() => {
      mockOauthApiService = jasmine.createSpy();

      // This imports all the dependencies of the components this component 
      // uses.
      TestBed.configureTestingModule({
        declarations: [OpportunitiesComponent],
        imports: [RouterTestingModule],
        providers: [
          {
            provide: OauthApiService,
            useValue: mockOauthApiService,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
