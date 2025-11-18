# UI Components Package

Shared Astro UI components for all sites in the monorepo.

## Available Components

### Header
Navigation header with mobile menu support.

```astro
---
import Header from 'ui/Header.astro';
---

<Header
  siteName="Utah Foundation Certification"
  logo="/logo.png"
  navItems={[
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]}
/>
```

### Footer
Site footer with links and social media.

```astro
---
import Footer from 'ui/Footer.astro';
---

<Footer
  siteName="Utah Foundation Certification"
  companyName="JDE Inc."
  footerLinks={[
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' }
  ]}
/>
```

### Hero
Hero section with CTA buttons.

```astro
---
import Hero from 'ui/Hero.astro';
---

<Hero
  title="Professional Foundation Services"
  subtitle="Trusted Since 2010"
  description="Expert foundation inspection and certification services you can rely on."
  primaryCTA={{ text: 'Get Started', href: '/contact' }}
  secondaryCTA={{ text: 'Learn More', href: '/about' }}
  variant="centered"
/>
```

### ProcessSteps
Display multi-step processes.

```astro
---
import ProcessSteps from 'ui/ProcessSteps.astro';
---

<ProcessSteps
  title="Our Process"
  description="Simple and straightforward certification process"
  steps={[
    { number: '1', title: 'Schedule', description: 'Book your inspection online' },
    { number: '2', title: 'Inspect', description: 'We visit your site' },
    { number: '3', title: 'Report', description: 'Receive detailed findings' },
    { number: '4', title: 'Certify', description: 'Get your certification' }
  ]}
/>
```

### TeamSection
Showcase your team members.

```astro
---
import TeamSection from 'ui/TeamSection.astro';
---

<TeamSection
  title="Meet Our Team"
  description="Experienced professionals dedicated to quality"
  teamMembers={[
    {
      name: 'John Doe',
      role: 'Lead Inspector',
      bio: 'Over 15 years of experience',
      image: '/team/john.jpg',
      social: [
        { platform: 'linkedin', url: 'https://linkedin.com/in/johndoe' }
      ]
    }
  ]}
/>
```

### FAQ
Accordion-style FAQ section.

```astro
---
import FAQ from 'ui/FAQ.astro';
---

<FAQ
  title="Frequently Asked Questions"
  description="Find answers to common questions"
  faqs={[
    {
      question: 'How long does an inspection take?',
      answer: 'Most inspections take 2-3 hours depending on the size of the property.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve all of Utah and surrounding areas.'
    }
  ]}
/>
```

### ContactForm
Firebase-integrated contact form.

```astro
---
import ContactForm from 'ui/ContactForm.astro';
---

<ContactForm
  siteName="utahfoundationcertification"
  title="Get In Touch"
  description="We'd love to hear from you"
  includeFileUpload={true}
/>
```

## Customization

All components use Tailwind CSS classes and respect the shared design system from `tailwind-config` package.

You can customize components by:
1. Passing different props
2. Extending the Tailwind theme
3. Creating site-specific wrapper components
