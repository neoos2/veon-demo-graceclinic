// Facts only from veon/client.json (company.contacts, products_services, facts B-C009…B-C013).
// Nothing here is invented: no prices, hours, licence, reviews or social profiles (client_decision).

export const clinic = {
  name: "Грація",
  fullName: "Грація — клініка жіночого здоров'я",
  phone: { href: "tel:+380960207841", display: "+38 096 020 78 41", short: "096 020 78 41" },
  phone2: { href: "tel:+380737357478", display: "073 735 74 78" },
  email: "graciaclinik7@gmail.com",
  city: "м. Львів",
  street: "вул. Кавалерідзе, 19",
  address: "м. Львів, вул. Кавалерідзе, 19",
  mapHref: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Львів, вулиця Кавалерідзе, 19"),
} as const;

export const nav = [
  { href: "#directions", label: "Напрями" },
  { href: "#packages", label: "Пакети" },
  { href: "#doctors", label: "Лікарі" },
  { href: "#approach", label: "Про клініку" },
  { href: "#contacts", label: "Контакти" },
] as const;

export interface Service { name: string; note?: string; tag?: string; details?: string[]; }

export const gynecology: Service[] = [
  { name: "Первинна консультація гінеколога" },
  { name: "Повторна консультація гінеколога протягом місяця" },
  {
    name: "Гінекологічний огляд",
    details: ["огляд у дзеркалах", "мазки на флору та цитологію", "пальпація молочних залоз"],
  },
  { name: "Консультація вагітної з оглядом" },
  { name: "Післяпологова консультація гінеколога" },
  { name: "Консультація дитячого гінеколога" },
  { name: "Онлайн-консультація", tag: "онлайн" },
];

export const mammology: Service[] = [
  { name: "Консультація мамолога та УЗД молочних залоз", note: "провідний спеціаліст" },
  { name: "Консультація та огляд молочних залоз у мамолога-онколога", note: "провідний спеціаліст" },
];

export const packageCommon = [
  "консультація",
  "огляд у дзеркалах",
  "пальпація молочних залоз",
  "відеокольпоскопія шийки матки",
];

export const packages = [
  { n: 1, diff: ["2 мазки"] },
  { n: 2, diff: ["рідинна цитологія", "мазок на мікрофлору"] },
  { n: 3, diff: ["2 мазки", "ВПЛ — 12 онкогенних штамів"] },
] as const;

// Confirmed profiles (client.json socials[], status: confirmed; R-005 demo: shown).
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/grace.clinic.lviv/" },
  { label: "Facebook", href: "https://www.facebook.com/graceclinic.lviv" },
] as const;
