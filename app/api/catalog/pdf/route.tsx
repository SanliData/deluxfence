/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  renderToBuffer,
} from "@react-pdf/renderer";

const CONTACT = {
  phone: "+1 (469) 926-3405",
  email: "info@deluxfence.com",
  address: "USA · Serving luxury homeowners nationwide",
};

const CATALOG_PHOTOS = [
  { file: "fence-1.png", label: "Horizontal Slat Fence" },
  { file: "fence-2.png", label: "Privacy Fence" },
  { file: "fence-3.png", label: "Black Fence & Gate" },
  { file: "fence-4.png", label: "Garden Fence" },
  { file: "fence-5.png", label: "Pool Fence" },
  { file: "fence-6.png", label: "Pool & Landscape" },
  { file: "fence-brick-house.png", label: "Black Slat & Brick House" },
  { file: "fence-equestrian-simple.png", label: "Pasture & Slat Fence" },
  { file: "fence-gate-suburban.png", label: "Gate & Fence (Day)" },
];

function getImageBase64(fileName: string): string | null {
  try {
    const p = path.join(process.cwd(), "public", "images", "fence", fileName);
    const buf = fs.readFileSync(p);
    return `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: "Helvetica" },
  coverPage: {
    padding: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  coverTitle: { fontSize: 32, marginBottom: 12, color: "#2C3E50" },
  coverGold: { color: "#D4AF37" },
  coverSub: { fontSize: 14, color: "#5a6c7d", marginTop: 8 },
  coverTag: { fontSize: 11, color: "#7f8c8d", marginTop: 24 },
  sectionTitle: { fontSize: 18, marginBottom: 16, color: "#2C3E50", borderBottomWidth: 2, borderBottomColor: "#D4AF37", paddingBottom: 6 },
  productBlock: { marginBottom: 20 },
  productLabel: { fontSize: 12, marginTop: 8, color: "#2C3E50", fontWeight: "bold" },
  productImage: { width: "100%", maxHeight: 280, objectFit: "cover" },
  contactBlock: { marginTop: 16, fontSize: 11, color: "#2C3E50" },
  contactLine: { marginBottom: 6 },
  footer: { position: "absolute", bottom: 24, left: 40, right: 40, fontSize: 9, color: "#95a5a6", textAlign: "center" },
});

function CatalogDocument({ imageSources }: { imageSources: (string | null)[] }) {
  return (
    <Document>
      <Page size="A4" style={styles.coverPage}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.coverTitle}>
            Delux<Text style={styles.coverGold}>Fence</Text>
          </Text>
          <Text style={styles.coverSub}>Architectural-Grade Aluminum Fencing</Text>
          <Text style={styles.coverTag}>One fence system for every setting—endless possibilities.</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Product Catalog</Text>
        <Text style={{ fontSize: 11, color: "#2C3E50", lineHeight: 1.5, marginBottom: 20 }}>
          High-grade, maintenance-free aluminum fencing systems for the American luxury home.
          From backyards to suburban borders and pool perimeters—one system, endless possibilities.
        </Text>
        <Text style={styles.sectionTitle}>Gallery</Text>
        {CATALOG_PHOTOS.slice(0, 2).map((item, i) =>
          imageSources[i] ? (
            <View key={item.file} style={styles.productBlock}>
              <Image src={imageSources[i]!} style={styles.productImage} />
              <Text style={styles.productLabel}>{item.label}</Text>
            </View>
          ) : null
        )}
        <View style={styles.footer}>
          <Text>DeluxFence · {CONTACT.phone} · {CONTACT.email}</Text>
        </View>
      </Page>

      {[0, 2, 4, 6, 8].map((startIdx) => (
        <Page key={startIdx} size="A4" style={styles.page}>
          <Text style={styles.sectionTitle}>Gallery</Text>
          {CATALOG_PHOTOS.slice(startIdx, startIdx + 2).map((item, j) => {
            const idx = startIdx + j;
            const src = imageSources[idx];
            if (!src) return null;
            return (
              <View key={item.file} style={styles.productBlock}>
                <Image src={src} style={styles.productImage} />
                <Text style={styles.productLabel}>{item.label}</Text>
              </View>
            );
          })}
          <View style={styles.footer}>
            <Text>DeluxFence · {CONTACT.phone} · {CONTACT.email}</Text>
          </View>
        </Page>
      ))}

      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <View style={styles.contactBlock}>
          <Text style={styles.contactLine}>Phone: {CONTACT.phone}</Text>
          <Text style={styles.contactLine}>Email: {CONTACT.email}</Text>
          <Text style={styles.contactLine}>{CONTACT.address}</Text>
        </View>
        <Text style={{ marginTop: 24, fontSize: 11, color: "#7f8c8d" }}>
          Request a free quote at deluxfence.com or contact us directly.
        </Text>
        <View style={styles.footer}>
          <Text>DeluxFence · Architectural-Grade Aluminum Fencing</Text>
        </View>
      </Page>
    </Document>
  );
}

export async function GET() {
  try {
    const imageSources = CATALOG_PHOTOS.map((p) => getImageBase64(p.file));
    const doc = <CatalogDocument imageSources={imageSources} />;
    const buffer = await renderToBuffer(doc);
    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="DeluxFence-Catalog.pdf"',
      },
    });
  } catch (e) {
    console.error("Catalog PDF error:", e);
    return NextResponse.json({ error: "Failed to generate catalog" }, { status: 500 });
  }
}
