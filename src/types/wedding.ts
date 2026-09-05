/**
 * Definisi Type & Interface untuk Undangan Pernikahan Nasional Syar'i V3
 */

export interface GeneralInfo {
  pageTitle: string;
  metaDescription: string;
  coverSubheading: string;
  coverBlessing: string;
  coverImg: string;
  heroBgImg: string;
  heroBadge: string;
  heroDate: string;
  heroLocation: string;
}

export interface PersonProfile {
  shortName: string;
  roleBadge?: string;
  fullName: string;
  father: string;
  mother: string;
  pesantren: string;
  instaUser: string;
  instaLink: string;
  img: string;
}

export interface EventDetail {
  title: string;
  date: string;
  time: string;
  venueName: string;
  venueAddress: string;
  mapsLink: string;
}

export interface EventSchedule {
  akad: EventDetail;
  resepsi: EventDetail;
}

export interface MilestoneItem {
  year: string;
  title: string;
  desc: string;
}

export interface StorySection {
  quranSurah: string;
  quranArabic: string;
  quranMeaning: string;
  greeting: string;
  hikmahBody: string;
  hikmahAuthor: string;
  milestones: MilestoneItem[];
}

export interface DigitalEnvelope {
  bank1Name: string;
  bank1Number: string;
  bank1Holder: string;
  bank2Name: string;
  bank2Number: string;
  bank2Holder: string;
  homeAddress: string;
}

export interface WeddingData {
  general: GeneralInfo;
  groom: PersonProfile;
  bride: PersonProfile;
  countdownTarget: string;
  events: EventSchedule;
  story: StorySection;
  envelope: DigitalEnvelope;
}

export interface WishItem {
  name: string;
  status: 'Hadir' | 'Masih Ragu' | 'Berhalangan' | string;
  count: string;
  message: string;
  time: string;
}
