// lib/constants.ts
import { Feature, NavigationItem } from "@/types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "HOME", href: "/" },
  { label: "CATEGORY", href: "/category" },
  { label: "MODELS", href: "/models" }, // changed from "ABOUT US"
  { label: "UPLOAD", href: "/upload" },
  { label: "SIGN IN/UP", href: "/auth/signin" },
];

export const FEATURES: Feature[] = [
  {
    id: "collection",
    title: "Telusuri koleksi file STL alat bantu kesehatan",
    description:
      "mulai dari prostetik hingga alat terapi. Semua file dapat diunduh gratis dan digunakan untuk edukasi, pengabdian, atau riset.",
    icon: "🦾",
  },
  {
    id: "design",
    title: "Punya desain STL yang bermanfaat?",
    description:
      "Bagikan ke sesama lewat fitur upload dengan persetujuan admin. Setiap kontribusi punya dampak!",
    icon: "📦",
  },
  {
    id: "community",
    title: "Bingung saat mencetak? atau Punya ide pengembangan?",
    description:
      "Forum kami terbuka untuk tanya-jawab seputar desain, pemakaian, dan perbaikan alat.",
    icon: "💬",
  },
  {
    id: "collaboration",
    title:
      "Bergabung dengan komunitas inovator, mahasiswa, dan praktisi kesehatan",
    description:
      "Tukar pikiran, berdiskusi, dan ciptakan solusi bersama untuk kebutuhan nyata.",
    icon: "👥",
  },
];
