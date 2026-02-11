"use client";

import { useState } from "react";
import { ContactHeroSection } from "./contact-hero-section";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { Locale } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";

const GET_IN_TOUCH_SECTION_ID = "get-in-touch";

/** Extra gap (px) between sticky header and section when scrolling into view. */
const SCROLL_TOP_GAP = 120;

/** Scroll to contact form section, offset by sticky header height + gap so content has space below the menu. */
function scrollToGetInTouch() {
  const el = document.getElementById(GET_IN_TOUCH_SECTION_ID);
  const header = document.querySelector("header.sticky");
  if (!el) return;
  const headerHeight = header ? (header as HTMLElement).getBoundingClientRect().height : 0;
  const targetScrollY = el.getBoundingClientRect().top + window.scrollY - headerHeight - SCROLL_TOP_GAP;
  window.scrollTo({ top: Math.max(0, targetScrollY), behavior: "smooth" });
}

interface ContactHeroWithProjectBriefModalProps {
  locale: Locale;
  contactHref: string;
  supportHref: string;
  pageTitleData?: PageTitleRecord | null;
}

export function ContactHeroWithProjectBriefModal({
  locale,
  contactHref,
  supportHref,
  pageTitleData,
}: ContactHeroWithProjectBriefModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();

  return (
    <>
      {ToastComponent}
      <ContactHeroSection
        locale={locale}
        contactHref={contactHref}
        supportHref={supportHref}
        pageTitleData={pageTitleData}
        onPrimaryCtaClick={scrollToGetInTouch}
      />
      <HeroSectionPopup
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="contact"
        notes="Enquiry from contact page (Submit a project brief)"
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
    </>
  );
}
