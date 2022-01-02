import Route from '@ember/routing/route';

export default class TalksRoute extends Route {
  model() {
    return [
      {
        title: 'Accessibility is Reach',
        img: '/assets/images/a11y-is-reach.png',
        url: 'https://noti.st/melsumner/FfqsyB/accessibility-is-reach',
        desc: 'What is the future of accessibility in Ember? In this talk, we look at how far we have come, what we are doing now, and how we can progress in the future.',
        conf: 'EmberFest',
      },
      {
        title: 'Rethink Real',
        img: '/assets/images/rethink-real.png',
        url: 'https://noti.st/melsumner/Eh5MQY/rethink-real-accessible-web-development',
        desc: 'In this talk, we’ll examine the reasons to shift the way we think about accessibility in tech, some of the personas we can think about, and the expectations we can have for different roles and responsibilities in our places of work.',
        conf: 'a private event',
      },
      {
        title: 'Continuous Accessibility',
        img: '/assets/images/continuous-a11y.png',
        url: 'https://noti.st/melsumner/i9uja6/continuous-accessibility',
        desc: 'How do you balance the challenge of continuously delivering features and products that are inclusive and accessible? In this talk, we will examine the idea of continuous accessibility- my vision for the future of accessibility in engineering practice.',
        conf: 'EmberConf',
      },
      {
        title: 'Shift Left',
        img: '/assets/images/shift-left.png',
        url: 'https://noti.st/melsumner/hOpLcQ/shift-left',
        desc: 'when we think about apps at scale, it becomes clear that performance, like accessibility, is everyone’s responsibility. So how do we help change this mindset, especially for front-end developers? ',
        conf: 'PerfMatters Conf',
      },
      {
        title: 'The Phenomenon of the Unlucky Choice',
        img: '/assets/images/phenom-unlucky-choice.png',
        url: 'https://noti.st/melsumner/6VELRY/the-phenomenon-of-the-unlucky-choice',
        desc: 'A talk about how the choices we make in our apps can seem not very important but have devastating consequences.',
        conf: 'ID24 & EmberFest',
      },
      {
        title: "Don't Break The Web",
        img: '/assets/images/dont-break-the-web.png',
        url: 'https://noti.st/melsumner/Phhimm/dont-break-the-web',
        desc: 'How do you innovate in an inclusive way? It’s time for JavaScript frameworks to step up our game when it comes to accessibility.',
        conf: 'EmberConf',
      },
      {
        title: 'Comfortable With Uncertainty',
        img: '/assets/images/comfortable-with-uncertainty.png',
        url: 'https://noti.st/melsumner/YOOyni/comfortable-with-uncertainty',
        desc: 'How can we learn to become comfortable with uncertainty, so we can be successful and happy? This talk shares some tools we can add to our lives, so we can choose to cultivate our fearlessness.',
        conf: 'EmberFest',
      },
      {
        title: 'Ambitious For All',
        img: '/assets/images/ambitious-for-all.png',
        url: 'https://noti.st/melsumner/uyXCvj/ambitious-for-all',
        desc: 'A talk about the challenges of accessibility in Ember.js, and how Ember is well positioned to solve these issues.',
        conf: 'EmberConf',
      },
    ];
  }
}
