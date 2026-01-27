
import React from 'react';
import { Fruit } from './types';

export const WHATSAPP_NUMBER = "5577998535364";
export const WHATSAPP_MESSAGE = "Olá, vim pelo site e gostaria de mais informações sobre a Chácara!";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Helper to auto-generate the gallery list
export const GALLERY_IMAGES = [
  "/images/WhatsApp Image 2026-01-21 at 13.45.41 (1).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.41.jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.42 (1).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.42 (2).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.42 (3).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.42.jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.43 (1).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.43 (2).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.43 (3).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.43 (4).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.43 (5).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.43.jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.44 (1).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.44 (2).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.44 (3).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.44 (4).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.44.jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.45 (1).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.45 (2).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.45 (3).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.45.jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.46 (1).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.46 (2).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.46 (3).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.46.jpeg"
];

export const GALLERY_VIDEOS = [
  "/videos/WhatsApp Video 2026-01-21 at 13.45.49 (1).mp4",
  "/videos/WhatsApp Video 2026-01-21 at 13.45.49 (2).mp4",
  "/videos/WhatsApp Video 2026-01-21 at 13.45.49 (3).mp4",
  "/videos/WhatsApp Video 2026-01-21 at 13.45.49 (4).mp4",
  "/videos/WhatsApp Video 2026-01-21 at 13.45.49.mp4",
  "/videos/WhatsApp Video 2026-01-21 at 13.45.50 (1).mp4",
  "/videos/WhatsApp Video 2026-01-21 at 13.45.50 (2).mp4",
  "/videos/WhatsApp Video 2026-01-21 at 13.45.50.mp4",
  "/videos/WhatsApp Video 2026-01-21 at 13.45.56.mp4",
  "/videos/WhatsApp Video 2026-01-21 at 13.45.57.mp4"
];

export const IMAGES = {
  hero: GALLERY_IMAGES[0],
  terreno: "/images/WhatsApp Image 2026-01-21 at 13.45.42 (3).jpeg",
  lazer: GALLERY_IMAGES[2],
  quartos: "/images/WhatsApp Image 2026-01-21 at 13.45.48.jpeg",
  banheiro: GALLERY_IMAGES[4],
  cozinhaModerna: GALLERY_IMAGES[5],
  cozinhaRustica: GALLERY_IMAGES[6],
  redario: GALLERY_IMAGES[7],
  pomar: GALLERY_IMAGES[8],
  rio: GALLERY_IMAGES[9],
  location: GALLERY_IMAGES[10]
};

export const LAZER_IMAGES = [
  "/images/WhatsApp Image 2026-01-21 at 13.45.48 (4).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.48 (3).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.47.jpeg"
];

export const QUARTO_IMAGES = [
  "/images/WhatsApp Image 2026-01-21 at 13.45.47 (3).jpeg", // Kitchen/living area
  "/images/WhatsApp Image 2026-01-21 at 13.45.47 (2).jpeg", // Living room 
  "/images/WhatsApp Image 2026-01-21 at 13.45.47 (1).jpeg"  // Living room couch
];

export const COZINHA_IMAGES = [
  "/images/WhatsApp Image 2026-01-21 at 13.45.47 (3).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.47.jpeg"
];

export const REDARIO_IMAGES = [
  "/images/WhatsApp Image 2026-01-21 at 13.45.48 (4).jpeg",
  "/images/WhatsApp Image 2026-01-21 at 13.45.48.jpeg"
];

export const FRUITS: Fruit[] = [
  { name: "Pequi", icon: "🍃" },
  { name: "Manga", icon: "🥭" },
  { name: "Abacate", icon: "🥑" },
  { name: "Limão", icon: "🍋" },
  { name: "Coco", icon: "🥥" },
  { name: "Tamarindo", icon: "🌰" },
  { name: "Caju", icon: "🍎" },
  { name: "Urucum", icon: "🌿" },
];
