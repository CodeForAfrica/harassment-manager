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

import { Component } from '@angular/core';

interface Opportunity {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  tags: string;
  image: string;
}

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss'],
})
export class OpportunitiesComponent {
  opportunities: Opportunity[] = [
    {
      title: $localize `Call for Early Adopters`,
      excerpt:
      $localize `Do trolls invade your timeline all too often? Want to filter them out before you read them?`,
      url: 'opportunities/early-adopters',
      date: 'Oct 26, 2022',
      tags: 'Fellows , Africa',
      image: 'opportunities_early_adopters_illustration.jpg',
    },
    {
      title: $localize `Call for Research Partners`,
      excerpt:
      $localize `Do you want to take an active role in combating coordinated online abuse that targets African women journalists, election candidates or other human rights defenders ?`,
      url: 'opportunities/research-partners',
      date: 'Oct 26, 2022',
      tags: 'Grant , Africa',
      image: 'opportunities_research_partners_illustration.jpg',
    },
  ];
}
