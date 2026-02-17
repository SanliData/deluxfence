# AI Image Generation Prompt – Aluminum Fence

Use this prompt with your preferred AI image generator (e.g. DALL·E, Midjourney, Gemini, Stable Diffusion) to create high-quality, on-brand fence imagery for deluxfence.com.

---

## Main prompt (4 environments)

```
High-end architectural photography of a modern matte black aluminum horizontal slat fence. Showcase the fence in four distinct luxury environments: 1. A modern rooftop terrace with a dramatic city skyline background. 2. A serene winter landscape covered in deep snow with pine trees. 3. A high-end desert oasis featuring a turquoise swimming pool and palm trees. 4. A lush, vibrant English garden with blooming roses climbing the fence. Cinematic lighting, 8k resolution, photorealistic, emphasizing premium materials and property value.
```

---

## Single-environment variants (for one image at a time)

**Rooftop terrace**
```
High-end architectural photography of a modern matte black aluminum horizontal slat fence on a modern rooftop terrace with a dramatic city skyline background. Cinematic lighting, 8k resolution, photorealistic, premium materials.
```

**Winter landscape**
```
High-end architectural photography of a modern matte black aluminum horizontal slat fence in a serene winter landscape covered in deep snow with pine trees. Cinematic lighting, 8k resolution, photorealistic, premium materials.
```

**Desert oasis**
```
High-end architectural photography of a modern matte black aluminum horizontal slat fence at a high-end desert oasis with a turquoise swimming pool and palm trees. Cinematic lighting, 8k resolution, photorealistic, premium materials.
```

**English garden**
```
High-end architectural photography of a modern matte black aluminum horizontal slat fence in a lush, vibrant English garden with blooming roses climbing the fence. Cinematic lighting, 8k resolution, photorealistic, premium materials.
```

---

## Sharpening & Night / LED view

**Netleştirme (sharpening):** Flu görselleri netleştirmek için harici araç kullanın:
- **Topaz Sharpen AI**, **Let's Enhance**, veya **Photoshop** (Unsharp Mask / Smart Sharpen)
- Yüksek çözünürlüklü (2x–4x) kaydedip `public/images/fence/` içinde mevcut dosyanın üzerine yazın (örn. `fence-gate-day.png`).

**Gece + LED görseli:** Aynı sahnenin gece ve LED aydınlatmalı versiyonu için AI veya fotoğrafçılık:
- Prompt örneği: *"Same modern black horizontal slat fence and gate at night, warm LED strip lights along the top of the fence and on the white pillars, dark blue sky, photorealistic, 8k."*
- Üretilen görseli `fence-gate-night.png` olarak kaydedip Day/Night bölümünde kullanabilirsiniz.

---

## Usage

1. Generate images using the prompt(s) above.
2. Save the outputs (e.g. PNG, high resolution).
3. Add them to `public/images/fence/` with clear names (e.g. `fence-rooftop.png`, `fence-winter.png`).
4. Update `lib/aluminum-fence-images.ts` and, if needed, `lib/usa-images.ts` to include the new image paths and alt text.

All images used on the site should be your own or properly licensed to avoid copyright issues.
