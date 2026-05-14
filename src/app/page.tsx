"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
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
          name: "Our Vision",          id: "about"},
        {
          name: "Artists",          id: "artists"},
        {
          name: "Services",          id: "services"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="I Bang Records"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="A Legacy Built on Sound"
      description={[
        "At I Bang Records, we believe every note tells a story. Our label serves as a catalyst for creative growth, providing a sanctuary where artists are empowered to push the boundaries of their craft.",        "We specialize in comprehensive artist management, strategic promotion, and world-class production support, ensuring that every project reaches its full sonic potential."]}
      buttons={[]}
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
          id: "art-1",          name: "Mikey 3ang ",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1778740960550-436j55r5.jpg",          imageAlt: "Artist Symphony Soul"},
        {
          id: "art-2",          name: "Kwayy Yungankk",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1778741051426-yzlhyv7y.jpg",          imageAlt: "Artist Urban Pulse"},
        {
          id: "art-4",          name: "King Art ",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1778741436261-7vt0jbiz.jpg",          imageAlt: "Artist King Art"},
        {
          id: "art-3",          name: "Go Baby",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1778741070298-iycimyt7.jpg?_wi=2",          imageAlt: "Artist Echo Theory"},
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
          id: "s1",          title: "Artist Development",          descriptions: [
            "Full guidance from brand building to live performance coaching. We work together and as a family to ensure that we are putting the music that not only we love but our audiance as well. We have in house managers to guide our Artist in the right direction so thier future can be secured and structured.  "],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1778742107545-xxt9pvt3.jpg",          imageAlt: "record label office"},
        {
          id: "s2",          title: "Production Support",          descriptions: [
            "State-of-the-art studio access with world-class engineers. We have studio access in Colorado. We are currently working on building a Mobile Studio. "],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1778742340555-ryr3zgkh.jpg",          imageAlt: "record label office"},
        {
          id: "s3",          title: "Strategic Marketing",          descriptions: [
            "High-impact campaigns designed to maximize your reach. We are working with many talented well known artist to showcase our artist on features and opening acts. We are streaming our 1st song We Gang in the FW Bang Compilation on all streaming platforms."],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1778742326977-nfct9g9n.webp",          imageAlt: "record label office"},
      ]}
      title="What We Do"
      description="We offer a full suite of services to transform your musical vision into a reality."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "How do I submit my demo?",          content: "Visit our contact section and fill out the submission form with a link to your work."},
        {
          id: "q2",          title: "What genres do you specialize in?",          content: "We cover a diverse range, focusing on soulful and cutting-edge creative projects."},
        {
          id: "q3",          title: "Do you accept new artists?",          content: "We are always looking for visionary talent that aligns with our label values."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1778741912220-w5ia710a.jpg"
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
        variant: "radial-gradient"}}
      tag="Let's Talk"
      title="Ready to Start Your Journey?"
      description="Send us your demo or reach out regarding professional inquiries."
      buttons={[
        {
          text: "Contact Us",          href: "https://ibangrecords.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="I Bang Records"
      columns={[
        { title: "Navigation", items: [{ label: "About", href: "#about" }, { label: "Artists", href: "#artists" }, { label: "Services", href: "#services" }] },
        { title: "Socials", items: [{ label: "Instagram", href: "https://www.instagram.com/ibangrecords" }, { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589022357123" }] }
      ]}
      copyrightText="© 2025 I Bang Records"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
