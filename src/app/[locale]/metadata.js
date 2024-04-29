export function generateMetadata({ locale }) {
  let title, description, keywords;
  let navigation = null; // Змінна для зберігання навігаційного меню

  if (locale === 'uk') {
    title = 'Студія розробки сайтів SiteDoer.pro';
    description = "Студія розробки сайтів SiteDoer.pro - лідер у створенні інноваційних та ефективних веб-проектів в Україні. Зверніться до нас для розробки професійного та креативного веб-сайту, підтримки та просування вашого бізнесу в Інтернеті.";
    keywords = 'розробка сайтів, студія веб-дизайну, веб-розробка, веб-сайти, сайт, створення сайтів, розробка веб-сайтів, SiteDoer.pro';

  } else if (locale === 'en') {
    title = 'Website Development Studio SiteDoer.pro';
    description = 
    "Website Development Studio SiteDoer.pro is a leader in creating innovative and effective web projects in Ukraine. Contact us for the development of a professional and creative website, support, and promotion of your business on the Internet.";
    keywords = "website development, web design studio, web development, websites, website creation, web development, SiteDoer.pro";

  } else {
    // Default to English if locale is not 'uk' or 'en'
    title = 'Студія розробки сайтів SiteDoer.pro';
    description = "Студія розробки сайтів SiteDoer.pro - лідер у створенні інноваційних та ефективних веб-проектів в Україні. Зверніться до нас для розробки професійного та креативного веб-сайту, підтримки та просування вашого бізнесу в Інтернеті.";
    keywords = 'розробка сайтів, студія веб-дизайну, веб-розробка, веб-сайти, сайт, створення сайтів, розробка веб-сайтів, SiteDoer.pro';
  }

  return { title, description, keywords };
}
