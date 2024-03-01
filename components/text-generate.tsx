"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Live streaming lost its charm, hijacked by unexpected 'bananas' that slipped into the frame. We're here to peel back the chaos and bring the cool back to streaming, ensuring every live moment is safe, fun, and genuinely captivating. Sorry, apes.`


export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}
