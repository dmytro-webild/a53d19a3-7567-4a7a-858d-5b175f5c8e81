"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="blurBottom"
        cardStyle="inset"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Our Vision",
          id: "about",
        },
        {
          name: "Artists",
          id: "artists",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="I Bang Records"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Defining the Future of Sound"
      description="I Bang Records is an independent powerhouse, nurturing raw talent into musical legends through unwavering vision and industry-leading support."
      testimonials={[
        {
          name: "Marcus V.",
          handle: "@mv_sounds",
          testimonial: "I Bang Records didn't just sign me, they invested in my vision.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-product-photographer-doing-his-job-studio_23-2148970192.jpg",
        },
        {
          name: "Lena K.",
          handle: "@lena_vocal",
          testimonial: "The support system at I Bang is unparalleled. They get it.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/teen-boy-playing-piano-girlfriend-cozy-room_23-2147860797.jpg",
        },
        {
          name: "David R.",
          handle: "@david_pro",
          testimonial: "Working here elevated my production value significantly.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-movie-producer_23-2148915844.jpg",
        },
        {
          name: "Sarah P.",
          handle: "@sarah_media",
          testimonial: "The most professional environment I've encountered in years.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/process-creating-stand-up-comedy_23-2151058857.jpg",
        },
        {
          name: "John D.",
          handle: "@jd_mgmt",
          testimonial: "Pure creative excellence from start to finish.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-young-reporter-with-photo-camera-dark-photo-studio_613910-3843.jpg",
        },
      ]}
      buttons={[
        {
          text: "Explore Artists",
          href: "#artists",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/closeup-shot-cartridge-portable-gramophone-with-blurred-background_181624-18095.jpg?_wi=1"
      imageAlt="I Bang Records Studio Session"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-female-movie-producer_23-2148915841.jpg",
          alt: "Artist Manager",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-artist-playing-guitar_23-2149154307.jpg",
          alt: "Lead Vocalist",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-people-with-musical-instruments_23-2149223605.jpg",
          alt: "Senior Producer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-holding-guitar_23-2149154289.jpg",
          alt: "Marketing Head",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-women-playing-together_23-2149223633.jpg",
          alt: "Live Performer",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Independent Powerhouse",
        },
        {
          type: "text",
          text: "Charting Hits Daily",
        },
        {
          type: "text",
          text: "Global Distribution",
        },
        {
          type: "text",
          text: "Creative Freedom",
        },
        {
          type: "text",
          text: "Sonic Innovation",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="A Legacy Built on Sound"
      description={[
        "At I Bang Records, we believe every note tells a story. Our label serves as a catalyst for creative growth, providing a sanctuary where artists are empowered to push the boundaries of their craft.",
        "We specialize in comprehensive artist management, strategic promotion, and world-class production support, ensuring that every project reaches its full sonic potential.",
      ]}
      buttons={[
        {
          text: "Our Story",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="artists" data-section="artists">
      <TeamCardTen
      useInvertedBackground={false}
      title="Meet Our Artists"
      tag="Creative Talent"
      membersAnimation="slide-up"
      members={[
        {
          id: "art-1",
          name: "Symphony Soul",
          imageSrc: "http://img.b2bpic.net/free-photo/person-producing-music-indoors_23-2148924304.jpg?_wi=1",
          imageAlt: "Artist Symphony Soul",
        },
        {
          id: "art-2",
          name: "Urban Pulse",
          imageSrc: "http://img.b2bpic.net/free-photo/guitar-music-outdoors_23-2148079096.jpg",
          imageAlt: "Artist Urban Pulse",
        },
        {
          id: "art-3",
          name: "Echo Theory",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-musician-with-stylish-hair-elegant-clothes-with-guitar-his-hands-playing-posing-dark-background_613910-18283.jpg",
          imageAlt: "Artist Echo Theory",
        },
      ]}
      memberVariant="card"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Artist Development",
          descriptions: [
            "Full guidance from brand building to live performance coaching.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-working-studio_23-2150232116.jpg",
          imageAlt: "record label office",
        },
        {
          id: "s2",
          title: "Production Support",
          descriptions: [
            "State-of-the-art studio access with world-class engineers.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-cartridge-portable-gramophone-with-blurred-background_181624-18095.jpg?_wi=2",
          imageAlt: "record label office",
        },
        {
          id: "s3",
          title: "Strategic Marketing",
          descriptions: [
            "High-impact campaigns designed to maximize your reach.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/person-producing-music-indoors_23-2148924304.jpg?_wi=2",
          imageAlt: "record label office",
        },
      ]}
      title="What We Do"
      description="We offer a full suite of services to transform your musical vision into a reality."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15+",
          description: "Chart-topping hits",
        },
        {
          id: "m2",
          value: "5M+",
          description: "Global streams",
        },
        {
          id: "m3",
          value: "20+",
          description: "Artists developed",
        },
      ]}
      title="Our Impact"
      description="Evidence of our commitment to excellence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Marcus V.",
          role: "Vocalist",
          company: "Artist",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/skilled-male-composer-producing-new-songs-his-mixing-console_482257-96160.jpg",
        },
        {
          id: "t2",
          name: "Lena K.",
          role: "Songwriter",
          company: "Artist",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-singer-headphones-singing-record-new-song-modern-studio_574295-4374.jpg",
        },
        {
          id: "t3",
          name: "David R.",
          role: "Producer",
          company: "Producer",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-musician-working-studio_23-2150265042.jpg",
        },
        {
          id: "t4",
          name: "Sarah P.",
          role: "Journalist",
          company: "Media",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-woman-working-together-animation-studio_23-2149208032.jpg",
        },
        {
          id: "t5",
          name: "John D.",
          role: "Director",
          company: "Management",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-white-poster_1187-1567.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "5.0",
          label: "Avg Rating",
        },
        {
          value: "100%",
          label: "Retention",
        },
        {
          value: "100+",
          label: "Projects",
        },
      ]}
      title="Artist Voices"
      description="Hear what our community says about working with I Bang Records."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How do I submit my demo?",
          content: "Visit our contact section and fill out the submission form with a link to your work.",
        },
        {
          id: "q2",
          title: "What genres do you specialize in?",
          content: "We cover a diverse range, focusing on soulful and cutting-edge creative projects.",
        },
        {
          id: "q3",
          title: "Do you accept new artists?",
          content: "We are always looking for visionary talent that aligns with our label values.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-women-with-guitars-floor_23-2149130761.jpg"
      mediaAnimation="slide-up"
      title="Label FAQs"
      description="Common questions about working with I Bang Records."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Let's Talk"
      title="Ready to Start Your Journey?"
      description="Send us your demo or reach out regarding professional inquiries."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Label",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Artists",
              href: "#artists",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="I Bang Records"
      copyrightText="© 2025 I Bang Records"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
