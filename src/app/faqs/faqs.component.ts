import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SideMenuSection } from '../scrollable-side-menu/scrollable-side-menu.component';

interface FaqContent {
  title: string;
  content: string;
  selector: string;
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FAQSComponent {

  // Height for the mat-expansion-panel-header.
  expansionPanelHeaderHeight = '82px';

  sideMenuSections: SideMenuSection[] = [
    {
      title:  $localize `What is it?`,
      anchorSelector: '.what-is-it',
      selected: true
    },
    {
      title:  $localize `Why is it important?`,
      anchorSelector: '.why-is-it-important',
      selected: false
    },
    {
      title:  $localize `Who is behind it?`,
      anchorSelector: '.who-is-behind-it',
      selected: false
    },
    {
      title:  $localize`Who can use it?`,
      anchorSelector: '.who-can-use-it',
      selected: false
    },
    {
      title:  $localize `How do I use it?`,
      anchorSelector: '.how-do-i-use-it',
      selected: false
    },
    {
      title:  $localize `Is my data private?`,
      anchorSelector: '.is-my-data-private',
      selected: false
    },
    {
      title:  $localize `Why does it only work on Twitter?`,
      anchorSelector: '.why-does-it-only-work-on-twitter',
      selected: false
    },
    {
      title:  $localize `What languages are covered?`,
      anchorSelector: '.what-languages-are-covered',
      selected: false
    },
    {
      title:  $localize `Can it detect harmful images and videos?`,
      anchorSelector: '.can-it-detect-harmful-images-and-videos',
      selected: false
    },
    {
      title:  $localize `Can it analyse direct messages (DMs)?`,
      anchorSelector: '.can-it-analyse-direct-messages-dms',
      selected: false
    },
    {
      title:  $localize `How do I give feedback?`,
      anchorSelector: '.how-do-i-give-feedback',
      selected: false
    },
    {
      title:  $localize `How do I learn about future opportunities?`,
      anchorSelector: '.how-do-i-learn-about-future-opportunities',
      selected: false
    }, 
    {
      title:  $localize `Report Timeframe`,
      anchorSelector: '.what-is-the-timeframe-for-which-i-can-create-a-report-on-my-tweets-using-feedshield',
      selected: false
    }
  ];

  constructor(private formBuilder: FormBuilder,) {
  }

  faqContent: FaqContent[] = [
    {
      title: $localize `What is it?`,
      content: $localize `FeedShield helps you to take back control of your Twitter feed. It is a free web application designed for human rights defenders, such as journalists and activists, but open for anyone to use. It syncs with the user’s Twitter account, automatically recognising and flagging harmful comments from the last one week. The resulting analysis helps users limit their exposure to abusive content, by allowing them to block, mute or save comments at scale. It also allows users to create reports to store or share with investigators or other watchdogs as needed. FeedShield further helps users connect with allies, from crisis counsellors on a dedicated helpline, to local experts or support organisations.`,
      selector: 'what-is-it'
    },
    {
      title: $localize `Why is it important?`,
      selector: 'why-is-it-important',
      content: $localize `Human rights defenders are increasingly being targeted by online trolls, who often coordinate their attacks. Women journalists, activists and public leaders are being especially targeted by toxic campaigns that seek to flood their victim’s social feeds with demeaning or threatening content as a way of drowning out or silencing women’s voices. The victims have, up until now, had no easy way to analyse the abuse or collect the evidence. FeedShield aims to change that by offering a combination of digital tools and investigative support. Get more information about why, in the launch announcement here.`
    },
    {
      title: $localize `Who is behind it?`,
      selector: 'who-is-behind-it',
      content: $localize` FeedShield is an initiative of Africas largest network of civic technology and digital democracy labs, Code for Africa. CfA has full-time staff/labs in 21 African countries that work in support of networks of watchdog media, human rights defending CSOs, and progressive development agencies. CfA has partnered with Googles Jigsaw team to customise its <a href="https://jigsaw.google.com/harassment-manager/" target="_blank" rel="noopener" > Harassment Manager toolkit</a> for African conditions. The toolkit also includes resources created by a global coalition of other civic organisations who have developed support materials, ranging from tipsheets and training courses, to campaign materials and other complementary tools. Read more about the resources <a href="/resources">here</a>.`
    },
    {
      title: $localize `Who can use it?`,
      selector: 'who-can-use-it',
      content: $localize `FeedShield is designed for frontline human rights defenders, such as journalists and activists. CfA is also emphasising support for women thought-leaders who are being targeted online. However, the tool is free to use by anyone, and CfA will consider support requests regardless of users' profession or gender.`
    },
    {
      title: $localize `How do I use it?`,
      selector: 'how-do-i-use-it',
      content: $localize `Once you’ve logged on to your dashboard through your Twitter account, FeedShield rates each tweet that mentions you within the last one week and assigns each one a toxicity score based on how likely they are to be harmful. You can then view or hide comments within FeedShield, curate them into reports and even share them with other parties that can support you deal with the abuse. You can also export your report and save it either on Google Drive or locally by downloading a PDF, printing a copy, or saving a CSV file without notifying the abusers. FeedShield won't post anything on your behalf. Find out more in this tutorial  <a href='/'>here</a>.`
    },
    {
      title: $localize `Is my data private?`,
      selector: 'is-my-data-private',
      content: $localize `Neither CfA nor Jigsaw will access any of the personal data within your Twitter account. No personal data is stored within the tool - your dashboard is wiped each time you finish a session. Only draft reports - designed to be downloaded and shared with third parties by you alone – are temporarily stored in the tool. Once completed, the report will be deleted from FeedShield. Read our detailed privacy policy <a href="/privacy-policy">here</a>.`
    },
    {
      title: $localize `Why does it only work on Twitter?`,
      selector: 'why-does-it-only-work-on-twitter',
      content: $localize `Google’s Jigsaw and Twitter partnered in 2020 to pioneer ways to tackle the surging tide of online harassment targeting journalists and activists across the world. The resulting technology that underpins FeedShield uses Google’s <a href="https://perspectiveapi.com/" target="_blank" rel="noopener" >Perspective API</a> and Twitter’s API to prove it is possible to give social media users ways to manage their exposure to online abuse. CfA and its partners welcome any opportunities to grow this cross-sector collaboration and expand the technology to other platforms, making it more accessible to human rights defenders around the world. Find the open source code <a href="https://github.com/conversationai/harassment-manager" target="_blank" rel="noopener">here</a>.`
    },
    {
      title: $localize `What languages are covered?`,
      selector: 'what-languages-are-covered',
      content: $localize `<a href="https://perspectiveapi.com/" target="_blank" rel="noopener">Perspective</a>, the free API powering FeedShield, can detect harmful content in <a href="https://developers.perspectiveapi.com/s/about-the-api-attributes-and-languages" target="_blank" rel="noopener">multiple languages</a>, however Feedshield will initially support English at launch. CfA will launch Arabic and French versions of FeedShield in 2023, and is working with Jigsaw to improve Perspective’s detection in indigenous African languages.`
    },
    {
      title: $localize `Can it detect harmful images and videos?`,
      selector: 'can-it-detect-harmful-images-and-videos',
      content: $localize `FeedShield has been designed to identify and filter abusive words and phrases, rather than images and videos.`
    },
    {
      title: $localize `Can it analyse direct messages (DMs)?`,
      selector: 'can-it-analyse-direct-messages-dms',
      content: $localize `FeedShield does not currently identify abusive DMs. It only analyses public Tweets and comments.`
    },
    {
      title: $localize `How do I give feedback?`,
      selector: 'how-do-i-give-feedback',
      content: $localize `FeedShield is a pilot project. We would therefore love to hear your feedback, and answer any questions not covered by these FAQs. Please email <a href="mailto:feedshield@codeforafrica.org">feedshield@codeforafrica.org</a> and our team will get back to you as quickly as possible. This email address is not monitored 24/7 and should not be used to contact CfA for urgent assistance with any harassment. If you need urgent help, use the helpline <a>here</a>`
    },
    {
      title: $localize `How do I learn about future opportunities?`,
      selector: 'how-do-i-learn-about-future-opportunities',
      content: $localize `The FeedShield team will be offering regular training, and other material and technical support to institutional partners. We will be also offering research fellowships to better understand how online trolls are coordinating their harassment of women in particular.If you are interested in keeping updated, email <a href="mailto:feedshield@codeforafrica.org">feedshield@codeforafrica.org</a>  with a request to be added to our community list.`
    }, 
    {
      title: $localize `What is the timeframe for which I can create a report on my Tweets using Feedshield?`,
      selector: 'what-is-the-timeframe-for-which-i-can-create-a-report-on-my-tweets-using-feedshield',
      content: $localize `FeedShield allows you to generate reports on tweets that have been live within the most recent 7 days.`
    }
  ]

}
